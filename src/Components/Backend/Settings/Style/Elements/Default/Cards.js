import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  BoxControl,
  RangeControl,
  BorderControl,
} from "@wordpress/components";
import {
  emUnit,
  pxUnit,
} from "../../../../../../../../bpl-tools/utils/options";

const Cards = ({ attributes, updateObject }) => {
  const { cardStyle } = attributes;
  const { padding, radius, borders } = cardStyle;
  return (
    <PanelBody
      className="phPanelBody"
      title={__("Cards", "cards-layout")}
      initialOpen={false}
    >
      <BoxControl
        className="mt10"
        label={__("Padding", "cards-layout")}
        values={padding}
        onChange={(val) => updateObject("cardStyle", "padding", val)}
        resetValues={{ top: "2px", right: "4px", bottom: "2px", left: "4px" }}
        units={[pxUnit(3), emUnit(2)]}
      />

      <BorderControl
        className="mt10 mb10"
        label={__("Borders", "cards-layout")}
        value={borders}
        onChange={(val) => updateObject("cardStyle", "borders", val)}
      />

      <RangeControl
        className=""
        label={__("Radius", "cards-layout")}
        value={radius}
        onChange={(val) => updateObject("cardStyle", "radius", val)}
        min={1}
      />
    </PanelBody>
  );
};
export default Cards;
