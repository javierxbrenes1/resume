module.exports = {
  siteMetadata: {
    title: `Javier Brenes Redondo`,
    description: `Hola mi nombre es Javier Brenes, soy desarrollador de software, y me encantaria hablar contigo acerca de proyectos.`,
    author: `@javierxbrenes1`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/javier_brenes.jpg`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-postcss',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
