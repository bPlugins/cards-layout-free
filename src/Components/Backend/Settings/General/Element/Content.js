import { TextareaControl, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";


const Content = ({ isContent, img, title, desc, updateCard }) => {


  return (
    <>


      <TextControl
        className='mt10'
        label={__("Title", "cards-layout")}
        labelPosition={__("top", "cards-layout")}
        value={isContent ? img?.title : title}
        placeholder={__("Enter Title", "cards-layout")}
        onChange={(val) => updateCard("title", val)}
      />


      <TextareaControl
        className='mt10'
        label={__("Description", "cards-layout")}
        labelPosition={__("top", "cards-layout")}
        value={isContent ? img?.caption : desc}
        placeholder={__("Enter desc", "cards-layout")}
        onChange={(val) => updateCard("desc", val)}
      />
    </>
  );
};

export default Content;
