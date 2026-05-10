import { isValidURL } from "../../utils/functions";
import AchievementCard from "./Layouts/AchievementCard";
import Default from "./Layouts/Default";
import FeatureCard from "./Layouts/FeatureCard";
import HeroFeatureCard from "./Layouts/HeroFeatureCard";


const Layout = ({ attributes, isEditor = false, activeIndex = 0, onClick }) => {
  const { cards, columns, cardStyle, cardsLayout } = attributes;
  const { style } = cardsLayout;
  const { newTab } = cardStyle;

  const layouts = {
    default: Default,
    feature: FeatureCard,
    "hero-feature": HeroFeatureCard,
    achievement: AchievementCard,

  };
  const LayoutComponent = layouts[style] || Default;


  return (
    <div className={`phclbCardsLayoutBlock`} style={{ position: "relative" }}>

      <div
        className={`cardMainArea ${style} columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile}`}
      >
        {cards.map((card, index) => {
          const { cUrl } = card;
          const className = `phclbCard-${index}`;
          const CardContent = (
            <LayoutComponent
              card={card}
              attributes={attributes}
              isEditor={isEditor}
              className={className}
            />
          );
          const isClickable = isValidURL(card?.cUrl) && !isEditor;
          return isClickable ? (
            <a
              target={newTab ? "_blank" : "_self"}
              rel="noreferrer"
              href={cUrl}
              className={`singleCard ${(isEditor && activeIndex === index) ? "bPlNowEditing" : ""
                }`}
              key={index}
              onClick={() => onClick(index)}
            >
              {CardContent}
            </a>
          ) : (
            <div
              className={`singleCard disabled ${(isEditor && activeIndex === index) ? "bPlNowEditing" : ""
                }`}
              key={index}
              onClick={() => onClick(index)}
            >
              {CardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
