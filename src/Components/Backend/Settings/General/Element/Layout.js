import {
  PanelBody,
  PanelRow,
  RangeControl,
  SelectControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { __, _n, sprintf } from "@wordpress/i18n";
import { cardsOpt, proLayoutNames } from "../../../../../utils/options";
import { useState } from "@wordpress/element";
import { Label } from "../../../../../../../bpl-tools/Components";
import { BDevice } from "../../../../../../../bpl-tools/Components/Deprecated";
import {
  emUnit,
  perUnit,
  pxUnit,
} from "../../../../../../../bpl-tools/utils/options";
import { themeSwitch } from '../../../../../utils/functions';

// Free build only: a note listing the Pro layouts, with demo and pricing links. Nothing in the
// free build is locked; the Pro layouts are simply not part of it.
const PremiumPanel = PHCLB_PRO ? null : require("../../../../../../../bpl-tools/ProControls/PremiumPanel").default;


const Layout = ({ attributes, setAttributes }) => {
  const [device, setDevice] = useState("desktop");
  const {
    cardsLayout = {},
    columns = {},
    columnGap = "30px",
    rowGap = "40px",
  } = attributes || {};
  const { style = "default" } = cardsLayout;
  return (
    <>
      {/*==============
          layout
     =============  */}
      <PanelBody
        className="phPanelBody"
        title={__("Layout", "cards-layout")}
        initialOpen={false}
      >
        <SelectControl
          className="mt10"
          labelPosition="side"
          label={__("Card Variant :", "cards-layout")}
          value={style}
          options={cardsOpt}
          onChange={(val) => {
            setAttributes(themeSwitch(val, attributes));
          }}
        />

        {!PHCLB_PRO && (
          <PremiumPanel
            title={__("Premium Layouts", "cards-layout")}
            description={sprintf(
              /* translators: 1: number of Pro layouts, 2: comma-separated layout names */
              _n(
                "%1$d more layout in Cards Layout Pro: %2$s.",
                "%1$d more layouts in Cards Layout Pro: %2$s.",
                proLayoutNames.length,
                "cards-layout",
              ),
              proLayoutNames.length,
              proLayoutNames.join(", "),
            )}
            pricingUrl="https://bplugins.com/products/cards-layout/pricing/"
            demoUrl="https://bplugins.com/products/cards-layout/#demos"
            buttonLabel={__("Get Pro", "cards-layout")}
          />
        )}

        <PanelRow>
          <Label mt="0">{__("Columns:", "cards-layout")}</Label>
          <BDevice device={device} onChange={(val) => setDevice(val)} />
        </PanelRow>

        <RangeControl
          value={columns[device]}
          onChange={(val) => {
            setAttributes({ columns: { ...columns, [device]: val } });
          }}
          min={1}
          max={6}
          step={1}
          beforeIcon="grid-view"
        />

        <UnitControl
          className="mt20"
          label={__("Column Gap:", "cards-layout")}
          labelPosition="left"
          value={columnGap}
          onChange={(val) => setAttributes({ columnGap: val })}
          units={[pxUnit(30), perUnit(3), emUnit(2)]}
          isResetValueOnUnitChange={true}
        />

        <UnitControl
          className="mt20"
          label={__("Row Gap:", "cards-layout")}
          labelPosition="left"
          value={rowGap}
          onChange={(val) => setAttributes({ rowGap: val })}
          units={[pxUnit(40), perUnit(3), emUnit(2.5)]}
          isResetValueOnUnitChange={true}
        />
      </PanelBody>
    </>
  );
};

export default Layout;
