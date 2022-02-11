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
    "<a href='https://docs.graphlinq.io'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/GraphLinq/GraphLinq',
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
		    <a href="https://discord.com/invite/6vPT4eet8G" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
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
      '/graph',
      '/engine',
      '/token',
      '/blocks',
      '/dashboard'
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'GraphLinq Interface', link: 'https://graphlinq.io' }, { text: 'Protocol WhitePaper', link: 'https://graphlinq.io/whitepaper.pdf' },
    { text: 'Github', link: 'https://github.com/GraphLinq' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://graphlinq.io'>Home</a><div class='greenCircle'></div><a href='https://app.graphlinq.io'>App</a><div class='greenCircle'></div><a href='https://ide.graphlinq.io'>IDE</a>",
  },
  siteMetadata: {
    title: 'GraphLinq Documentation',
    description: 'GraphLinq Engine Protocol full documentation',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
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
