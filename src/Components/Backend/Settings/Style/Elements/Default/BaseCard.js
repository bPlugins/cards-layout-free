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

import { renderControl } from '../../../../../../utils/functions';




const BaseCard = ({ attributes = {}, updateObject = () => { }, premiumProps = {}, isProTheme = false }) => {
  const { baseCard = {} } = attributes || {};

  // Shared config for renderControl to avoid repetition
  const controlBase = { premiumProps, isProTheme };


  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Card", "cards-layout")}
      initialOpen={false}
    >
      {/* 1. Background Control */}
      {
        renderControl({
          Component: Background,
          props: {
            className: "mb10",
            label: __("Background:", "cards-layout"),
            value: baseCard?.bg,
            onChange: (val) => updateObject("baseCard", "bg", val),
            defaults: { color: "#1c1c28" },
          },
          ...controlBase,
        })
      }


      {/* 2. Padding Control */}
      {
        renderControl({
          Component: BoxControl,
          props: {
            className: "mt20",
            label: __("Padding:", "cards-layout"),
            values: baseCard?.padding || { top: "0px", right: "0px", bottom: "0px", left: "0px" },
            onChange: (val) => updateObject("baseCard", "padding", val),
            resetValues: { top: "28px", right: "28px", bottom: "28px", left: "28px" },
            units: [pxUnit(3), emUnit(2)],
          },
          ...controlBase,
        })
      }

      {/* 3. Border Control */}
      {
        renderControl({
          Component: BorderControl,
          props: {
            className: "mt20",
            label: __("Borders:", "cards-layout"),
            value: baseCard?.borders,
            onChange: (val) => updateObject("baseCard", "borders", val),
          },
          ...controlBase,
        })
      }


      {/* 4. Radius Control */}
      {
        renderControl({
          Component: RangeControl,
          props: {
            className: "mt20",
            label: __("Radius:", "cards-layout"),
            value: baseCard?.radius,
            onChange: (val) => updateObject("baseCard", "radius", val),
            min: 1,
          },
          ...controlBase,
        })
      }


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
            {tab.name === "normal" &&
              renderControl({
                Component: ShadowControl,
                props: {
                  label: __("Shadow:", "cards-layout"),
                  value: baseCard?.shadows?.normal,
                  onChange: (v) => updateObject("baseCard", "shadows", { ...baseCard?.shadows, normal: v }),
                },
                ...controlBase,
              })}

            {tab.name === "hover" &&
              renderControl({
                Component: ShadowControl,
                props: {
                  label: __("Hover Shadow:", "cards-layout"),
                  value: baseCard?.shadows?.hover,
                  onChange: (v) => updateObject("baseCard", "shadows", { ...baseCard?.shadows, hover: v }),
                },
                ...controlBase,
              })}
          </>
        )}
      </TabPanel>
    </PanelBody>
  );
};

export default BaseCard;