import { __ } from "@wordpress/i18n";

export const cardsOpt = [
  {
    label: __("Default", "cards-layout"),
    value: "default",
    tooltip: "Default card variant",
  },
  {
    label: __("Hero Feature", "cards-layout"),
    value: "hero-feature",

    tooltip: "Hero Feature card variant",
  },
  {
    label: __("Achievement Card", "cards-layout"),
    value: "achievement",

    tooltip: "Achievement card variant",
  },
  {
    label: __("Feature", "cards-layout"),
    value: "feature",

    tooltip: "Feature card variant",
  },

];

export const alignOpt = [
  { label: __("Left", "cards-layout"), value: "left" },
  { label: __("Center", "cards-layout"), value: "center" },
  { label: __("Right", "cards-layout"), value: "right" },
];


export const generalStyleTabs = [
  { name: "general", title: __("General", "cards-layout") },
  { name: "style", title: __("Style", "cards-layout") },
];

// new card config
export const newCardConfig = {
  img: {
    id: null,
    url: "https://i.ibb.co/KjbH0QFg/card-2.jpg",
    alt: "",
    title: "",
  },
  altText: "",
  title: "choice",
  desc: "Energetically underwhelm client-based scenarios vis-a-vis interdependent customer service.",
  btnLabel: "Load More",
  btnUrl: "#",
  cUrl: "#",
  newTab: false,
  focalPoint: "",
};

export const cardTagTypoConfig = {
  typo: {
    fontSize: {
      desktop: "12px",
      tablet: "12px",
      mobile: "12px",
    },
    fontWeight: 700,
    letterSpace: "0.1em",
    textTransform: "uppercase",
    color: "#5a5a72",
  },
};





export const fallBackIconSvg = "<svg stroke='currentColor' fill='currentColor' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round'  xmlns='http://www.w3.org/2000/svg'><polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'></polygon></svg>"