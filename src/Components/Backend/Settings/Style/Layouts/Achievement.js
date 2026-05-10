import BaseCard from "../Elements/Default/BaseCard";
import Content from "../Elements/Content";
import {
  BorderControl,
  PanelBody,
  RangeControl,
  ToggleControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  Background,
  ColorControl,
  ShadowControl,
  Typography,
} from "../../../../../../../bpl-tools/Components";

import { updateData } from "../../../../../../../bpl-tools/utils/functions";

const Achievement = (props) => {
  const { attributes = {}, updateObject, setAttributes } = props;
  const { achievement = {}, iconWrap = {} } = attributes || {};

  return (
    <>
      <BaseCard {...{ attributes, updateObject }} />

      <Content {...{ attributes, updateObject }} />
      <PanelBody
        className="bPlPanelBody"
        title={__("Achievement Value", "cards-layout")}
        initialOpen={false}
      >
        <Typography
          className="mt10"
          label={__("Typography", "cards-layout")}
          value={achievement?.achValue?.typo}
          onChange={(v) => {
            setAttributes({
              achievement: updateData(achievement, v, "achValue", "typo"),
            });
          }}
        />

        <Background
          label="Color"
          isImage={false}
          isSolid={false}
          value={achievement?.achValue?.bg}
          onChange={(v) => {
            setAttributes({
              achievement: updateData(achievement, v, "achValue", "bg"),
            });
          }}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Badge", "cards-layout")}
        initialOpen={false}
      >
        <ToggleControl
          className="mt20"
          label={__("Badge Animation", "cards-layout")}
          checked={achievement?.isAnimation ?? true}
          onChange={(v) => {
            setAttributes({
              achievement: { ...achievement, isAnimation: v },
            });
          }}
        />


        <RangeControl
          className="mt20"
          label={__("Animation Speed (s)", "cards-layout")}
          value={achievement?.animSpeed || 20}
          onChange={(v) => {
            setAttributes({
              achievement: { ...achievement, animSpeed: v },
            });
          }}
          min={1}
          max={100}
        />

        <UnitControl
          className="mt20"
          label="Size"
          value={achievement?.badge?.size}
          onChange={(v) => {
            setAttributes({
              achievement: updateData(achievement, v, "badge", "size"),
            });
          }}
        />

        <Background
          className='mt20'
          label="Background"
          value={achievement?.badge?.bg}
          onChange={(v) => {
            setAttributes({
              achievement: updateData(achievement, v, "badge", "bg"),
            });
          }}
        />

        <RangeControl
          className='mt20'
          label={__("Icon Size:", "cards-layout")}
          value={iconWrap?.size}
          onChange={(val) => updateObject("iconWrap", "size", val)}
          min={10}
          max={1000}
        />


        <ColorControl
          className="mt20"
          label={__("Icon Color:", "cards-layout")}
          value={iconWrap?.color}
          onChange={(val) => updateObject("iconWrap", "color", val)}
        />

        <ShadowControl
          className="mt20"
          label="Shadow"
          value={achievement?.badge?.shadow}
          onChange={(v) => {
            setAttributes({
              achievement: updateData(achievement, v, "badge", "shadow"),
            });
          }}
        />

        <BorderControl
          className="mt20"
          label={__("Borders", "cards-layout")}
          value={achievement?.badge?.borders}
          onChange={(v) => {
            setAttributes({
              achievement: updateData(achievement, v, "badge", "borders"),
            });
          }}
        />
      </PanelBody>


    </>
  );
};

export default Achievement;
