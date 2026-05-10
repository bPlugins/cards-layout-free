
import { TextControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";


const CardBtn = ({ btnLabel, btnUrl, newTab, updateCard }) => {


  return (
    <>
      {/* 1. Button Label Control */}

      <TextControl
        label={__("Button label", "cards-layout")}
        labelPosition={__("top", "cards-layout")}
        value={btnLabel}
        placeholder={__("Enter Label", "cards-layout")}
        onChange={(val) => updateCard("btnLabel", val)}
      />







      {/* 2. Button URL Control */}
      <TextControl
        label={__("Button Url", "cards-layout")}
        labelPosition={__("top", "cards-layout")}
        value={btnUrl}
        placeholder={__("Enter Url", "cards-layout")}
        onChange={(val) => updateCard("btnUrl", val)}
      />


      {/* 3. New Tab Toggle Control */}
      <ToggleControl
        label={__("Open new tab", "cards-layout")}
        checked={newTab}
        onChange={(val) => updateCard("newTab", val)}
      />

    </>
  );
};

export default CardBtn;