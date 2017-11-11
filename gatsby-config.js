module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
    },
  ],
}
