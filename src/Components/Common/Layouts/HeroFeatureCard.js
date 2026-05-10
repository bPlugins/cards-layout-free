const HeroFeatureCard = ({ card, className, attributes }) => {
  const { img = {}, focalPoint = {}, badge = {}, stat = {} } = card;

  const { heroFeatureCardEle = {}, cardTag = {} } = attributes || {};
  const { options = {} } = heroFeatureCardEle || {};

  const style = {
    backgroundImage: `url(${img?.url})`,
    backgroundPosition: `${(focalPoint?.x || 0.5) * 100}% ${(focalPoint?.y || 0.5) * 100
      }%`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className={`hero-feature-card phclb-card ${className}`}>
      <div className="hero-img" style={img?.isSet ? style : {}}>
        {options?.isShowOverlay && <div className="img-overlay"></div>}
        {options?.isShowPattern && <div className="img-pattern"></div>}

        {options?.isShowBadge && (
          <div className="badge-float">{badge?.label || "New Release"}</div>
        )}
        {options?.isShowStat && (
          <div className="stat-float">
            <div className="num">{stat?.num || "99.9%"}</div>
            <div className="lbl">{stat?.lbl || "Uptime SLA"}</div>
          </div>
        )}
      </div>
      <div className="hero-body content">
        {cardTag?.isSet && <div className="card-tag">{cardTag?.text || "Hero Feature Card"}</div>}
        <div className="title">
          <h2>{card?.title || "Ship Products Faster Than Ever"}</h2>
        </div>
        <div className="desc">
          <p>
            {card?.desc ||
              "A complete platform for modern teams. Design, build, and deploy without leaving your workflow."}
          </p>
        </div>
        <div className="btnArea">
          <a
            target={card?.newTab ? "_blank" : "_self"}
            rel="noreferrer"
            href={card?.btnUrl || "#"}
          >
            {card?.btnLabel + " →" || "Get Started Free →"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroFeatureCard;
