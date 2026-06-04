import Content from "../Elements/Content";
import BaseCard from "../Elements/Default/BaseCard";
import IconWrap from "../Elements/IconWrap";

const Feature = (props) => {
  const { attributes = {}, updateObject } = props;

  return (
    <>
      <BaseCard {...{ attributes, updateObject }} />
      <Content {...{ attributes, updateObject }} />
      <IconWrap {...{ attributes, updateObject }} />
    </>
  );
};

export default Feature;
