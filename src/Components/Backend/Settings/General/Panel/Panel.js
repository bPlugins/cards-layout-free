import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { ItemsPanel } from "../../../../../../../bpl-tools/Components";
import FeatureCardPanel from "./FeatureCardPanel";
import DefaultCardPanel from "./DefaultCardPanel";
import HeroFeatureCardPanel from "./HeroFeatureCardPanel";
import AchievementCardPanel from "./AchievementCardPanel";



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
        newItem={{
          img: {
            id: null,
            url: "https://i.ibb.co/KjbH0QFg/card-2.jpg",
            alt: "",
            title: "",
          },
          altText: "",
          title: "choice",
          desc: "Energistically underwhelm client-based scenarios vis-a-vis interdependent customer service.",
          btnLabel: "Load More",
          btnUrl: "#",
          cUrl: "#",
          newTab: false,
          focalPoint: "",
          svg: "",
        }}
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
