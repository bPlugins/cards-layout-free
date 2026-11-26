import Achievement from "./Layouts/Achievement";
import Default from "./Layouts/Default";
import Feature from "./Layouts/Feature";
import HeroFeature from "./Layouts/HeroFeature";
import CardTag from './Elements/CardTag';
import { isPremiumTheme } from '../../../../utils/functions';
import { layoutsWithTag } from '../../../../utils/options';

// Pro layouts' Style-tab panels: src/pro/editor.js (Pro build only).
const proStylePanels = PHCLB_PRO ? require("../../../../pro/editor").proStylePanels : {};

const stylePanels = {
  default: Default,
  feature: Feature,
  "hero-feature": HeroFeature,
  achievement: Achievement,
  ...proStylePanels,
};

const Style = ({ attributes, setAttributes, updateObject, premiumProps = {} }) => {
  const { cardsLayout = {} } = attributes || {};
  const { style = "default" } = cardsLayout || {};
  const isProTheme = isPremiumTheme(style);
  const StylePanel = stylePanels[style];

  return (
    <>
      {StylePanel && (
        <StylePanel {...{ attributes, setAttributes, updateObject, premiumProps, isProTheme }} />
      )}
      {
        layoutsWithTag.includes(style) && (
          <CardTag {...{ attributes, updateObject, premiumProps, isProTheme }} />
        )
      }
    </>
  );
};
export default Style;
