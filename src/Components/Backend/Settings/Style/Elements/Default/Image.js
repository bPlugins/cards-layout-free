import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl } from '@wordpress/components';

const Image = ({ updateObject, attributes }) => {
    const { img } = attributes;
    const { radius } = img;

    return <PanelBody className='phPanelBody' title={__('Image', 'cards-layout')} initialOpen={false}>
        <RangeControl className='' label={__('Radius', 'cards-layout')} value={radius} onChange={(val) => updateObject("img", "radius", val)} min={1} />

    </PanelBody>
}
export default Image;