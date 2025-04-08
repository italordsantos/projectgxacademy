import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'GxAcademy',
  tagline: 'Documentação e ajuda sobre genexus',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/gxacademy/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      //title: 'GxAcademy',
      logo: {
        alt: 'GxAcademy Logo',
        src: 'img/logo.png',
      },
      items: [
        { to: '/blog', label: 'Conteúdos', position: 'left' },
        {
          type: 'dropdown',
          label: 'Cursos',
          position: 'left',
          items: [
            {
              label: 'Proficiency',
              to: '/curso/v18/proficiency/intro', // caminho para a doc
            },
          ],
        },
        //{ to: '/download', label: 'XPZ', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} GxAcademy. Feito com ☕ por <a href="https://github.com/italordsantos" target="_blank" rel="noopener noreferrer">Italo Rodrigues</a>. Tecnologia: <a href="https://github.com/italordsantos" target="_blank" rel="noopener noreferrer">Docusaurus v3.5</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'module3',
        path: 'curso/v18/proficiency',
        routeBasePath: 'curso/v18/proficiency',
        sidebarPath: require.resolve('./curso/v18/proficiency/sidebars.ts'),
      },
    ],
  ],

};

export default config;
