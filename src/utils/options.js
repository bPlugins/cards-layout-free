import { __ } from "@wordpress/i18n";

import { verticalLineIcon, horizontalLineIcon } from "./icons";

export const cardsOpt = [
  {
    label: __("Default", "cards-layout"),
    value: "default",
    isPro: false,
    tooltip: "Default card variant",
  },
  {
    label: __("Hero Feature", "cards-layout"),
    value: "hero-feature",
    isPro: false,
    tooltip: "Hero Feature card variant",
  },
  {
    label: __("Achievement Card", "cards-layout"),
    value: "achievement",
    isPro: false,
    tooltip: "Achievement card variant",
  },
  {
    label: __("Feature", "cards-layout"),
    value: "feature",
    isPro: false,
    tooltip: "Feature card variant",
  },

];

export const alignOpt = [
  { label: __("Left", "cards-layout"), value: "left" },
  { label: __("Center", "cards-layout"), value: "center" },
  { label: __("Right", "cards-layout"), value: "right" },
];

export const layouts = [
  {
    label: __("Vertical", "cards-layout"),
    value: "vertical",
    icon: verticalLineIcon,
  },
  {
    label: __("Horizontal", "cards-layout"),
    value: "horizontal",
    icon: horizontalLineIcon,
  },
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
  "sparkLines": [
    { "h": 70, "i": 0.6 },
    { "h": 60, "i": 0.5 },
    { "h": 50, "i": 0.4 },
    { "h": 40, "i": 0.3 },
    { "h": 30, "i": 0.2 },
    { "h": 20, "i": 0.1 },
    { "h": 10, "i": 0.1 }
  ]

};

export const cardTagTypoConfig = {
  typo: {
    fontSize: {
      desktop: "10px",
      tablet: "10px",
      mobile: "10px",
    },
    fontWeight: 700,
    letterSpace: "0.1em",
    textTransform: "uppercase",
    color: "#5a5a72",
  },
};

export const heroFeatureCardTypoConfig = {
  img: {
    gradients: [
      "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      "linear-gradient(135deg, #0d2137 0%, #1a0d37 100%)",
      "linear-gradient(135deg, #0d2620 0%, #0d1f20 100%)",
    ],
  },
  overlay: {
    gradients: [
      "linear-gradient(135deg, rgba(99,102,241,0.4) 0%, rgba(6,182,212,0.3) 100%)",
      " linear-gradient(135deg, rgba(139,92,246,0.4), rgba(6,182,212,0.25))",
      " linear-gradient(135deg, rgba(16,185,129,0.35), rgba(6,182,212,0.2))",
    ],
  },
};



