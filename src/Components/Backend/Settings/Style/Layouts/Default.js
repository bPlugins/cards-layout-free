import Content from "../Elements/Content";
import Btn from "../Elements/Default/Btn";
import Cards from "../Elements/Default/Cards";
import Image from "../Elements/Default/Image";

const Default = ({ attributes, updateObject }) => {
  return (
    <>
      <Cards {...{ attributes, updateObject }} />
      <Image {...{ attributes, updateObject }} />
      <Content {...{ attributes, updateObject }} />
      <Btn {...{ attributes, updateObject }} />
    </>
  );
};

export default Default;
