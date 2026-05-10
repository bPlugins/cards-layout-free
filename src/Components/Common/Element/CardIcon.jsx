import { addSvgAttrs } from '../../../utils/functions'

const CardIcon = ({ svg }) => {
    return (
        <div
            className="card-icon-wrap"
            dangerouslySetInnerHTML={{
                __html: svg ? addSvgAttrs(svg, {}) : "",
            }}
        ></div>
    )
}

export default CardIcon