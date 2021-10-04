const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://graphlinq.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://graphlinq.io/assets/logo_graphlinq.png',
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
		    <a href="https://discord.gg/k3tqWzub" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
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
      '/', // add trailing slash if enabled above
    ],
    links: [{ text: 'GraphLinq Interface', link: 'https://graphlinq.io' }, { text: 'Protocol WhitePaper', link: 'https://graphlinq.io/whitepaper.pdf' },
    { text: 'Github', link: 'https://github.com/GraphLinq' }],
    frontline: false,
    ignoreIndex: true,
    title:"",
  },
  siteMetadata: {
    title: 'GraphLinq Documentation',
    description: 'GraphLinq Engine Protocol full documentation',
    ogImage: null,
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
