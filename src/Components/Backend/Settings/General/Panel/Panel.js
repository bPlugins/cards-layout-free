import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { ItemsPanel } from "../../../../../../../bpl-tools/Components";
import FeatureCardPanel from "./FeatureCardPanel";
import DefaultCardPanel from "./DefaultCardPanel";
import HeroFeatureCardPanel from "./HeroFeatureCardPanel";
import AchievementCardPanel from "./AchievementCardPanel";

// Pro layouts' card panels: src/pro/editor.js (Pro build only).
const proCardPanels = PHCLB_PRO ? require("../../../../../pro/editor").proCardPanels : {};


const Panel = ({ attributes, setAttributes, activeIndex, setActiveIndex, premiumProps, isProTheme }) => {
  const itemsProps = { attributes, setAttributes, arrKey: "cards", premiumProps };
  const { cardsLayout = {} } = attributes || {};
  const { style = "default" } = cardsLayout || {};

  const panelItems = {
    default: DefaultCardPanel,
    feature: FeatureCardPanel,
    "hero-feature": HeroFeatureCardPanel,
    achievement: AchievementCardPanel,
    ...proCardPanels,
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
            url: "", // empty = bundled placeholder photo (see getCardImageUrl in utils/common.js)
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
        premiumProps={premiumProps}
        isProTheme={isProTheme}

      />
    </PanelBody>
  );
};

export default Panel;
