import { produce } from "immer";
import Content from "../Element/Content";
import CardImg from "../Element/CardImg";
import CardBtn from "../Element/CardBtn";
import {
  PanelBody,
  PanelRow,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import { createInterpolateElement } from "@wordpress/element";
import InfoNote from "../Element/InfoNote";
import { __ } from "@wordpress/i18n";
import { Label } from "../../../../../../../bpl-tools/Components";

const HeroFeatureCardPanel = ({ attributes, setAttributes, arrKey, index }) => {
  const cards = attributes[arrKey];
  const { isContent } = attributes;
  const {
    title,
    img,
    desc,
    altText,
    btnLabel,
    btnUrl,
    newTab,
    badge = {},
    stat = {},
  } = cards[index];

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
        <PanelBody
          className="bPlPanelBody mt10"
          title={__("Content", "cards-layout")}
          initialOpen={false}
        >

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
        </PanelBody>

        <PanelBody
          className="bPlPanelBody mt10"
          title={__("Badge and Stat", "cards-layout")}
          initialOpen={false}
        >
          <TextControl
            label="Badge Label"
            value={badge?.label || "New Release"}
            onChange={(val) => updateCard("badge", { ...badge, label: val })}
          />

          <TextControl
            label="Stat Number"
            value={stat?.num || "99.9%"}
            onChange={(val) => updateCard("stat", { ...stat, num: val })}
          />
          <TextControl
            label="Stat Label"
            value={stat?.lbl || "Uptime SLA"}
            onChange={(val) => updateCard("stat", { ...stat, lbl: val })}
          />
        </PanelBody>

        <PanelBody
          className="bPlPanelBody mt10"
          title={__("Media", "cards-layout")}
          initialOpen={false}
        >
          <PanelRow>
            <Label className="">
              {__("Enable Background Image", "cards-layout")}
            </Label>
            <ToggleControl
              checked={!!img?.isSet}
              onChange={(val) => updateCard("img", { ...img, isSet: val })}
            />
          </PanelRow>
          <InfoNote>
            {createInterpolateElement(
              __(
                "<strong>Background Image</strong> Turn this on to use an image for the card background. After enabling, you can upload or choose an image from the media library.",
                "cards-layout",
              ),
              {
                strong: <strong />,
              },
            )}
          </InfoNote>

          {img?.isSet && (
            <CardImg
              isContent={isContent}
              cards={cards}
              index={index}
              updateCard={updateCard}
              label="Background Image:"
            />
          )}
        </PanelBody>
      </div>
    </>
  );
};

export default HeroFeatureCardPanel;
