
import {
  InlineDetailMediaUpload,
} from "../../../../../../../bpl-tools/Components";
import { __ } from "@wordpress/i18n";
import { FocalPointPicker, TextControl } from "@wordpress/components";



const CardImg = ({
  isContent = false,
  cards = [],
  index = 0,
  updateCard = () => { },
  hideFocalPoint = false,
  // Add these props to receive the state

}) => {
  const { img, altText, focalPoint } = cards[index];



  return (
    <>


      {/* 1. Media Upload Control */}

      <InlineDetailMediaUpload
        className="mt20"
        label={__("Image", "cards-layout")}
        labelPosition={__("top", "cards-layout")}
        value={img}
        types={["image"]}
        onChange={(val) => updateCard("img", val)}
        placeholder={__("Enter Image URL", "cards-layout")}
      />




      {/* 2. Focal Point Picker */}
      {
        !hideFocalPoint &&
        <FocalPointPicker
          className="mt20"
          __nextHasNoMarginBottom
          url={img?.url}
          value={focalPoint}
          onChange={(newFocalPoint) => updateCard("focalPoint", newFocalPoint)}
          onDrag={(newFocalPoint) => updateCard("focalPoint", newFocalPoint)}
        />
      }


      {/* 3. Alt Text Control */}
      <TextControl
        className="mt20"
        label={__("Image Alt", "cards-layout")}
        labelPosition="top"
        value={isContent ? img?.alt : altText}
        placeholder={__("Enter Image Alt Text", "cards-layout")}
        onChange={(val) => updateCard("altText", val)}
      />



    </>
  );
};

export default CardImg;