/**
 * Helpers shared by the editor and the front end.
 *
 * This file is bundled into build/view.js, which runs on the live site. Keep it free of
 * editor-only imports (@wordpress/components, @wordpress/block-editor, @wordpress/data,
 * bpl-tools Components/ProControls): any of them would load the editor packages on every
 * page that shows a card block. Editor-only helpers belong in ./functions.js.
 */
import { cardsOpt } from "./options";
import cardPhoto1 from "../assets/images/card-1.jpg";
import cardPhoto2 from "../assets/images/card-2.jpg";
import cardPhoto3 from "../assets/images/card-3.jpg";

/*
 * Placeholder photos bundled with the plugin (800px wide, 22–68 KB each), shown until a card
 * gets its own image. Each layout keeps the placeholder 2.0.3 used (Default: photo 1, Hero
 * Feature: photo 2), so pages that kept the placeholders look the same after updating.
 */
export const heroPlaceholderPhoto = cardPhoto2;

/*
 * Versions 1.1.0–2.0.2 used full-size copies of these photos hosted on ImgBB (0.8–3.9 MB
 * each) as defaults, so many saved cards still point there. They are recognised by their
 * ImgBB image IDs and replaced with the bundled copies: same photo, no third-party request.
 */
const legacyPlaceholderPhotos = {
  v4ZqhZKV: cardPhoto1,
  KjbH0QFg: cardPhoto2,
  JR5B76cx: cardPhoto3,
};

/**
 * The image URL to show for a card: its own image, or a bundled placeholder when it has none.
 *
 * @param {Object} img         The card's `img` attribute ({ url, ... }).
 * @param {string} placeholder Photo to use when the card has no image (default: photo 1).
 * @return {string} Image URL.
 */
export const getCardImageUrl = (img, placeholder = cardPhoto1) => {
  const url = img?.url;
  if (!url) {
    return placeholder;
  }
  const legacyId = Object.keys(legacyPlaceholderPhotos).find((id) => url.includes(`/${id}/`));
  return legacyId ? legacyPlaceholderPhotos[legacyId] : url;
};

// Function to check if a string is a valid URL
export function isValidURL(str) {
  if (!str) {
    return false;
  }
  try {
    new URL(str);
    return true;
  } catch (err) {
    return false;
  }
}

export const addSvgAttrs = (svgString, attrs = {}) => {
  let extra = Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");
  return svgString.replace("<svg", `<svg ${extra}`);
};

// is the pro theme or not
export const isPremiumTheme = (style) => {
  return cardsOpt?.find((item) => item.value === style)?.isPro;
};
