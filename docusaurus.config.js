// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ClimateQ&A',
  tagline: 'AI-powered assistant for climate and nature questions',
  favicon: 'img/logo_climateqa.png',

  // Set the production url of your site here
  url: 'https://climateqa.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'climateqa', // Usually your GitHub org/user name.
  projectName: 'climateqa.github.io', // Usually your repo name.

  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/screenshots/multimodal1.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'ClimateQ&A',
        logo: {
          alt: 'ClimateQ&A Logo',
          src: 'img/logo_climateqa.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'About ClimateQ&A',
          },
          {to: '/docs/sources', label: 'Sources', position: 'left'},
          {to: '/docs/contact', label: 'Contact', position: 'left'},
          {to: '/docs/feedbacks', label: 'Feedbacks', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'dropdown',
            label: 'v1.6.0',
            position: 'right',
            items: [
              {
                label: 'v1.6.0',
                to: '/docs/changelog/v1.6.0/',
              },
              {
                label: 'v1.5.0',
                to: '/docs/changelog/v1.5.0/',
              },
              {
                label: 'v1.4.0',
                to: '/docs/changelog/v1.4.0/',
              },
            ],
          },
          {
            href: 'https://huggingface.co/spaces/Ekimetrics/climate-question-answering/tree/main',
            label: 'GitHub',
            position: 'right',
            className: "header-github-link",
          },
        ],
      },
      footer: {},
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
