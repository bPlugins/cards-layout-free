import { produce } from "immer";
import Content from "../Element/Content";
import { IconLibrary } from "../../../../../../../bpl-tools/Components";
import { __ } from "@wordpress/i18n";



const FeatureCardPanel = ({ attributes, setAttributes, arrKey, index }) => {
  const cards = attributes[arrKey];
  const { isContent } = attributes;
  const { title, img, desc, altText, svg = "" } = cards[index];

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
    <>
      <div key={index} className="components_button_main">
        <IconLibrary
          label={__("Insert Icon", "cards-layout")}
          value={svg}
          onChange={(val) => {
            updateCard("svg", val);
          }}
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
    </>
  );
};

export default FeatureCardPanel;
