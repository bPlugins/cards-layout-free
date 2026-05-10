import { PanelBody } from "@wordpress/components";

import {
  ColorControl,
  Typography,
} from "../../../../../../../bpl-tools/Components";
import { __ } from "@wordpress/i18n";




const Content = ({ attributes, updateObject, isTitle = true, isDesc = true }) => {
  const { title, desc } = attributes;



  return (
    <>
      {isTitle && (
        <PanelBody className="bPlPanelBody" title={__("Title", "cards-layout")} initialOpen={false}>


          <Typography
            className="mt10"
            label={__("Typography", "cards-layout")}
            value={title?.typo}
            onChange={(val) => updateObject("title", "typo", val)}
          />



          <ColorControl
            className="mt10"
            label={__("Color", "cards-layout")}
            value={title?.color}
            onChange={(val) => updateObject("title", "color", val)}
          />

        </PanelBody>
      )}

      {isDesc && (
        <PanelBody className="phPanelBody" title={__("Description", "cards-layout")} initialOpen={false}>


          <Typography
            className="mt10"
            label={__("Typography", "cards-layout")}
            value={desc?.typo}
            onChange={(val) => updateObject("desc", "typo", val)}
          />





          <ColorControl
            className="mt10"
            label={__("Color", "cards-layout")}
            value={desc?.color}
            onChange={(val) => updateObject("desc", "color", val)}
          />

        </PanelBody>
      )}
    </>
  );
};



export default Content;
