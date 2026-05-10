import CardIcon from "../Element/CardIcon";

const AchievementCard = ({ card, attributes }) => {

  const {
    title = "",
    desc = "",
    svg = "<svg stroke='currentColor' fill='currentColor' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round'  xmlns='http://www.w3.org/2000/svg'><polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'></polygon></svg>",
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
