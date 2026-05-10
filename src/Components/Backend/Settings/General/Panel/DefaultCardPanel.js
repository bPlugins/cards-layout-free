import { __ } from "@wordpress/i18n";
import { TextControl } from "@wordpress/components";
import { produce } from "immer";
import Content from "../Element/Content";
import CardBtn from "../Element/CardBtn";
import CardImg from "../Element/CardImg";

const DefaultCardPanel = ({ attributes, setAttributes, arrKey, index }) => {
  const { isContent } = attributes;

  const cards = attributes[arrKey];
  const { title, img, desc, altText, btnLabel, cUrl, btnUrl, newTab } =
    cards[index];

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
        <TextControl
          className='mt10'
          label={__("Card Url", "cards-layout")}
          labelPosition={__("top", "cards-layout")}
          value={cUrl}
          placeholder={__("Enter Your Url", "cards-layout")}
          onChange={(val) => updateCard("cUrl", val)}
        />

        <CardImg
          isContent={isContent}
          cards={cards}
          index={index}
          updateCard={updateCard}
        />

        <Content
          isContent={isContent}
          img={img}
          title={title}
          desc={desc}
          altText={altText}
          updateCard={updateCard}
        />

        <CardBtn
          btnLabel={btnLabel}
          btnUrl={btnUrl}
          newTab={newTab}
          updateCard={updateCard}
        />
      </div>
    </>
  );
};

export default DefaultCardPanel;
