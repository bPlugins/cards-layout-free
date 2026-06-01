import CardIcon from "../Element/CardIcon";
const FeatureCard = ({ card, attributes }) => {
  const { cardTag = {} } = attributes || {};
  const {
    title,
    desc,
    svg,
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
