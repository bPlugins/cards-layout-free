import {
  BorderControl,
  BoxControl,
  PanelBody,
  RangeControl,
  TabPanel,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  Background,
  ShadowControl,
} from "../../../../../../../../bpl-tools/Components";
import {
  emUnit,
  pxUnit,
} from "../../../../../../../../bpl-tools/utils/options";
import { tabController } from "../../../../../../../../bpl-tools/utils/functions";





const BaseCard = ({ attributes = {}, updateObject = () => { }, }) => {
  const { baseCard = {} } = attributes || {};




  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Card", "cards-layout")}
      initialOpen={false}
    >
      {/* 1. Background Control */}


      <Background
        className="mb10"
        label={__("Background:", "cards-layout")}
        value={baseCard?.bg}
        onChange={(val) => updateObject("baseCard", "bg", val)}
        defaults={{ color: "#1c1c28" }}
      />



      {/* 2. Padding Control */}



      <BoxControl
        className="mt10"
        label={__("Padding:", "cards-layout")}
        values={baseCard?.padding || { top: "0px", right: "0px", bottom: "0px", left: "0px" }}
        onChange={(val) => updateObject("baseCard", "padding", val)}
        resetValues={{ top: "28px", right: "28px", bottom: "28px", left: "28px" }}
        units={[pxUnit(3), emUnit(2)]}
      />

      {/* 3. Border Control */}



      <BorderControl
        className="mt20"
        label={__("Borders:", "cards-layout")}
        value={baseCard?.borders}
        onChange={(val) => updateObject("baseCard", "borders", val)}
      />



      {/* 4. Radius Control */}



      <RangeControl
        className="mt20"
        label={__("Radius:", "cards-layout")}
        value={baseCard?.radius}
        onChange={(val) => updateObject("baseCard", "radius", val)}
        min={1}
      />

      {/* 5. Shadow Control (Inside Tabs) */}
      <TabPanel
        className="bPlTabPanel mini mt20"
        activeClass="activeTab"
        tabs={[
          { name: "normal", title: __("Normal Shadow", "cards-layout") },
          { name: "hover", title: __("Hover Shadow", "cards-layout") },
        ]}
        onSelect={tabController}
      >
        {(tab) => (
          <>
            {
              tab.name === "normal" &&

              <ShadowControl
                label={__("Shadow:", "cards-layout")}
                value={baseCard?.shadows?.normal}
                onChange={(v) => updateObject("baseCard", "shadows", { ...baseCard?.shadows, normal: v })}
              />

            }

            {tab.name === "hover" &&
              <ShadowControl
                label={__("Hover Shadow:", "cards-layout")}
                value={baseCard?.shadows?.hover}
                onChange={(v) => updateObject("baseCard", "shadows", { ...baseCard?.shadows, hover: v })}
              />

            }
          </>
        )}
      </TabPanel>
    </PanelBody>
  );
};

export default BaseCard;