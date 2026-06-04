import { produce } from "immer";
import { cardTagTypoConfig } from './options';
// Function to check if a string is a valid URL
export function isValidURL(str) {
  if (!str) {
    return false;
  }
  try {
    new URL(str);
    return true;
  } catch (err) {
    return false;
  }
}

export const addSvgAttrs = (svgString, attrs = {}) => {
  let extra = Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");
  return svgString.replace("<svg", `<svg ${extra}`);
};

// theme switcher
export const themeSwitch = (theme = "default", attributes) =>
  produce(attributes, (draft) => {
    draft.cardsLayout.style = theme;

    const applyTypo = (key, sizes, weight, extra = {}) => {
      draft[key].typo = {
        ...draft?.[key]?.typo,
        fontSize: {
          ...draft?.[key]?.typo?.fontSize,
          ...sizes,
        },
        fontWeight: weight,
        ...extra,
      };
    };

    const cfg = {
      default: () => {
        draft.cardStyle = {
          borders: {
            color: "#000",
            style: "solid",
            width: "1px",
          },
          radius: 5,
          padding: {
            top: "5px",
            right: "5px",
            bottom: "5px",
            left: "5px",
          },
        };
        draft.columns = {
          desktop: 3,
          tablet: 2,
          mobile: 1,
        };
        draft.title = {
          color: "#000",
        };
        draft.desc = {
          color: "#000",
        };
        applyTypo(
          "title",
          {
            desktop: 18,
            tablet: 14,
            mobile: 14,
          },
          500,
          {
            lineHeight: "135%",
          },
        );
        applyTypo(
          "desc",
          {
            desktop: 14,
            tablet: 14,
            mobile: 14,
          },
          400,
          {
            lineHeight: "135%",
          },
        );
        draft.btn = {
          ...draft.btn,
          colors: {
            color: "#fff",
            bg: "#000",
          },
          padding: {
            top: "5px",
            right: "5px",
            bottom: "5px",
            left: "5px",
          },
          borders: {
            color: "#000",
            style: "solid",
            width: "0px",
          },
          radius: 5,
        };
        applyTypo(
          "btn",
          {
            desktop: 16,
            tablet: 14,
            mobile: 14,
          },
          500,
          {
            fontWeight: 500,
            lineHeight: "135%",
          },
        );
        draft.iconWrap = {};
        draft.heroFeatureCardEle = {};
      },
      "hero-feature": () => {

        draft.cardStyle = {
          borders: {
            color: "#0000",
            style: "solid",
            width: "0",
          },
          radius: 0,
          padding: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
        };
        draft.columns = {
          desktop: 3,
          tablet: 2,
          mobile: 1,
        };
        draft.columnGap = "30px",
          draft.rowGap = "40px",
          draft.baseCard = {
            borders: {
              color: "#ffffff12",
              style: "solid",
              width: "1px",
            },
            radius: 18,
            padding: "",
            bg: {
              color: "#1c1c28",
            },
            iconSize: 30,
            shadows: {
              normal: [],
              hover: [
                {
                  hOffset: "0px",
                  vOffset: "20px",
                  blur: "60px",
                  spread: "0px",
                  color: " #00000066",
                  isInset: false,
                },
                {
                  hOffset: "0px",
                  vOffset: "0px",
                  blur: "0px",
                  spread: "1px",
                  color: "#6366f11a",
                  isInset: false,
                },
              ],
            },
          };

        draft.title.color = "#F1F1F8",
          draft.desc.color = "#9191A8",
          draft.btn = {
            padding: {
              top: "10px",
              right: "20px",
              bottom: "10px",
              left: "20px",
            },
            borders: {},
            colors: {
              color: "#fff",
              gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              bgType: "gradient",
            },
            radius: 10,
          };

        applyTypo(
          "btn",
          {
            desktop: 13,
            tablet: 12,
            mobile: 12,
          },
          600,
          {
            fontFamily: "inter",
          },
        );
        draft.heroFeatureCardEle = {
          ...draft.heroFeatureCardEle,
          options: {
            ...draft.heroFeatureCardEle.options,
            isShowOverlay: true,
            isShowPattern: true,
            isShowBadge: true,
            isShowStat: true,
          },
          styles: {
            badge: {
              typo: {
                fontSize: {
                  desktop: 11,
                  tablet: 11,
                  mobile: 11,
                },
                letterSpace: "0.06em",
                fontFamily: "inter",
                fontWeight: 700,
              },
              colors: {
                color: "#fff",
                bg: "rgba(16, 185, 129, 0.15)",
              },
              borders: {
                color: "#10b98166",
                style: "solid",
                width: "1px",
              },
              radius: 999,
              padding: {
                top: "5px",
                right: "12px",
                bottom: "5px",
                left: "12px",
              },
            },
            stat: {
              bg: {
                color: "rgba(15, 15, 23, 0.8)",
              },
              border: {
                color: "#ffffff12",
                style: "solid",
                width: "1px",
              },
              radius: 12,
              padding: {
                top: "10px",
                right: "16px",
                bottom: "10px",
                left: "16px",
              },
              num: {
                typo: {
                  fontSize: {
                    desktop: 22,
                    tablet: 18,
                    mobile: 16,
                  },
                  letterSpace: "-0.03em",
                  fontFamily: "inter",
                  fontWeight: 800,
                  lineHeight: 1,
                },
                color: "#f1f1f8",
              },
              lbl: {
                typo: {
                  fontSize: {
                    desktop: 10,
                    tablet: 10,
                    mobile: 10,
                  },
                },
                color: "#5a5a72",
              },
            },
          },
        };
        applyTypo(
          "title",
          {
            desktop: 17,
            tablet: 14,
            mobile: 14,
          },
          700,
          {
            lineHeight: "135%",
            letterSpace: "-0.02em",
            fontFamily: "inter",
          },
        );
        applyTypo(
          "desc",
          {
            desktop: 14,
            tablet: 14,
            mobile: 14,
          },
          400,
          {
            lineHeight: 1.65,
          },
        );

        draft.cardTag = {
          ...cardTagTypoConfig,
          isSet: true,
          text: "Hero Feature Card",
          color: "#4B4B61"
        };
        draft.cards = draft.cards.map((card) => ({
          ...card,
          badge: {
            ...card?.badge,
            label: card?.badge?.label || "New Release",
          },
          stat: {
            ...card?.stat,
            num: card?.stat?.num || "99.9%",
            lbl: card?.stat?.lbl || "Uptime SLA",
          },
        }));
      },
      achievement: () => {
        draft.cardStyle = {
          borders: {
            color: "#0000",
            style: "solid",
            width: "0",
          },
          radius: 0,
          padding: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
        };
        draft.columns = {
          desktop: 3,
          tablet: 2,
          mobile: 1,
        };
        draft.columnGap = "30px";
        draft.rowGap = "40px";
        draft.baseCard = {
          borders: {
            color: "#6366f133",
            style: "solid",
            width: "1px",
          },
          radius: 14,
          padding: {
            top: "30px",
            right: "50px",
            bottom: "30px",
            left: "50px",
          },
          bg: {
            type: "gradient",
            gradient: "linear-gradient(135deg, #1a1035 0%, #0d1f35 100%)",
          },
          iconSize: 100,
          shadows: {
            normal: [],
            hover: [
              {
                hOffset: "0px",
                vOffset: "20px",
                blur: "60px",
                spread: "0px",
                color: " #00000066",
                isInset: false,
              },
              {
                hOffset: "0px",
                vOffset: "0px",
                blur: "0px",
                spread: "1px",
                color: "#6366f11a",
                isInset: false,
              },
            ],
          },
        };
        draft.cardTag = {
          ...cardTagTypoConfig,
          isSet: true,
          text: "Achievement Card",
          color: "#4B4B61"
        };
        draft.title.color = "#F1F1F8";
        draft.desc.color = "#9191A8";
        draft.iconWrap = {
          size: 50,
          color: "#F27323",
          bg: {
            color: "#0000",
          },
          radius: 0,
          borders: {
            color: " #0000",
            style: "solid",
            width: "0",
          },
        };

        applyTypo(
          "title",
          {
            desktop: 22,
            tablet: 18,
            mobile: 16,
          },
          700,
          {
            lineHeight: "45px",
            letterSpace: "-0.02em",
            fontFamily: "inter",
          },
        );

        applyTypo(
          "desc",
          {
            desktop: 14,
            tablet: 14,
            mobile: 14,
          },
          400,
          {
            lineHeight: 1.65,
          },
        );

        draft.achievement = {
          achValue: {
            ...draft.achievement.achValue,
            typo: {
              fontSize: {
                desktop: 36,
                tablet: 24,
                mobile: 18,
              },
              lineHeight: 1,
              fontWeight: 900,
              letterSpace: "-0.04em",
            },
            bg: {
              type: "gradient",
              gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
            },
          },
          badge: {
            size: "80px",

            bg: { color: "#f59e0b1f" },
            shadow: [
              {
                hOffset: "0px",
                vOffset: "0px",
                blur: "0px",
                spread: "8px",
                color: "rgba(245, 158, 11, 0.06)",
                isInset: false,
              },
            ],
            borders: {
              color: "#F59F0059",
              style: "dashed",
              width: "2px",
            },
          },
        };
      },
      feature: () => {
        draft.cardStyle = {
          borders: {
            color: "#0000",
            style: "solid",
            width: "0",
          },
          radius: 0,
          padding: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
        };
        draft.columns = {
          desktop: 3,
          tablet: 2,
          mobile: 1,
        };
        draft.baseCard = {
          borders: {
            color: "#ffffff12",
            style: "solid",
            width: "1px",
          },
          radius: 18,
          padding: {
            top: "28px",
            right: "28px",
            bottom: "28px",
            left: "28px",
          },
          bg: {
            color: "#1c1c28",
          },
          iconSize: 30,
          shadows: {
            normal: [],
            hover: [
              {
                hOffset: "0px",
                vOffset: "20px",
                blur: "60px",
                spread: "0px",
                color: " #00000066",
                isInset: false,
              },
              {
                hOffset: "0px",
                vOffset: "0px",
                blur: "0px",
                spread: "1px",
                color: "#6366f11a",
                isInset: false,
              },
            ],

          },
        };
        draft.cardTag = {
          ...cardTagTypoConfig,
          isSet: true,
          text: "Feature Card",
          color: "#4B4B61"
        };
        draft.iconWrap = {
          size: 42,
          wrapSize: 52,
          color: "#f59e0b",
          bg: {
            color:
              "linear-gradient(135deg,rgba(99, 102, 241, 0.2),rgba(139, 92, 246, 0.1))",
          },
          radius: 14,
          borders: {
            color: " #6366f140",
            style: "solid",
            width: "1px",
          },
        };

        draft.title = {
          color: "#F1F1F8",
        };
        draft.desc = {
          color: "#9191A8",
        };
        applyTypo(
          "title",
          {
            desktop: 17,
            tablet: 14,
            mobile: 14,
          },
          700,
          {
            lineHeight: "135%",
            letterSpace: "-0.02em",
            fontFamily: "inter",
          },
        );
        applyTypo(
          "desc",
          {
            desktop: 14,
            tablet: 14,
            mobile: 14,
          },
          400,
          {
            lineHeight: 1.65,
          },
        );
      },

    }[theme];

    if (cfg) cfg();
  });


