const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://graphlinq.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://graphlinq.io/template/img/logo.svg',
    logoLink: 'https://docs.graphlinq.io',
    title:
      "<a href='https://docs.graphlinq.io'><img class='img-responsive' src='https://betatest.jr00t.com/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/GraphLinq/GraphLinq.Engine',
    helpUrl: '',
    tweetText: '',
    social: `<li>
        <a href="https://twitter.com/graphlinq_proto" target="_blank" rel="noopener">
          <div class="twitterBtn">
            <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
          </div>
        </a>
      </li>
      <li>
        <a href="https://t.me/graphlinq" target="_blank" rel="noopener">
          <div class="discordBtn">
            <img src='https://betatest.jr00t.com/telegram-brands-block.svg' alt={'Telegram'}/>
          </div>
        </a>
      </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/roadmap',
      '/wallet',
      '/token',
      '/dashboard',
      '/blocks',
      '/blockTypes',
      '/graph',
      '/engine',
      '/codeblock',
    ],
    collapsedNav: [
      '/wallet',
      '/token',
      '/dashboard',
      '/blocks',
      '/blockTypes',
      '/graph',
      '/engine',
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [
      { text: 'GraphLinq App Interface', link: 'https://app.graphlinq.io' },
      { text: 'GraphLinq Analytics', link: 'https://analytics.graphlinq.io' },
      { text: 'GraphLinq IDE', link: 'https://ide.graphlinq.io' },
      { text: 'GraphLinq Marketplace', link: 'https://marketplace.graphlinq.io' },
      { text: 'Protocol LitePaper', link: 'https://graphlinq.io/litepaper.pdf' },
      { text: 'Github', link: 'https://github.com/GraphLinq' },
    ],
    frontline: false,
    ignoreIndex: true,
    title: '',
  },
  siteMetadata: {
    title: 'GraphLinq Documentation',
    description: 'GraphLinq Engine Protocol full documentation',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'https://ide.graphlinq.io/favicon.7b6c2325.png',
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'GraphLinq Documentation',
      short_name: 'GLQ Docs',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
