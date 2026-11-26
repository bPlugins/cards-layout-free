import { IconLibrary } from "../../../../../../../bpl-tools/Components";
import { __ } from "@wordpress/i18n";
import { produce } from "immer";
import Content from "../Element/Content";
import { TextControl } from "@wordpress/components";

const AchievementCardPanel = ({ attributes, setAttributes, arrKey, index }) => {
  const cards = attributes[arrKey];
  const { isContent } = attributes;
  const { title, img, desc, altText, svg = "", achValue = "#1" } = cards[index];

  const updateCard = (type, val, childType = false) => {
    const newCard = produce(cards, (draft) => {
      if (childType) {
        draft[index][type][childType] = val;
      } else {
        draft[index][type] = val;
      }
    });
    setAttributes({ cards: newCard });
  };
  return (
    <div key={index} className="components_button_main">
      <IconLibrary
        className="mt10"
        label={__("Insert Icon", "cards-layout")}
        value={svg}
        onChange={(val) => {
          updateCard("svg", val);
        }}
      />

      <TextControl
        className="mt20"
        label={__("Achievement Value", "cards-layout")}
        labelPosition={__("top", "cards-layout")}
        value={achValue || "Limited Time"}
        placeholder={__("Enter Sub Title", "cards-layout")}
        onChange={(val) => updateCard("achValue", val)}
      />

      <Content
        isContent={isContent}
        img={img}
        title={title}
        desc={desc}
        altText={altText}
        updateCard={updateCard}
      />
    </div>
  );
};

export default AchievementCardPanel;
