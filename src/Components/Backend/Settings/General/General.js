import Layout from "./Element/Layout";
import Panel from "./Panel/Panel";
import Default from "./Layouts/Default";
import HeroFeatureCard from "./Layouts/HeroFeatureCard";
import CardTag from './Element/CardTage';


const General = ({
  attributes,
  setAttributes,
  updateObject,
  activeIndex,
  setActiveIndex,

}) => {

  const { cardsLayout = {} } = attributes || {};
  const { style = "default" } = cardsLayout || {};
  const cardsWithTag = ["hero-feature", "achievement", "feature"];


  return (
    <>
      {/*==============
          layout 
     =============  */}
      <Layout {...{ attributes, setAttributes }} />

      {/*==============
        Items Panel
     =============  */}
      <Panel {...{ attributes, setAttributes, activeIndex, setActiveIndex }} />

      {/*==============
        Default Card Elements
     =============  */}
      {style === "default" && (
        <Default {...{ attributes, setAttributes, updateObject }} />
      )}
      {/*==============
       Hero Feature Card Elements
     =============  */}
      {style === "hero-feature" && (
        <HeroFeatureCard {...{ attributes, setAttributes }} />
      )}


      {
        cardsWithTag.includes(style) && (
          <CardTag {...{ attributes, setAttributes }} />
        )
      }



    </>

  );
};
export default General;
