import Content from "../Elements/Content";
import BaseCard from "../Elements/Default/BaseCard";
import IconWrap from "../Elements/IconWrap";

const Feature = (props) => {
  const { attributes = {}, updateObject, isProTheme, premiumProps } = props;

  return (
    <>
      <BaseCard {...{ attributes, updateObject, isProTheme, premiumProps }} />
      <Content {...{ attributes, updateObject, isProTheme, premiumProps }} />
      <IconWrap {...{ attributes, updateObject, isProTheme, premiumProps }} />
    </>
  );
};

export default Feature;
