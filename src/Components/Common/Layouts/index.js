import { isPremiumTheme } from "../../../utils/common";
import { defaultLayoutLook } from "../../../utils/options";
import AchievementCard from "./AchievementCard";
import Default from "./Default";
import FeatureCard from "./FeatureCard";
import HeroFeatureCard from "./HeroFeatureCard";

/**
 * Card layout registry.
 *
 * Keys are the persisted `cardsLayout.style` values - never rename one, saved content
 * resolves through it.
 *
 * - `Component`     renders a single card.
 * - `enhance`       optional imperative enhancer for layouts whose behaviour spans the
 *                   whole list. Receives (containerEl, attributes) and returns a teardown.
 * - `signature`     optional serialiser telling `useLayoutBehavior` when to remount the
 *                   enhancer. Without it the enhancer mounts once per layout change.
 * - `hasInnerLinks` set when the card markup owns its own anchor, so the card is never
 *                   also wrapped in one (nested anchors break clicks and screen readers).
 *
 * The Pro layouts are registered in src/pro/layouts.js, which only the Pro build includes
 * (PHCLB_PRO is false in the free build, so webpack drops the require). A block saved with a
 * layout that isn't registered renders with the Default layout, so its content stays visible.
 */
export const cardLayouts = {
  default: { Component: Default },
  feature: { Component: FeatureCard },
  "hero-feature": { Component: HeroFeatureCard },
  achievement: { Component: AchievementCard },
  ...(PHCLB_PRO ? require("../../../pro/layouts").proCardLayouts : {}),
};

export const getCardLayout = (style) => cardLayouts[style] || cardLayouts.default;

/**
 * Decides how a block is rendered. Visitors never see a locked or blurred section: a Pro layout
 * falls back to the Default layout when it isn't part of this build (the free plugin), or on the
 * site when Cards Layout Pro isn't active. The fallback also uses the Default look, so text
 * colours chosen for a dark Pro card stay readable. In the editor an available Pro layout is
 * still shown, so it can be previewed; Edit.js tells the user what visitors see.
 *
 * @param {Object}  attributes          Block attributes.
 * @param {Object}  options
 * @param {boolean} options.isPremium   Whether Cards Layout Pro is active.
 * @param {boolean} options.isEditor    Rendering in the block editor.
 * @return {{attributes: Object, style: string, isFallback: boolean, isLocked: boolean}}
 *         The attributes to render with, the saved layout, and why it may differ.
 */
export const resolveLayout = (attributes, { isPremium = false, isEditor = false } = {}) => {
  const style = attributes?.cardsLayout?.style || "default";
  const isLocked = !!isPremiumTheme(style) && !isPremium;
  const isFallback = !cardLayouts[style] || (isLocked && !isEditor);

  if (!isFallback) {
    return { attributes, style, isFallback, isLocked };
  }

  const { cardStyle = {}, cardsLayout = {} } = attributes;
  return {
    attributes: {
      ...attributes,
      ...defaultLayoutLook,
      cardStyle: { ...defaultLayoutLook.cardStyle, align: cardStyle.align, newTab: cardStyle.newTab },
      cardsLayout: { ...cardsLayout, style: "default" },
    },
    style,
    isFallback,
    isLocked,
  };
};
