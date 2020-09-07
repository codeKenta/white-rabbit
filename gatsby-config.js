require(`dotenv`).config({ path: `./.env.build` })

module.exports = {
  siteMetadata: {
    title: `Bolt`,
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
        name: `Follow-the-White-Rabbit`,
        short_name: `follow-the-white-rabbit`,
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
  ],
}
