import Content from "../Elements/Content";
import Btn from "../Elements/Default/Btn";
import Cards from "../Elements/Default/Cards";
import Image from "../Elements/Default/Image";

const Default = ({ attributes, updateObject, premiumProps }) => {
  return (
    <>
      <Cards {...{ attributes, updateObject, premiumProps }} />
      <Image {...{ attributes, updateObject, premiumProps }} />
      <Content {...{ attributes, updateObject, premiumProps }} />
      <Btn {...{ attributes, updateObject, premiumProps }} />
    </>
  );
};

export default Default;
