import { isValidURL } from "../../utils/common";
import { getCardLayout } from "./Layouts";
import useLayoutBehavior from "./useLayoutBehavior";

/*
 * Renders the cards with the layout in `attributes`. Callers resolve which layout to use first
 * (resolveLayout in ./Layouts), so a Pro layout that isn't available already arrives here as the
 * Default layout - nothing is ever locked or blurred for visitors.
 */
const Layout = ({ attributes, isEditor = false, activeIndex = 0, onClick }) => {
  const { cards, columns, cardStyle, cardsLayout } = attributes;
  const { style } = cardsLayout;
  const { newTab } = cardStyle;

  const { Component: LayoutComponent, hasInnerLinks } = getCardLayout(style);
  const cardAreaRef = useLayoutBehavior(attributes);

  return (
    <div className="phclbCardsLayoutBlock" style={{ position: "relative" }}>
      <div
        ref={cardAreaRef}
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
          // Layouts that render their own anchor are never wrapped in a second one.
          const isClickable =
            isValidURL(card?.cUrl) && !isEditor && !hasInnerLinks;
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
