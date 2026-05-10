import { PanelBody } from "@wordpress/components";
import { ColorControl, Typography } from "../../../../../../../bpl-tools/Components";
import { __ } from "@wordpress/i18n";

const CardTag = ({ attributes, updateObject }) => {
  const { cardTag = {} } = attributes || {};


  return (
    <PanelBody className="bPlPanelBody" initialOpen={false} title={__("Card Tag", "cards-layout")}>

      <Typography
        className="mt10"
        label={__("Typography", "cards-layout")}
        value={cardTag?.typo}
        onChange={(val) => updateObject("cardTag", "typo", val)}
      />

      <ColorControl
        className="mt10"
        label={__("Color", "cards-layout")}
        value={cardTag?.color}
        onChange={(val) => updateObject("cardTag", "color", val)}
      />


    </PanelBody>
  );
};

export default CardTag;
