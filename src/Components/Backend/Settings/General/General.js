import Layout from "./Element/Layout";
import Panel from "./Panel/Panel";
import Default from "./Layouts/Default";
import HeroFeatureCard from "./Layouts/HeroFeatureCard";
import CardTag from './Element/CardTage';
import { isPremiumTheme } from '../../../../utils/functions';
import { layoutsWithTag } from '../../../../utils/options';

// Pro layouts' General-tab panels: src/pro/editor.js (Pro build only).
const proGeneralPanels = PHCLB_PRO ? require("../../../../pro/editor").proGeneralPanels : {};

const General = ({
  attributes,
  setAttributes,
  updateObject,
  activeIndex,
  setActiveIndex,
  premiumProps,
}) => {

  const { cardsLayout = {} } = attributes || {};
  const { style = "default" } = cardsLayout || {};
  const isProTheme = isPremiumTheme(attributes?.cardsLayout?.style);
  const ProGeneral = proGeneralPanels[style];

  return (
    <>
      {/*==============
          layout
     =============  */}
      <Layout {...{ attributes, setAttributes, premiumProps, isProTheme }} />

      {/*==============
        Items Panel
     =============  */}
      <Panel {...{ attributes, setAttributes, activeIndex, setActiveIndex, premiumProps, isProTheme }} />

      {/*==============
        Default Card Elements
     =============  */}
      {style === "default" && (
        <Default {...{ attributes, setAttributes, updateObject, premiumProps, isProTheme }} />
      )}
      {/*==============
       Hero Feature Card Elements
     =============  */}
      {style === "hero-feature" && (
        <HeroFeatureCard {...{ attributes, setAttributes, premiumProps, isProTheme }} />
      )}
      {ProGeneral && (
        <ProGeneral {...{ attributes, setAttributes, updateObject, premiumProps, isProTheme }} />
      )}

      {
        layoutsWithTag.includes(style) && (
          <CardTag {...{ attributes, setAttributes, premiumProps, isProTheme }} />
        )
      }



    </>

  );
};
export default General;
