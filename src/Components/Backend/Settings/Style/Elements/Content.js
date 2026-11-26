import { PanelBody } from "@wordpress/components";
import { produce } from "immer";
import {
  ColorControl,
  Typography,
} from "../../../../../../../bpl-tools/Components";
import { __ } from "@wordpress/i18n";
import { renderControl } from '../../../../../utils/functions';



const Content = ({ attributes, updateObject, isTitle = true, isDesc = true, premiumProps = {}, isProTheme = false }) => {
  const { title, desc } = attributes;

  // Shared config for renderControl to avoid repetition
  const controlBase = { premiumProps, isProTheme };

  return (
    <>
      {isTitle && (
        <PanelBody className="bPlPanelBody" title={__("Title", "cards-layout")} initialOpen={false}>
          {renderControl({
            ...controlBase,
            Component: Typography,
            props: {
              className: "mt20",
              label: __("Typography", "cards-layout"),
              value: title?.typo,
              onChange: (val) => updateObject("title", "typo", val),
              produce: produce,
            }
          })}

          {renderControl({
            ...controlBase,
            Component: ColorControl,
            props: {
              className: "mt20",
              label: __("Color", "cards-layout"),
              value: title?.color,
              onChange: (val) => updateObject("title", "color", val),
            }
          })}
        </PanelBody>
      )}

      {isDesc && (
        <PanelBody className="phPanelBody" title={__("Description", "cards-layout")} initialOpen={false}>
          {renderControl({
            ...controlBase,
            Component: Typography,
            props: {
              className: "mt20",
              label: __("Typography", "cards-layout"),
              value: desc?.typo,
              onChange: (val) => updateObject("desc", "typo", val),
              produce: produce,
            }
          })}

          {renderControl({
            ...controlBase,
            Component: ColorControl,
            props: {
              className: "mt20",
              label: __("Color", "cards-layout"),
              value: desc?.color,
              onChange: (val) => updateObject("desc", "color", val),
            }
          })}
        </PanelBody>
      )}
    </>
  );
};



export default Content;
