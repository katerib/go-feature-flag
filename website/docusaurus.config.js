// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GO Feature Flag',
  tagline: 'Simple Feature Flagging for All',
  url: 'https://gofeatureflag.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon/favicon.png',
  organizationName: 'thomaspoignant',
  projectName: 'go-feature-flag',
  trailingSlash: false,

  customFields: {
    description: 'GO Feature Flag is a simple, complete and lightweight feature flag solution 100% Open Source.',
    logo: 'img/logo/logo.png',
    github: 'https://github.com/thomaspoignant/go-feature-flag',
    sponsor: 'https://github.com/sponsors/thomaspoignant',
    openfeature: 'https://openfeature.dev',
    mailchimpURL:
      '//gofeatureflag.us14.list-manage.com/subscribe/post?u=86acc1a78e371bf66a9683672&amp;id=f42abfec51&amp',
    swaggerURL:
      'https://raw.githubusercontent.com/thomaspoignant/go-feature-flag/main/cmd/relayproxy/docs/swagger.yaml',
  },
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: 'G-LEJBB94YBE',
        },
        gtag: {
          trackingID: 'G-LEJBB94YBE',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/thomaspoignant/go-feature-flag/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/thomaspoignant/go-feature-flag/tree/main/website/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/pushy-buttons.css'), //https://github.com/iRaul/pushy-buttons
            require.resolve('./src/css/simplegrid.css'), //https://thisisdallas.github.io/Simple-Grid/
          ],
        },
      }),
    ],
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Poppins:400,500,700',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css', // https://devicon.dev/
  ],
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['en', 'zh'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_usz', // Increment on change
        content: `⭐️ If you like GO Feature Flag, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/thomaspoignant/go-feature-flag">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/gofeatureflag">Twitter ${TwitterSvg}</a>`,
      },
      image: 'img/logo/logo.png',
      navbar: {
        title: 'GO Feature Flag',
        logo: {
          alt: 'GO Feature Flag Logo',
          src: 'img/logo/logo_128.png',
        },
        items: [
          {
            position: 'left',
            label: 'Product',
            items: [
              {
                to: '/product/what_is_feature_management',
                html: '<i class="fa-solid fa-list-check menu-icon"></i> What is Feature Management?',
              },
              {
                to: '/product/why_go_feature_flag',
                html: '<i class="fa-solid fa-laptop-code menu-icon"></i> Why GO Feature Flag?',
              },
              {
                to: '/product/open_feature_support',
                html: '<i class="fa-solid fa-toggle-on menu-icon"></i> Open Feature Support',
              }
            ]
          },
          {
            position: 'left',
            label: 'Developers',
            items: [
              {
                to: '/docs/category/getting-started',
                html: '<i class="fa-solid fa-rocket menu-icon"></i> Getting Started',
              },
              {
                to: '/docs/category/use-with-openfeature',
                html: '<i class="fa-solid fa-code menu-icon"></i> SDKs',
              },
              {
                to: '/editor',
                html: '<i class="fa-solid fa-pencil menu-icon"></i> Flag Editor',
              },
              {
                html: '<i class="fa-solid fa-star menu-icon"></i> Feature Flag Best Practice',
                to: '/blog/feature-flag-best-practice'
              },
              {
                html: '<i class="fa-solid fa-book menu-icon"></i> Documentation',
                type: 'doc',
                docId: 'index'
              },
              {
                to: 'https://gophers.slack.com/messages/go-feature-flag',
                html: '<i class="fa-brands fa-slack menu-icon"></i> Community <i class="fa fa-external-link" aria-hidden="true"></i>',
              },
              {
                to: 'https://github.com/thomaspoignant/go-feature-flag/releases',
                html: '<i class="fa-brands fa-github menu-icon"></i> Changelog <i class="fa fa-external-link" aria-hidden="true"></i>',
              }
            ]
          },
          {type: 'doc', docId: 'index', position: 'left', html: 'Docs'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/editor', html: 'Editor', position: 'left'},
          {
            to: 'https://github.com/sponsors/thomaspoignant',
            label: 'Sponsor us ❤️',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
          {type: 'docsVersionDropdown', position: 'right'},
          {
            href: 'https://github.com/thomaspoignant/go-feature-flag',
            position: 'right',
            className: 'header-github-link navbar__right',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://twitter.com/gofeatureflag',
            position: 'right',
            className: 'header-twitter-link navbar__right',
            'aria-label': 'Twitter',
          },
          {
            href: 'https://gophers.slack.com/messages/go-feature-flag',
            position: 'right',
            className: 'header-slack-link navbar__right',
            'aria-label': 'Slack',
          }
        ],
      },
      footer: {
        logo: {
          alt: 'GO Feature Flag logo',
          src: 'img/logo/logo.png',
          href: 'https://gofeatureflag.org',
          width: 100,
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/category/getting-started',
              },
              {
                label: 'GO Module',
                to: '/docs/category/use-as-a-go-module'
              },
              {
                label: 'SDKs',
                to: '/docs/category/use-with-openfeature'
              },
              {
                label: 'Relay Proxy',
                to: '/docs/category/use-the-relay-proxy'
              }
            ],
          },

          {
            title: 'Community',
            items: [
              {
                html: `
                <a href="https://gophers.slack.com/messages/go-feature-flag" target="_blank" rel="noreferrer noopener">
                  <i class="fa-brands fa-slack"></i> Slack&nbsp;&nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>`,
              },
              {
                html: `
                <a href="https://twitter.com/gofeatureflag" target="_blank" rel="noreferrer noopener">
                  <i class="fa-brands fa-twitter"></i> Twitter&nbsp;&nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>`,
              },
              {
                html: `
                <a href="https://github.com/thomaspoignant/go-feature-flag" target="_blank" rel="noreferrer noopener">
                  <i class="fa-brands fa-github"></i> Github&nbsp;&nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>`,
              },
              {
                html: `
                <a href="mailto:contact@gofeatureflag.org" target="_blank" rel="noreferrer noopener">
                  <i class="fa-regular fa-envelope"></i> Email&nbsp;&nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>`,
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GO Feature Flag.`,
      },
      prism: {
        theme: require("prism-react-renderer/themes/vsLight"),
        darkTheme: require("prism-react-renderer/themes/vsDark"),
        additionalLanguages: ['java', 'scala', 'toml', 'php', 'go', 'csharp', 'yaml', 'python'],
      },
    }),
};

module.exports = config;
