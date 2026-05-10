import { AlignmentToolbar, BlockControls } from "@wordpress/block-editor";
import { Dashicon, ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import ThemeSwitcher from "../../../themeSwitch/ThemeSwitcher";
import { __ } from "@wordpress/i18n";
import { cardsOpt, newCardConfig } from "../../../../../utils/options";
import { themeSwitch } from "../../../../../utils/functions";
const BlockControl = ({ attributes, setAttributes }) => {
  const { cards = [], cardStyle = {}, cardsLayout = {} } = attributes;
  return (
    <BlockControls>
      <ToolbarGroup className="bPlToolbar">
        <ToolbarButton
          label={__("Add New Card", "cards-layout")}
          onClick={() => {
            setAttributes({
              cards: [...cards, newCardConfig],
            });
          }}
        >
          <Dashicon icon="plus" />
        </ToolbarButton>
      </ToolbarGroup>
      <AlignmentToolbar
        value={cardStyle?.align || "left"}
        onChange={(val) => {
          setAttributes({
            cardStyle: updateData(cardStyle, val, "align"),
          });
        }}
      />
      <ThemeSwitcher
        themes={cardsOpt || []}
        isTooltip={true}
        visibleCount={6}
        value={cardsLayout?.style || "default"}
        buttonLabel={"More Layouts"}
        onChange={(val) => {
          setAttributes(themeSwitch(val, attributes));
        }}
      />


    </BlockControls>
  );
};

export default BlockControl;
