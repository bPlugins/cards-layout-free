import { __ } from "@wordpress/i18n";
import {
  Background,
  ColorControl,
  ColorsControl,
  Typography,
} from "../../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import Content from "../Elements/Content";
import BaseCard from "../Elements/Default/BaseCard";
import Btn from "../Elements/Default/Btn";
import {
  BorderControl,
  BoxControl,
  PanelBody,
  RangeControl,
} from "@wordpress/components";
import { emUnit, pxUnit } from "../../../../../../../bpl-tools/utils/options";

const HeroFeature = ({ attributes, setAttributes, updateObject }) => {
  const { heroFeatureCardEle = {} } = attributes || {};
  const { styles = {} } = heroFeatureCardEle || {};
  return (
    <>
      <BaseCard {...{ attributes, updateObject }} />
      <Content {...{ attributes, updateObject }} />
      <Btn {...{ attributes, updateObject }} />
      <PanelBody className="bPlPanelBody" title="Badge" initialOpen={false}>
        <Typography
          label="Typography"
          value={styles?.badge?.typo}
          onChange={(value) =>
            setAttributes({
              heroFeatureCardEle: updateData(
                heroFeatureCardEle,
                value,
                "styles",
                "badge",
                "typo",
              ),
            })
          }
        />

        <ColorsControl
          label="Colors"
          value={styles?.badge?.colors}
          onChange={(value) =>
            setAttributes({
              heroFeatureCardEle: updateData(
                heroFeatureCardEle,
                value,
                "styles",
                "badge",
                "colors",
              ),
            })
          }
        />

        <BorderControl
          className="mt20"
          label={__("Borders", "cards-layout")}
          value={styles?.badge?.borders}
          onChange={(value) =>
            setAttributes({
              heroFeatureCardEle: updateData(
                heroFeatureCardEle,
                value,
                "styles",
                "badge",
                "borders",
              ),
            })
          }
        />
        <div style={{ marginTop: "20px" }}>
          <BoxControl
            className="mt20"
            label={__("Padding", "cards-layout")}
            values={styles?.badge?.padding}
            onChange={(val) =>
              setAttributes({
                heroFeatureCardEle: updateData(
                  heroFeatureCardEle,
                  val,
                  "styles",
                  "badge",
                  "padding",
                ),
              })
            }
            resetValues={{
              top: "5px",
              right: "12px",
              bottom: "5px",
              left: "12px",
            }}
            units={[pxUnit(3), emUnit(2)]}
          />
        </div>

        <RangeControl
          className="mt20"
          label={__("Radius", "cards-layout")}
          value={styles?.badge?.radius}
          onChange={(val) =>
            setAttributes({
              heroFeatureCardEle: updateData(
                heroFeatureCardEle,
                val,
                "styles",
                "badge",
                "radius",
              ),
            })
          }
          min={1}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title="Stat" initialOpen={false}>
        <Background
          label="Background"
          value={styles?.stat?.bg}
          onChange={(value) =>
            setAttributes({
              heroFeatureCardEle: updateData(
                heroFeatureCardEle,
                value,
                "styles",
                "stat",
                "bg",
              ),
            })
          }
        />
        <BorderControl
          className="mt20"
          label={__("Border", "cards-layout")}
          value={styles?.stat?.border}
          onChange={(value) =>
            setAttributes({
              heroFeatureCardEle: updateData(
                heroFeatureCardEle,
                value,
                "styles",
                "stat",
                "border",
              ),
            })
          }
        />

        <RangeControl
          className="mt20"
          label={__("Radius", "cards-layout")}
          value={styles?.stat?.radius}
          onChange={(val) =>
            setAttributes({
              heroFeatureCardEle: updateData(
                heroFeatureCardEle,
                val,
                "styles",
                "stat",
                "radius",
              ),
            })
          }
          min={1}
        />
        <div className="mt20">
          <BoxControl
            className="mt20"
            label={__("Padding", "cards-layout")}
            values={styles?.stat?.padding}
            onChange={(val) =>
              setAttributes({
                heroFeatureCardEle: updateData(
                  heroFeatureCardEle,
                  val,
                  "styles",
                  "stat",
                  "padding",
                ),
              })
            }
            resetValues={{
              top: "10px",
              right: "16px",
              bottom: "10px",
              left: "16px",
            }}
            units={[pxUnit(3), emUnit(2)]}
          />
        </div>
        <Typography
          label="Label Typo"
          value={styles?.stat?.lbl?.typo}
          onChange={(value) =>
            setAttributes({
              heroFeatureCardEle: updateData(
                heroFeatureCardEle,
                value,
                "styles",
                "stat",
                "lbl",
                "typo",
              ),
            })
          }
        />
        <Typography
          label="Number Typo"
          value={styles?.stat?.num?.typo}
          onChange={(value) =>
            setAttributes({
              heroFeatureCardEle: updateData(
                heroFeatureCardEle,
                value,
                "styles",
                "stat",
                "num",
                "typo",
              ),
            })
          }
        />
        <ColorControl
          label="Number Color"
          value={styles?.stat?.num?.color}
          onChange={(value) =>
            setAttributes({
              heroFeatureCardEle: updateData(
                heroFeatureCardEle,
                value,
                "styles",
                "stat",
                "num",
                "color",
              ),
            })
          }
        />
        <ColorControl
          label="Label Color"
          value={styles?.stat?.lbl?.color}
          onChange={(value) =>
            setAttributes({
              heroFeatureCardEle: updateData(
                heroFeatureCardEle,
                value,
                "styles",
                "stat",
                "lbl",
                "color",
              ),
            })
          }
        />
      </PanelBody>
    </>
  );
};

export default HeroFeature;
