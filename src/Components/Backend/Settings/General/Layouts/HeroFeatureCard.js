import { PanelBody, PanelRow, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Label } from "../../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";

const HeroFeatureCard = ({ attributes = {}, setAttributes }) => {
  const { heroFeatureCardEle = {} } = attributes || {};
  const {
    options = {
      isShowOverlay: true,
      isShowPattern: true,
      isShowBadge: true,
      isShowStat: true,
    },
  } = heroFeatureCardEle || {};
  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Options", "cards-layout")}
      initialOpen={false}
    >
      <PanelRow>
        <Label>{__("Enable Overlay", "cards-layout")}</Label>
        <ToggleControl
          checked={!!options?.isShowOverlay}
          onChange={(v) => {
            setAttributes({
              heroFeatureCardEle: updateData(
                heroFeatureCardEle,
                v,
                "options",
                "isShowOverlay",
              ),
            });
          }}
        />
      </PanelRow>
      <PanelRow>
        <Label>{__("Enable Pattern", "cards-layout")}</Label>
        <ToggleControl
          checked={!!options?.isShowPattern}
          onChange={(v) => {
            setAttributes({
              heroFeatureCardEle: updateData(
                heroFeatureCardEle,
                v,
                "options",
                "isShowPattern",
              ),
            });
          }}
        />
      </PanelRow>
      <PanelRow>
        <Label>{__("Show Badge", "cards-layout")}</Label>
        <ToggleControl
          checked={!!options?.isShowBadge}
          onChange={(v) => {
            setAttributes({
              heroFeatureCardEle: updateData(
                heroFeatureCardEle,
                v,
                "options",
                "isShowBadge",
              ),
            });
          }}
        />
      </PanelRow>
      <PanelRow>
        <Label>{__("Show Stat", "cards-layout")}</Label>
        <ToggleControl
          checked={!!options?.isShowStat}
          onChange={(v) => {
            setAttributes({
              heroFeatureCardEle: updateData(
                heroFeatureCardEle,
                v,
                "options",
                "isShowStat",
              ),
            });
          }}
        />
      </PanelRow>
    </PanelBody>
  );
};

export default HeroFeatureCard;
