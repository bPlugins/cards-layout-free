// import { __ } from "@wordpress/i18n";
// import {
//   PanelBody,
//   BoxControl,
//   RangeControl,
//   BorderControl,
// } from "@wordpress/components";

// import { produce } from "immer";
// import {
//   emUnit,
//   pxUnit,
// } from "../../../../../../../../bpl-tools/utils/options";
// import {
//   ColorsControl,
//   Typography,
// } from "../../../../../../../../bpl-tools/Components";
// import { renderControl } from '../../../../../../utils/functions';

// const Btn = ({ updateObject, attributes, premiumProps, isProTheme }) => {
//   const { btn } = attributes;
//   const { typo, padding, borders, radius } = btn;
//   const controlBase = {
//     isProTheme,
//     premiumProps,
//   };
//   return (
//     <PanelBody
//       className="bPlPanelBody"
//       title={__("Button", "cards-layout")}
//       initialOpen={false}
//     >
//       {renderControl({
//         ...controlBase,
//         Component: Typography,
//         props: {
//           className: "mt20",
//           label: __("Typography", "cards-layout"),
//           value: typo,
//           onChange: (val) => updateObject("btn", "typo", val),
//           produce: produce,
//         }
//       })}

//       <ColorsControl
//         className="mt20"
//         label={__("Color", "cards-layout")}
//         value={btn?.colors}
//         onChange={(val) => {
//           updateObject("btn", "colors", val);
//         }}
//       />

//       <BoxControl
//         className="mt20"
//         label={__("Padding", "cards-layout")}
//         values={padding}
//         onChange={(val) => updateObject("btn", "padding", val)}
//         resetValues={{ top: "2px", right: "4px", bottom: "2px", left: "4px" }}
//         units={[pxUnit(3), emUnit(2)]}
//       />

//       <BorderControl
//         className="mt20"
//         label={__("Borders", "cards-layout")}
//         onChange={(val) => updateObject("btn", "borders", val)}
//         value={borders}
//       />

//       <RangeControl
//         className="mt20"
//         label={__("Radius", "cards-layout")}
//         value={radius}
//         onChange={(val) => updateObject("btn", "radius", val)}
//         min={1}
//       />
//     </PanelBody>
//   );
// };
// export default Btn;
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  BoxControl,
  RangeControl,
  BorderControl,
} from "@wordpress/components";

import { produce } from "immer";
import {
  emUnit,
  pxUnit,
} from "../../../../../../../../bpl-tools/utils/options";
import {
  ColorsControl,
  Typography,
} from "../../../../../../../../bpl-tools/Components";
import { renderControl } from '../../../../../../utils/functions';

const Btn = ({ updateObject, attributes, premiumProps, isProTheme }) => {
  const { btn } = attributes;
  const { typo, padding, borders, radius } = btn;

  const controlBase = {
    isProTheme,
    premiumProps,
  };

  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Button", "cards-layout")}
      initialOpen={false}
    >
      {/* 1. Typography */}
      {renderControl({
        ...controlBase,
        Component: Typography,
        props: {
          className: "mt20",
          label: __("Typography", "cards-layout"),
          value: typo,
          onChange: (val) => updateObject("btn", "typo", val),
          produce: produce,
        }
      })}

      {/* 2. Colors */}
      {renderControl({
        ...controlBase,
        Component: ColorsControl,
        props: {
          className: "mt20",
          label: __("Color", "cards-layout"),
          value: btn?.colors,
          onChange: (val) => updateObject("btn", "colors", val),
        }
      })}

      {/* 3. Padding */}
      {renderControl({
        ...controlBase,
        Component: BoxControl,
        props: {
          className: "mt20",
          label: __("Padding", "cards-layout"),
          values: padding,
          onChange: (val) => updateObject("btn", "padding", val),
          resetValues: { top: "2px", right: "4px", bottom: "2px", left: "4px" },
          units: [pxUnit(3), emUnit(2)],
        }
      })}

      {/* 4. Borders */}
      {renderControl({
        ...controlBase,
        Component: BorderControl,
        props: {
          className: "mt20",
          label: __("Borders", "cards-layout"),
          value: borders,
          onChange: (val) => updateObject("btn", "borders", val),
        }
      })}

      {/* 5. Radius */}
      {renderControl({
        ...controlBase,
        Component: RangeControl,
        props: {
          className: "mt20",
          label: __("Radius", "cards-layout"),
          value: radius,
          onChange: (val) => updateObject("btn", "radius", val),
          min: 1,
        }
      })}
    </PanelBody>
  );
};

export default Btn;