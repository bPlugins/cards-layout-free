// import { TextControl, ToggleControl } from "@wordpress/components";
// import { __ } from "@wordpress/i18n";
// import { renderControl } from '../../../../../utils/functions';

// const CardBtn = ({ btnLabel, btnUrl, newTab, updateCard, premiumProps, isProTheme }) => {
//   const controlBase = {
//     isProTheme,
//     premiumProps,

//   };
//   return (
//     <>

//       <TextControl
//         label={__("Button label", "cards-layout")}
//         labelPosition={__("top", "cards-layout")}
//         value={btnLabel}
//         placeholder={__("Enter Label", "cards-layout")}
//         onChange={(val) => updateCard("btnLabel", val)}
//       />

//       <TextControl
//         label={__("Button Url", "cards-layout")}
//         labelPosition={__("top", "cards-layout")}
//         value={btnUrl}
//         placeholder={__("Enter Url", "cards-layout")}
//         onChange={(val) => updateCard("btnUrl", val)}
//       />

//       <ToggleControl
//         label={__("Open new tab", "cards-layout")}
//         checked={newTab}
//         onChange={(val) => updateCard("newTab", val)}
//       />
//     </>
//   );
// };

// export default CardBtn;
import { TextControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { renderControl } from '../../../../../utils/functions';

const CardBtn = ({ btnLabel, btnUrl, newTab, updateCard, premiumProps, isProTheme }) => {
  const controlBase = {
    isProTheme,
    premiumProps,
  };

  return (
    <>
      {/* 1. Button Label Control */}
      {renderControl({
        ...controlBase,
        Component: TextControl,
        props: {
          label: __("Button label", "cards-layout"),
          labelPosition: "top",
          value: btnLabel,
          placeholder: __("Enter Label", "cards-layout"),
          onChange: (val) => updateCard("btnLabel", val),
        }
      })}

      {/* 2. Button URL Control */}
      {renderControl({
        ...controlBase,
        Component: TextControl,
        props: {
          label: __("Button Url", "cards-layout"),
          labelPosition: "top",
          value: btnUrl,
          placeholder: __("Enter Url", "cards-layout"),
          onChange: (val) => updateCard("btnUrl", val),
        }
      })}

      {/* 3. New Tab Toggle Control */}
      {renderControl({
        ...controlBase,
        Component: ToggleControl,
        props: {
          label: __("Open new tab", "cards-layout"),
          checked: newTab,
          onChange: (val) => updateCard("newTab", val),
        }
      })}
    </>
  );
};

export default CardBtn;