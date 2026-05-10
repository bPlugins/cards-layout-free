import {
  PanelBody,
  PanelRow,
  RangeControl,
  SelectControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { cardsOpt } from "../../../../../utils/options";
import { useState } from "@wordpress/element";
import { Label } from "../../../../../../../bpl-tools/Components";
import { BDevice } from "../../../../../../../bpl-tools/Components/Deprecated";
import {
  emUnit,
  perUnit,
  pxUnit,
} from "../../../../../../../bpl-tools/utils/options";
import { themeSwitch } from '../../../../../utils/functions';


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
