import { BorderControl, PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  Background,
  ColorControl,
} from "../../../../../../../bpl-tools/Components";


const IconWrap = ({ attributes, updateObject }) => {
  const { iconWrap = {} } = attributes || {};

  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Icon", "cards-layout")}
      initialOpen={false}
    >
      {/* 1. Icon Size */}


      <RangeControl
        label={__("Icon Size:", "cards-layout")}
        value={iconWrap?.size}
        onChange={(val) => updateObject("iconWrap", "size", val)}
        min={10}
      />

      {/* 2. Icon Color */}


      <ColorControl
        className="mt10"
        label={__("Color", "cards-layout")}
        value={iconWrap?.color}
        onChange={(val) => updateObject("iconWrap", "color", val)}
      />

      {/* 3. Icon Background */}

      <Background
        className="mt10"
        label={__("Background:", "cards-layout")}
        value={iconWrap?.bg}
        onChange={(val) => updateObject("iconWrap", "bg", val)}
      />


      {/* 4. Radius */}


      <RangeControl
        label={__("Radius:", "cards-layout")}
        value={iconWrap?.radius}
        onChange={(val) => updateObject("iconWrap", "radius", val)}
        min={0}
        max={50}
      />


      {/* 5. Border */}



      <BorderControl
        className="mt20"
        label={__("Borders:", "cards-layout")}
        value={iconWrap?.borders}
        onChange={(val) => updateObject("iconWrap", "borders", val)}
      />
    </PanelBody>
  );
};

export default IconWrap;
