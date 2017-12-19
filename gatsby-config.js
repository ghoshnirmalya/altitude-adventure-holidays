module.exports = {
  pathPrefix: `/altitude-adventure-holidays`,
  siteMetadata: {
    title: `Altitude Adventure Holidays`,
    author: "Riddho Datta",
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
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ]
      }
    },
  ],
}
