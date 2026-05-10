import CardIcon from "../Element/CardIcon";
const FeatureCard = ({ card, attributes }) => {
  const { cardTag = {} } = attributes || {};
  const {
    title,
    desc,
    svg = "<svg stroke='currentColor' fill='currentColor' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round'  xmlns='http://www.w3.org/2000/svg'><polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'></polygon></svg>",
  } = card;

  return (
    <div className="feature-card phclb-card">
      <div className="card-glow"></div>
      <CardIcon svg={svg} />
      {cardTag?.isSet && <div className="card-tag">{cardTag?.text || "Feature Card"}</div>}
      <div className="content">
        {title && (
          <div className="title">
            <h2>{title}</h2>
          </div>
        )}
        {desc && (
          <div className="desc">
            <p>{desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
