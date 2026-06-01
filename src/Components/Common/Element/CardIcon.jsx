import { addSvgAttrs } from '../../../utils/functions'
import { fallBackIconSvg } from '../../../utils/options'

const CardIcon = ({ svg }) => {
    return (
        <div
            className="card-icon-wrap"
            dangerouslySetInnerHTML={{
                __html: addSvgAttrs(svg ? svg : fallBackIconSvg, {}),
            }}
        ></div>
    )
}

export default CardIcon