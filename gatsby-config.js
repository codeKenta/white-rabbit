require(`dotenv`).config({ path: `./.env.build` })
const path = require('path')

module.exports = {
  siteMetadata: {
    title: `White Rabbit`,
    description: ``,
    author: `Kenneth Österholm`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-xml`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `White Rabbit`,
        short_name: `White Rabbit`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATOCMS_API_TOKEN,
        previewMode: false,
        disableLiveReload: false,
        // apiUrl: "https://site-api.datocms.com",
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        '@src': path.join(__dirname, 'src'),
        '@components': path.join(__dirname, 'src/components'),
        '@hooks': path.join(__dirname, 'src/hooks'),
        '@context': path.join(__dirname, 'src/context'),
        '@pages': path.join(__dirname, 'src/pages'),
        '@templates': path.join(__dirname, 'src/templates'),
        '@assets': path.join(__dirname, 'src/assets'),
        '@layout': path.join(__dirname, 'src/layout'),
        '@utils': path.join(__dirname, 'src/utils'),
      },
    },
  ],
}
