import { __ } from "@wordpress/i18n";
import { PanelBody, PanelRow, TextControl, ToggleControl } from "@wordpress/components";
import { Label } from '../../../../../../../bpl-tools/Components';



const CardTag = ({ attributes, setAttributes, }) => {
    const { cardTag = {} } = attributes || {};
    const { text = "Card Tag", isSet = true } = cardTag || {};


    return (
        <PanelBody
            title={__("Card Tag", "cards-layout")}
            initialOpen={false}
            className="bPlPanelBody"
        >
            <PanelRow>
                <Label className="">
                    {__("Show Card Tag", "cards-layout")}
                </Label>

                <ToggleControl
                    checked={isSet}
                    onChange={(value) =>
                        setAttributes({
                            cardTag: { ...cardTag, isSet: value },
                        })
                    }
                />



            </PanelRow>

            <TextControl
                className="mt10"
                label={__("Card Tag Text", "cards-layout")}
                value={text}
                onChange={(value) =>
                    setAttributes({
                        cardTag: { ...cardTag, text: value },
                    })
                }
            />

        </PanelBody>
    );
};

export default CardTag;