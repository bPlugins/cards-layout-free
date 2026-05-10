const Default = ({ card }) => {
  const { img, title, desc, btnLabel, btnUrl, newTab, focalPoint } = card;

  const style = {
    backgroundImage: `url(${img?.url})`,
    backgroundPosition: `${(focalPoint?.x || 0.5) * 100}% ${
      (focalPoint?.y || 0.5) * 100
    }%`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="img" style={style} />

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
        {btnLabel && (
          <div className="btnArea">
            <a
              target={newTab ? "_blank" : "_self"}
              rel="noreferrer"
              href={btnUrl}
            >
              {btnLabel}
            </a>
          </div>
        )}
      </div>
    </>
  );
};
export default Default;
