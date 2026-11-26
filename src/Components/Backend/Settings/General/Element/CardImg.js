// import {
//   InlineDetailMediaUpload,
//   Label,
// } from "../../../../../../../bpl-tools/Components";
// import { __ } from "@wordpress/i18n";

// import { FocalPointPicker, TextControl } from "@wordpress/components";
// const CardImg = ({
//   isContent = false,
//   cards = [],
//   index = 0,
//   updateCard = () => { },
//   label = "Slide Image:",
//   hideFocalPoint = false,
// }) => {
//   const { img, altText, focalPoint } = cards[index];

//   return (
//     <>
//       <Label className="mt20">{label}</Label>
//       <InlineDetailMediaUpload
//         value={img}
//         types={["image"]}
//         onChange={(val) => updateCard("img", val)}
//         placeholder={__("Enter Image URL", "cards-layout")}
//       />

//       {!hideFocalPoint && <FocalPointPicker
//         className="mt20"
//         __nextHasNoMarginBottom
//         url={img?.url}
//         value={focalPoint}
//         onChange={(newFocalPoint) => updateCard("focalPoint", newFocalPoint)}
//         onDrag={(newFocalPoint) => updateCard("focalPoint", newFocalPoint)}
//       />}

//       <TextControl
//         className="mt20"
//         label={__("Image Alt", "cards-layout")}
//         labelPosition={__("top", "cards-layout")}
//         value={isContent ? img?.alt : altText}
//         placeholder={__("Enter Image Alt Text", "cards-layout")}
//         onChange={(val) => updateCard("altText", val)}
//       />
//     </>
//   );
// };

// export default CardImg;
import {
  InlineDetailMediaUpload,
} from "../../../../../../../bpl-tools/Components";
import { __ } from "@wordpress/i18n";
import { FocalPointPicker, TextControl } from "@wordpress/components";
import { renderControl } from '../../../../../utils/functions';


const CardImg = ({
  isContent = false,
  cards = [],
  index = 0,
  updateCard = () => { },
  hideFocalPoint = false,
  // Add these props to receive the state
  premiumProps = {},
  isProTheme = false,
}) => {
  const { img, altText, focalPoint } = cards[index];

  // Common configuration for the lock logic
  const controlBase = {
    isProTheme,
    premiumProps,
  };

  return (
    <>


      {/* 1. Media Upload Control */}
      {renderControl({
        ...controlBase,
        Component: InlineDetailMediaUpload,
        props: {
          className: "mt20",
          label: __("Image", "cards-layout"),
          labelPosition: __("top", "cards-layout"),
          value: img,
          types: ["image"],
          onChange: (val) => updateCard("img", val),
          placeholder: __("Enter Image URL", "cards-layout"),
        }
      })}

      {/* 2. Focal Point Picker */}
      {!hideFocalPoint && renderControl({
        ...controlBase,
        Component: FocalPointPicker,
        props: {
          className: "mt20",
          label: __("Focal Point", "cards-layout"),
          labelPosition: __("top", "cards-layout"),
          __nextHasNoMarginBottom: true,
          url: img?.url,
          value: focalPoint,
          onChange: (newFocalPoint) => updateCard("focalPoint", newFocalPoint),
          onDrag: (newFocalPoint) => updateCard("focalPoint", newFocalPoint),
        }
      })}

      {/* 3. Alt Text Control */}
      {renderControl({
        ...controlBase,
        Component: TextControl,
        props: {
          className: "mt20",
          label: __("Image Alt", "cards-layout"),
          labelPosition: "top",
          value: isContent ? img?.alt : altText,
          placeholder: __("Enter Image Alt Text", "cards-layout"),
          onChange: (val) => updateCard("altText", val),
        }
      })}
    </>
  );
};

export default CardImg;