import { PanelBody, ToggleControl, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { alignOpt } from "../../../../../utils/options";
const Default = ({ attributes, setAttributes, updateObject }) => {
  const { cardStyle = {}, isContent = false } = attributes || {};
  const { newTab = false, align = "left" } = cardStyle;
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Import content from media", "cards-layout")}
        initialOpen={false}
      >
        <ToggleControl
          className="mt20"
          label={__("Import", "cards-layout")}
          checked={isContent}
          onChange={(val) => setAttributes({ isContent: val })}
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Cards", "cards-layout")}
        initialOpen={false}
      >
        <ToggleControl
          className="mt20"
          label={__("New tab open", "cards-layout")}
          checked={newTab}
          onChange={(val) => updateObject("cardStyle", "newTab", val)}
        />

        <SelectControl
          className="mt20"
          labelPosition="side"
          label={__("Align", "cards-layout")}
          value={align}
          options={alignOpt}
          onChange={(val) => updateObject("cardStyle", "align", val)}
        />
      </PanelBody>
    </>
  );
};

export default Default;
