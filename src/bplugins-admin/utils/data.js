const slug = "cards-layout";

export const dashboardInfo = (info) => {
  const { version, isPremium, licenseActiveNonce } = info;

  const proSuffix = isPremium ? " Pro" : "";

  return {
    name: `Cards Layout${proSuffix}`,
    displayName: `Cards Layout ${proSuffix}`,
    description:
      "Cards Layout is a powerful and flexible plugin that allows you to create beautiful and responsive card layouts for your WordPress website. With a wide range of customization options, you can create unique and eye-catching layouts that perfectly match your website's design.",
    slug,
    version,
    displayOurPlugins: true,
    media: {
      logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
      banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
      // thumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}.png`,
      // proThumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}-pro.png`,
      // video: 'https://www.youtube.com/watch?v=milYZrqLJsE',
      // isYoutube: true
    },
    pages: {
      org: `https://wordpress.org/plugins/${slug}/`,
      landing: `https://bplugins.com/products/${slug}/`,
      docs: `https://bplugins.com/docs/${slug}/`,
      pricing: `https://bplugins.com/products/${slug}/pricing`,
    },
    freemius: {
      product_id: 27207,
      plan_id: 44997,
      public_key: "pk_3498117315f221ea381495c9c0a7f",
    },
    licenseActiveNonce,
    changelogs: [
      {
        version: "2.0.2 - 10 May, 2026",
        list: [
          "Compliance update: Removed all gated features and trialware logic.",
          "Enhanced block stability and settings panel.",
        ],
      },
      {
        version: "2.0.1 - 26 April, 2026",
        list: [
          "Enhanced block title for clearer identification",
          "Improved user interface for better accessibility.",
        ],
      },
      {
        version: "2.0.0 – 21 April 2026 - Major Release",
        list: [
          "Major Release: Introducing new layout engine!",
          "New Free Layouts: Hero Feature Card, Achievement Card.",
          "Added Responsive Grid Engine for Desktop, Tablet, and Mobile column controls.",
          "Added granular Icon Wrap Size controls for independent scaling.",
          "Added dynamic Card Tags across multiple layouts.",
          "Added customizable badge animation speed for Achievement Card.",
          "Codebase optimization and bug fixes.",
        ],
      },
    ],
    startButton: {
      label: "Start Now",
      url: `wp-admin/post-new.php?post_type=cards-layout`,
    },
  };
};

export const demoInfo = {
  demos: [
    {
      icon: "",
      title: "Default",
      description: "The timeless image-first card. A hero image, title, description, and a clear call-to-action. Perfect for blog posts, portfolio items, and product listings.",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/cards-layout-default/",
    },
    {
      icon: "",
      title: "Hero Feature Card",
      description: "Dark-mode feature cards with a release badge, subtle image preview, and outlined CTA. Great for product updates, SaaS feature announcements, and plugin releases.",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/cards-layout-hero-feature-card/",
    },
    {
      icon: "",
      title: "Achievement Card",
      description: "A badge-centric layout perfect for highlighting milestones, awards, or key achievements. Features a prominent circular badge, bold title, and clean supporting text.",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/cards-layout-achievement-card/",
    },
    {
      icon: "",
      title: "Feature Card",
      description: "A sleek, modern card layout perfect for highlighting key features or benefits. This design uses a clean structure with a prominent icon, title, and description area, making it ideal for software, services, or product showcases.",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/cards-layout-feature-card/",
    },
  ],
};

export const pricingInfo = {};
