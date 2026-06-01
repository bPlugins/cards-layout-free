import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { ItemsPanel } from "../../../../../../../bpl-tools/Components";
import FeatureCardPanel from "./FeatureCardPanel";
import DefaultCardPanel from "./DefaultCardPanel";
import HeroFeatureCardPanel from "./HeroFeatureCardPanel";
import AchievementCardPanel from "./AchievementCardPanel";
import { newCardConfig } from '../../../../../utils/options';



const Panel = ({ attributes, setAttributes, activeIndex, setActiveIndex }) => {
  const itemsProps = { attributes, setAttributes, arrKey: "cards" };
  const { cardsLayout = {} } = attributes || {};
  const { style = "default" } = cardsLayout || {};

  const panelItems = {
    default: DefaultCardPanel,
    feature: FeatureCardPanel,
    "hero-feature": HeroFeatureCardPanel,
    achievement: AchievementCardPanel,
  };

  const PanelItem = panelItems[style] || DefaultCardPanel;

  return (
    <PanelBody
      className="bPlPanelBody addRemoveItems editItem"
      title={__("Cards", "cards-layout")}
      initialOpen={true}
    >
      <ItemsPanel
        {...itemsProps}
        newItem={newCardConfig}
        ItemSettings={PanelItem}
        itemLabel="Card"
        design="sortable"
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}


      />
    </PanelBody>
  );
};

export default Panel;
