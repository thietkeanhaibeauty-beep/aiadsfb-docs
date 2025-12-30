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

  // Vietnamese + English localization
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    localeConfigs: {
      vi: {
        label: 'Tiếng Việt',
        htmlLang: 'vi-VN',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
    },
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
        title: 'Climate Resilience International',
        logo: {
          alt: 'Climate Resilience International Logo',
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
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Climate Resilience International',
            items: [
              {
                label: 'IRS Determination — Recognized as a 501(c)(3) public charity. EIN: 931391894',
                href: '#',
              },
              {
                label: 'Address: 125 E BIDWELL ST APT 421, FOLSOM, CA 95630',
                href: '#',
              },
              {
                label: 'Hotline: +1 760 284 9613',
                href: 'tel:+17602849613',
              },
              {
                label: 'Email: mentor@aiadsfb.com',
                href: 'mailto:mentor@aiadsfb.com',
              },
            ],
          },
          {
            title: 'SẢN PHẨM',
            items: [
              {
                label: 'Bảng điều khiển',
                to: '/',
              },
              {
                label: 'Quảng cáo bài viết',
                to: '/',
              },
              {
                label: 'Quảng cáo tin nhắn',
                to: '/',
              },
              {
                label: 'Quy tắc tự động',
                to: '/',
              },
            ],
          },
          {
            title: 'CÔNG TY',
            items: [
              {
                label: 'Về chúng tôi',
                href: '#',
              },
              {
                label: 'Blog',
                href: '#',
              },
              {
                label: 'Tuyển dụng',
                href: '#',
              },
              {
                label: 'Liên hệ',
                href: 'mailto:mentor@aiadsfb.com',
              },
            ],
          },
          {
            title: 'HỖ TRỢ',
            items: [
              {
                label: 'Tài liệu & API',
                to: '/',
              },
              {
                label: 'Trung tâm trợ giúp',
                to: '/',
              },
              {
                label: 'Bảng giá',
                href: '#',
              },
              {
                label: 'Trạng thái hệ thống',
                href: '#',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Climate Resilience International. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
