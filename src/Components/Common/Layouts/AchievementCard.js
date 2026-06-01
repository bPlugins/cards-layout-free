import CardIcon from "../Element/CardIcon";

const AchievementCard = ({ card, attributes }) => {
  const {
    title = "",
    desc = "",
    svg = "",
    achValue = "#1",
  } = card;

  const { cardTag = {} } = attributes || {};

  return (
    <div className="phclb-card achievement-card">
      <div className="ach-badge gold">
        <CardIcon svg={svg} />
      </div>

      {cardTag?.isSet && <div className="card-tag">{cardTag?.text || "Achievement"}</div>}

      <div className="ach-title title">
        <h2>{title}</h2>
      </div>

      <div className="ach-value gradient">{achValue}</div>
      <div className="desc">
        {" "}
        <p className="ach-desc">{desc}</p>
      </div>
    </div>
  );
};

export default AchievementCard;
