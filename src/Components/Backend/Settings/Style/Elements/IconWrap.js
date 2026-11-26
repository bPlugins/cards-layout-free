import { BorderControl, PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  Background,
  ColorControl,
} from "../../../../../../../bpl-tools/Components";
import { renderControl } from '../../../../../utils/functions';

const IconWrap = ({ attributes, updateObject, premiumProps = {}, isProTheme = false }) => {
  const { iconWrap = {} } = attributes || {};
  const controlBase = { premiumProps, isProTheme };
  return (
    <PanelBody
      className="phPanelBody"
      title={__("Icon", "cards-layout")}
      initialOpen={false}
    >
      {/* 1. Icon Size */}
      {
        renderControl({
          Component: RangeControl,
          props: {
            label: __("Icon Size:", "cards-layout"),
            value: iconWrap?.size,
            onChange: (val) => updateObject("iconWrap", "size", val),
            min: 10,
          },
          ...controlBase,
        })
      }
      {/* 2. Icon Color */}
      {
        renderControl({
          Component: ColorControl,
          props: {
            className: "mt20",
            label: __("Icon Color:", "cards-layout"),
            value: iconWrap?.color,
            onChange: (val) => updateObject("iconWrap", "color", val),
          },
          ...controlBase,
        })
      }

      {/* 3. Icon Background */}
      {
        renderControl({
          Component: Background,
          props: {
            className: "mt20",
            label: __("Background:", "cards-layout"),
            value: iconWrap?.bg,
            onChange: (val) => updateObject("iconWrap", "bg", val),
          },
          ...controlBase,
        })
      }


      {/* 4. Radius */}
      {
        renderControl({
          Component: RangeControl,
          props: {
            label: __("Radius:", "cards-layout"),
            value: iconWrap?.radius,
            onChange: (val) => updateObject("iconWrap", "radius", val),
            min: 0,
            max: 50,
          },
          ...controlBase,
        })
      }

      {/* 5. Border */}
      {
        renderControl({
          Component: BorderControl,
          props: {
            className: "mt20",
            label: __("Borders:", "cards-layout"),
            value: iconWrap?.borders,
            onChange: (val) => updateObject("iconWrap", "borders", val),
          },
          ...controlBase,
        })
      }
    </PanelBody>
  );
};

export default IconWrap;
