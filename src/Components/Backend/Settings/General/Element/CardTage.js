import { __ } from "@wordpress/i18n";
import { PanelBody, PanelRow, TextControl, ToggleControl } from "@wordpress/components";
import { Label } from '../../../../../../../bpl-tools/Components';
import { renderControl } from '../../../../../utils/functions';


const CardTag = ({ attributes, setAttributes, premiumProps = {}, isProTheme = false }) => {
    const { cardTag = {} } = attributes || {};
    const { text = "Card Tag", isSet = true } = cardTag || {};

    const controlBase = {
        isProTheme,
        premiumProps,
    };

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

                {/* 1. Wrapped ToggleControl */}
                {renderControl({
                    ...controlBase,
                    Component: ToggleControl,
                    props: {
                        checked: isSet,
                        onChange: (value) =>
                            setAttributes({
                                cardTag: { ...cardTag, isSet: value },
                            }),
                    }
                })}
            </PanelRow>

            {/* 2. Wrapped TextControl */}
            {renderControl({
                ...controlBase,
                Component: TextControl,
                props: {
                    className: 'mt10',
                    label: __("Text", "cards-layout"),
                    value: text,
                    onChange: (value) =>
                        setAttributes({
                            cardTag: { ...cardTag, text: value },
                        }),
                }
            })}
        </PanelBody>
    );
};

export default CardTag;