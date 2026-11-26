import { PanelBody } from "@wordpress/components";
import { ColorControl, Typography } from "../../../../../../../bpl-tools/Components";
import { __ } from "@wordpress/i18n";
import { renderControl } from '../../../../../utils/functions';
const CardTag = ({ attributes, updateObject, premiumProps, isProTheme }) => {
  const { cardTag = {} } = attributes || {};

  const controlBase = { premiumProps, isProTheme };

  return (
    <PanelBody className="bPlPanelBody" initialOpen={false} title={__("Card Tag", "cards-layout")}>
      {
        renderControl({
          Component: Typography,
          props: {
            className: "mt10",
            label: __("Typography", "cards-layout"),
            value: cardTag?.typo,
            onChange: (val) => updateObject("cardTag", "typo", val),
          },
          ...controlBase,
        })
      }
      {
        renderControl({
          Component: ColorControl,
          props: {
            className: "mt10",
            label: __("Color", "cards-layout"),
            value: cardTag?.color,
            onChange: (val) => updateObject("cardTag", "color", val),
          },
          ...controlBase,
        })
      }
    </PanelBody>
  );
};

export default CardTag;
