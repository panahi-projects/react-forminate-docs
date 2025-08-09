import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "React-Forminate | Modern React Form Library",
  tagline: "The simplest way to build forms in React with built-in validation",
  favicon: "img/favicon.ico",

  // Where your site will be served from
  url: "https://react-forminate.netlify.app/",
  baseUrl: "/",

  // GitHub repo info
  projectName: "react-forminate-docs", // repo name
  organizationName: "panahi-projects", // GitHub username

  // Required for gh-pages deployment
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [require.resolve("./plugins/rawLoaderPlugin")],
  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content:
          "react forms, form validation, react hooks, form library, react-forminate, form components, dynamic forms",
      },
      {
        name: "description",
        content:
          "React-Forminate is a comprehensive React form library with built-in validation, dynamic fields, and customizable components for building complex forms with ease.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image:alt", content: "React-Forminate Logo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:creator", content: "@PanahiProjects" },
    ],
    ogImage: "img/React-Forminate-Logo-800x800-bg-transparent.webp", // 1200x630px recommended
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true, // This hides the theme toggle button
      respectPrefersColorScheme: false, // Force dark mode regardless of user's system preference
    },
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: "bottom",
    },
    // Replace with your project's social card
    image: "img/React-Forminate-Logo-256x256-bg-transparent.webp",
    navbar: {
      title: "React-Forminate",
      logo: {
        alt: "React-Forminate Logo",
        src: "img/React-Forminate-Logo-256x256-bg-transparent.webp",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Document",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/panahi-projects/react-forminate",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "#",
            },
            {
              label: "Discord",
              href: "#",
            },
            {
              label: "X",
              href: "#",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/panahi-projects/react-forminate",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
