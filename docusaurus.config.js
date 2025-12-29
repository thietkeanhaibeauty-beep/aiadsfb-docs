// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AIadsfb.com Docs',
  tagline: 'Nền tảng AI Quảng Cáo Tự Động 24/7 cho Spa/Clinic',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.aiadsfb.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'aiadsfb',
  projectName: 'docs',

  onBrokenLinks: 'throw',

  // Vietnamese localization
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Docs at root
          editUrl: ({ docPath }) => {
            return `vscode://file/i:/aiquangcao2111/docs-site/docs/${docPath}`;
          },
        },
        blog: false, // Disable blog
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
      image: 'img/social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AIadsfb.com',
        logo: {
          alt: 'AIadsfb Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Hướng dẫn',
          },
          {
            href: 'https://aiadsfb.com',
            label: 'Quay lại App',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tài liệu',
            items: [
              {
                label: 'Bắt đầu',
                to: '/',
              },
              {
                label: 'Tính năng',
                to: '/features/bao-cao-ads',
              },
            ],
          },
          {
            title: 'Liên hệ',
            items: [
              {
                label: 'Email: mentor@aiadsfb.com',
                href: 'mailto:mentor@aiadsfb.com',
              },
              {
                label: 'Hotline: +1 631 990 2897',
                href: 'tel:+16319902897',
              },
            ],
          },
          {
            title: 'Khác',
            items: [
              {
                label: 'Trang chủ',
                href: 'https://aiadsfb.com',
              },
              {
                label: 'Điều khoản',
                href: 'https://aiadsfb.com/terms',
              },
              {
                label: 'Chính sách bảo mật',
                href: 'https://aiadsfb.com/privacy',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Cantonese Language Teachers Association, Inc. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
