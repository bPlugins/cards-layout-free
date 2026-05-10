import Achievement from "./Layouts/Achievement";
import Default from "./Layouts/Default";
import Feature from "./Layouts/Feature";
import HeroFeature from "./Layouts/HeroFeature";
import CardTag from './Elements/CardTag';







const Style = ({ attributes, setAttributes, updateObject }) => {
  const { cardsLayout = {} } = attributes || {};
  const cardsWithTag = ["hero-feature", "achievement", "feature"];
  const { style = "default" } = cardsLayout || {};


  return (
    <>
      {style === "default" && (
        <>
          <Default {...{ attributes, updateObject }} />
        </>
      )}

      {style === "feature" && (
        <>
          <Feature {...{ attributes, updateObject }} />
        </>
      )}

      {style === "hero-feature" && (
        <>
          <HeroFeature {...{ attributes, setAttributes, updateObject }} />
        </>
      )}

      {style === "achievement" && (
        <>
          <Achievement {...{ attributes, setAttributes, updateObject }} />
        </>
      )}


      {
        cardsWithTag.includes(style) && (
          <CardTag {...{ attributes, updateObject }} />
        )
      }





    </>
  );
};
export default Style;
