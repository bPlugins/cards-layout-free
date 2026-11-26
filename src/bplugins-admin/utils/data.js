import { elementorTabIcon, gutenbergTabIcon, shortcodeTabIcon } from './icons';
import { proLayoutNames } from '../../utils/options';

const slug = "cards-layout";

// Counted from the Pro layout list, which both the free and the Pro build contain.
const proLayoutCount = proLayoutNames.length;

export const dashboardInfo = (info) => {
  const { version, isPremium, hasPro, adminUrl } = info;

  const proSuffix = isPremium ? " Pro" : "";

  return {
    name: `Cards Layout${proSuffix}`,
    displayName: `Cards Layout ${proSuffix}`,
    description:
      "Cards Layout is a powerful and flexible plugin that allows you to create beautiful and responsive card layouts for your WordPress website. With a wide range of customization options, you can create unique and eye-catching layouts that perfectly match your website's design.",
    slug,
    version,
    isPremium,
    hasPro,
    displayOurPlugins: true,
    adminUrl,
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
    // The license screen is Pro-only, so the free build never passes a license nonce.
    ...(PHCLB_PRO ? { licenseActiveNonce: info.licenseActiveNonce } : {}),
    // Absolute URL: the Welcome screen uses it as-is, so a relative path would resolve to
    // /wp-admin/wp-admin/... from the dashboard page.
    startButton: {
      label: "Start Now",
      url: `${adminUrl}post-new.php?post_type=page`,
    },
  };
};

export const demoInfo = {
  // allInOneLabel: 'See All Demos',
  // allInOneLink: 'https://apb.bplugins.com/all-demos-in-one-place/',
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
      title: "State / Counter Card",
      description: "Showcase key metrics with a modern twist. This layout features a prominent number, a subtle sparkline graph, and a clear label. Ideal for dashboards, analytics, and performance highlights.",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/cards-layout-state-card/",
    },
    {
      icon: "",
      title: "Progress Card",
      description: "Visualize progress with sleek, customizable progress bars. This layout is perfect for showing project completion, skill levels, or any metric that benefits from a clear visual scale.",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/cards-layout-progress-card/",
    },
    {
      icon: "",
      title: "Animated Service Card",
      description: "A dynamic card layout that brings your content to life with subtle animations. Perfect for service-based businesses or feature highlights where movement draws attention.",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/cards-layout-animated-service-card/",
    },
    {
      icon: "",
      title: "Banner Style Card",
      description: "A bold, full-width banner-style card designed to grab attention. Ideal for promotions, announcements, or featured content that needs to stand out.",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/cards-layout-banner-style-card/",
    },
    {
      icon: "",
      title: "Feature Card",
      description: "A sleek, modern card layout perfect for highlighting key features or benefits. This design uses a clean structure with a prominent icon, title, and description area, making it ideal for software, services, or product showcases.",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/cards-layout-feature-card/",
    },
    {
      icon: "",
      title: "Client Logo Card",
      description: "A clean, professional layout perfect for showcasing client logos or partner brands. Features a prominent image area and structured text blocks for company names and descriptions.",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/cards-layout-client-logo-card/",
    },
    {
      icon: "",
      title: "Creative Curve Card",
      description: "A visually striking card layout featuring a unique curved cutout design element. This layout adds a modern and creative flair, perfect for portfolios, design agencies, or any brand wanting to stand out.",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/cards-layout-creative-curve-card/",
    },
  ],
};

export const pricingInfo = {
  logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`, // Optional
  pluginId: 27207,
  planId: 44997,
  licenses: [1, 3, null],
  button: {
    label: "Buy Now ➜",
  },
  featured: {
    selected: 3, // choose from licenses item
    text: "Best Value",
  },
};








export const welcomeInfo = (adminUrl) => ({
  keywords: ['Feature Cards', 'Hero Cards', 'Achievement Cards', 'Responsive Grid', 'Shortcode & Elementor'],
  keywordsLabel: 'Features',
  gettingStarted: {
    tabs: [
      {
        key: 'gutenberg',
        label: 'Gutenberg',
        icon: gutenbergTabIcon,
        steps: [
          {
            num: 1,
            title: 'Add the Block',
            body: 'Open a page in the block editor. Click <strong>+</strong> and search for <strong>Cards Layout</strong>.',
            link: { url: `${adminUrl}post-new.php?post_type=page`, label: 'Create a Page' }
          },
          {
            num: 2,
            title: 'Choose a Layout',
            body: 'Pick a card style in the block toolbar. In the sidebar, open <strong>Layout</strong> to set the number of columns for desktop, tablet and mobile.'
          },
          {
            num: 3,
            title: 'Edit Your Cards',
            body: 'Click a card to change its image, title, text and button in the <strong>Cards</strong> panel. Drag cards in that list to reorder them, and use the <strong>Style</strong> tab for colours and fonts.'
          },
          {
            num: 4,
            title: 'Publish',
            body: 'Publish or update the page. Your card grid adapts to every screen size.'
          }
        ]
      },
      {
        key: 'shortcode',
        label: 'ShortCode',
        icon: shortcodeTabIcon,
        steps: [
          {
            num: 1,
            title: 'Create Your Cards',
            body: 'Go to <strong>Cards Layout › Add New Shortcode</strong>.',
            link: { url: `${adminUrl}post-new.php?post_type=cards-layout`, label: 'Add New' }
          },
          {
            num: 2,
            title: 'Design Them',
            body: 'Choose a layout and edit your cards in the sidebar, just like in the block editor.'
          },
          {
            num: 3,
            title: 'Copy the Shortcode',
            body: 'Publish, then copy the shortcode, for example <code>[cards-layout id=123]</code>, from the top of the editor or from the <strong>Cards Layout</strong> list.'
          },
          {
            num: 4,
            title: 'Paste Anywhere',
            body: 'Paste it into a Shortcode block, the classic editor or a text widget.'
          }
        ]
      },
      {
        key: 'elementor',
        label: 'Elementor',
        icon: elementorTabIcon,
        steps: [
          {
            num: 1,
            title: 'Copy the Shortcode',
            body: 'Create your cards under <strong>Cards Layout › Add New Shortcode</strong>, publish them, then copy the shortcode, for example <code>[cards-layout id=123]</code>, from the list.'
          },
          {
            num: 2,
            title: 'Open Elementor',
            body: 'Open any page or post with the Elementor Editor.'
          },
          {
            num: 3,
            title: 'Add Shortcode Widget',
            body: 'Search for the <strong>Shortcode</strong> widget in the Elementor panel and drag it to your section.'
          },
          {
            num: 4,
            title: 'Paste and Save',
            body: 'Paste your cards layout shortcode into the widget settings and save the page.'
          }
        ]
      }
    ]
  },
  changelogs: [
    {
      version: "2.0.4 - 6 August, 2026",
      list: [
        "New: Stacked Cards layout (Pro). Cards stick and scale as visitors scroll; the motion turns off when a visitor's device asks for reduced motion.",
        "New: Getting Started guides in the plugin dashboard for the block editor, shortcodes and Elementor.",
        "Improved: The block now also shows up in the inserter when you search for features, services, team or stats.",
        "Improved: Cards saved with the old externally hosted placeholder images (versions 1.1.0–2.0.2) now use smaller copies bundled with the plugin.",
        "Fixed: Every card block requested a Google font that never loaded. Google Fonts now load only when you choose one.",
        "Fixed: Deleting the plugin no longer deletes your saved shortcode cards.",
        "Fixed: Password-protected shortcode cards showed \"Password:\" with no field to type it in. The password field is back.",
        "Fixed: With Cards Layout Pro also installed, the free plugin now steps aside instead of loading a second time and logging PHP warnings.",
        "Developer: Card layouts now load through a shared layout registry.",
      ],
    },
    {
      version: "2.0.3 - 4 June, 2026",
      list: [
        "Removed free-version frontend attribute restrictions that could be interpreted as locked functionality.",
        "Refactored frontend rendering logic to ensure all available free features remain fully functional.",
        "Fixed invalid GitHub repository URL in readme documentation.",
        "Added complete External Services documentation for bPlugins API usage.",
        "Improved shortcode rendering and output sanitization.",
        "Performed additional codebase audit for WordPress.org compliance.",
      ],
    },
    {
      version: "2.0.2 - 13 May, 2026",
      list: [
        "Removed all Freemius-based feature gating and premium license checks.",
        "Removed locked/blurred Pro-only layouts to comply with Trialware guidelines.",
        "Cleaned block editor, admin dashboard, and frontend UI from upgrade-lock states.",
        "Ensured generated assets in /build have corresponding source files available.",
        "Improved plugin compliance with WordPress.org Guideline #4 (Human Readable Code).",
        "Tested plugin on clean install with WP_DEBUG enabled.",
      ],
    },
    {
      version: "2.0.1 - 26 April, 2026",
      list: [
        "Enhanced block title for clearer identification",
        "Optimized locked UI blur effect for a better user experience",
      ],
    },
    {
      version: "2.0.0 – 21 April 2026 - Major Release",
      list: [
        "Major Release: Introducing Cards Layout Pro with Premium SaaS-style layouts!",
        "New Free Layouts: Hero Feature Card, Achievement Card, Feature Card.",
        "New Pro Layouts: State / Counter Card, Progress Card, Animated Service Card, Banner Card, Client Logo Card, Creative Curve Card.",
        "Added Responsive Grid Engine for Desktop, Tablet, and Mobile column controls.",
        "Added granular Icon Wrap Size controls for independent scaling.",
        "Added dynamic Card Tags across multiple layouts.",
        "Added customizable badge animation speed for Achievement Card.",
        "Codebase optimization and bug fixes.",
      ],
    },
    {
      version: "1.1.4 – 29 July 2025",
      list: ["New: Added Focal Point picker support for image positioning."],
    },
    {
      version: "1.1.3 – 27 July 2025",
      list: ["Update: Support for importing content directly from image media metadata."],
    },
    {
      version: "1.1.2 – 9 July 2025",
      list: [
        "Added Image border radius controls.",
        "Added card content alignment options.",
      ],
    },
    {
      version: "1.1.1 – 6 July 2025",
      list: ["Fix: Card URL and button URL now correctly open in a new tab."],
    },
    {
      version: "1.1.0 – 4 July 2025",
      list: [
        "Introduced Default layout.",
        "Added controls for card border, padding, and border radius.",
        "Added full typography and color customization for title, description, and buttons.",
      ],
    },
    {
      version: "1.0.0",
      list: ["Initial Release."],
    },
  ],

  proFeatures: [
    `Unlock ${proLayoutCount} Premium SaaS-style layouts`,
    "State / Counter Card with sparkline graphs",
    "Progress Card with customizable gradient bars",
    "Animated Service Card with glowing borders",
    "Banner Card with glassmorphism blur effects",
    "Client Logo Card with specialized typographic layouts",
    "Creative Curve Card with seamless CSS cutouts",
    "Priority customer support and premium updates",
  ],
})



