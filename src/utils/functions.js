import { produce } from "immer";

// import { heroFeatureCardTypoConfig } from "./options";

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
      state: () => {
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
          radius: 18,
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
          iconSize: 42,
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
          isSet: true,
          text: "State Card",
          color: "#4B4B61"
        };
        draft.title.color = "#F1F1F8";
        draft.desc.color = "#9191A8";
        draft.iconWrap = {
          size: 42,
          color: "#50337e",
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
            lineHeight: "2em",
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

        draft.statCard = {
          statValue: {
            typo: {
              fontSize: {
                desktop: 56,
                tablet: 48,
                mobile: 36,
              },
              lineHeight: 1,
              fontWeight: 900,
              letterSpace: "-0.05em",
            },
            bg: {
              type: "gradient",
              gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            },
          },
          trendUp: {
            bg: { color: "rgba(16, 185, 129, 0.1)" },
            color: "#10b981",
            borders: {
              color: "rgba(16, 185, 129, 0.25)",
              style: "solid",
              width: "1px",
            },
          },
          trendDown: {
            bg: { color: "rgba(239, 68, 68, 0.1)" },
            color: "#ef4444",
            borders: {
              color: "rgba(239, 68, 68, 0.25)",
              style: "solid",
              width: "1px",
            },
          },

          trend: {
            typo: {
              fontSize: {
                desktop: 12,
                tablet: 12,
                mobile: 12,
              },
              fontWeight: 700,
              lineHeight: 1,
            },
          },
          spBar: {
            width: "32px",
          },
        };


      },
      progress: () => {
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
          radius: 16,
          padding: {
            top: "50px",
            right: "50px",
            bottom: "50px",
            left: "50px",
          },
          bg: {
            color: "#1a1035",
          },
          shadows: {
            normal: [],
            hover: [],
          },
        };
        draft.cardTag = {
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
          isSet: true,
          text: "Progress Card",
          color: "#4B4B61"
        };
        draft.title = {
          color: "#F1F1F8",
        };
        applyTypo(
          "title",
          {
            desktop: 18,
            tablet: 16,
            mobile: 16,
          },
          700,
          {
            lineHeight: "1.4em",
          },
        );

        draft.progressCard = {
          skillNameTypo: {
            fontSize: {
              desktop: 13,
              tablet: 13,
              mobile: 13,
            },
            fontWeight: 600,
          },
          skillNameColor: "#9191A8",
          skillPctTypo: {
            fontSize: {
              desktop: 12,
              tablet: 12,
              mobile: 12,
            },
            fontWeight: 700,
          },
          skillPctColor: "#a5b4fc",
          skillBarWrapBg: {
            color: "rgba(255, 255, 255, 0.06)",
          },
          barThickness: 8,
          barRadius: 999,
        };

        draft.cards = draft.cards.map((card) => ({
          ...card,
          skills: (card.skills || []).map((skill) => ({
            ...skill,
            nameColor: skill.nameColor || "#9191A8",
            wrapBg: skill.wrapBg || { type: "solid", color: "rgba(255, 255, 255, 0.06)" },
          })),
        }));

      },

      animatedService: () => {
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
        draft.baseCard = {};

        applyTypo(
          "title",
          {
            desktop: 24,
            tablet: 20,
            mobile: 18,
          },
          500,
          {
            lineHeight: "1.2em",
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
        );

        draft.title.color = "#45f3ff";
        draft.desc.color = "#ffffff";
        draft.btn = {
          padding: {
            top: "10px",
            right: "15px",
            bottom: "10px",
            left: "15px",
          },
          borders: {},
          colors: {
            color: "#292929",
            bg: "#45f3ff"

          },
          radius: 0,
        };

        draft.animatedServiceCard = {
          cardBg: { color: "#333333" },
          innerBg: { color: "#292929" },
          cardWidth: "100%",
          cardHeight: "180px",
          cardHoverHeight: "450px",
          cardBorderThickness: "3px",
          lineGradient: {
            type: "gradient",
            gradient: "linear-gradient(transparent, #45f3ff, #45f3ff, #45f3ff, transparent)",
          },
          animSpeed: 4,
          imgBoxBg: { color: "#000000" },
          imgBoxInnerBg: { color: "#292929" },
          imgBoxLineGradient: {
            type: "gradient",
            gradient: "linear-gradient(transparent, #ff3c7b, #ff3c7b, #ff3c7b, transparent)",
          },
          imgBoxWidth: "150px",
          imgBoxHeight: "150px",
          imgBoxHoverSize: "200px",
          imgBoxBorderThickness: "3px",
          imgSize: "100px",
          imgOpacity: 0.5,
        };

      },
      banner: () => {
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
          desktop: 1,
          tablet: 1,
          mobile: 1,
        };
        draft.columnGap = "16px";
        draft.rowGap = "15px";
        draft.baseCard = {
          borders: {
            color: "#6366f133",
            style: "solid",
            width: "1px",
          },
          radius: 18,
          padding: {
            top: "28px",
            right: "36px",
            bottom: "28px",
            left: "36px",
          },
          bg: {
            type: "gradient",
            gradient: "linear-gradient(135deg, #1a1035 0%, #0d1f35 100%)",
          },
          iconSize: 50,
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
        draft.title = {
          color: "#F1F1F8",
        };
        draft.desc = {
          color: "#9191A8",
        };
        draft.iconWrap = {
          size: 50,
          color: "#D3D3D3",
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
        draft.btn = {
          ...draft.btn,
          padding: {
            top: "10px",
            right: "20px",
            bottom: "10px",
            left: "20px",
          },
          borders: {},
          colors: {
            color: "#fff",
            bg: "#ffffff0f",
          },
          radius: 10,
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
            lineHeight: "55%",
            letterSpace: "-0.02em",
            fontFamily: "inter",
          },
        );
        draft.eyeBrow = {
          color: "#6366f1",
        };
        applyTypo(
          "eyeBrow",
          {
            desktop: 13,
            tablet: 13,
            mobile: 13,
          },
          700,
          {
            lineHeight: "1",
            textTransform: "uppercase",
            letterSpace: "0.1em",
          },
        );
        applyTypo(
          "desc",
          {
            desktop: 15,
            tablet: 14,
            mobile: 14,
          },
          400,
          {
            lineHeight: 1.6,
          },
        );
        draft.bannerCard = {
          isShowGlow: true,
        };
      },
      creativeCurve: () => {
        draft.cardStyle = {
          borders: {
            color: "#0000",
            style: "solid",
            width: "0",
          }
        };
        draft.columns = {
          desktop: 3,
          tablet: 2,
          mobile: 1,
        };
        draft.columnGap = "16px";
        draft.rowGap = "16px";
        draft.baseCard = {};
        applyTypo(
          "title",
          {
            desktop: 27,
            tablet: 24,
            mobile: 18,
          },
          600,
          {
            lineHeight: "2em",
          },
        );

        applyTypo(
          "desc",
          {
            desktop: 17,
            tablet: 16,
            mobile: 16,
          },
          400,
          { lineHeight: "26px" }
        );
        draft.title.color = "#333";
        draft.desc.color = "#333";

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
            bg: "#0CC58E",

          },
          radius: 100,
        };

        draft.creativeCurve = {
          img: {
            borderRadius: {
              top: "0",
              right: "0",
              bottom: "0",
              left: "0",
            },
            maxWidth: "120px",
            height: "auto",
          }
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
      clientLogo: () => {
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
          desktop: 5,
          tablet: 3,
          mobile: 2,
        };
        draft.columnGap = "20px";
        draft.rowGap = "20px";
        draft.baseCard = {
          borders: {
            color: "#6366f133",
            style: "solid",
            width: "1px",
          },
          radius: 12,
          padding: {
            top: "28px",
            right: "20px",
            bottom: "28px",
            left: "20px",
          },
          bg: {
            color: "#161b22",
          },
          shadows: {
            normal: [],
            hover: [],
          },
        };

        draft.clientLogoCard = {
          logoTxtTypo: {
            fontSize: {
              desktop: 22,
              tablet: 18,
              mobile: 16,
            },
            fontWeight: 900,
            letterSpace: "-0.03em",
          },
          logoTxtColor: "#5a5a72",
          taglineTypo: {
            fontSize: {
              desktop: 11,
              tablet: 11,
              mobile: 11,
            },
            fontWeight: 500,
          },
          taglineColor: "#5a5a72",
          hoverLogoTxtColor: "#F1F1F8",
          hoverTaglineColor: "#9191A8",
          hoverBorder: {
            color: "#6366f1",
            style: "solid",
            width: "1px",
          },
        };
      },




    }[theme];

    if (cfg) cfg();
  });


