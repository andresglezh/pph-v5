/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: process.env.WPGRAPHQL_URL || 'https://stagingserver.payperhead.com/graphql',
        minimizeDeprecationNotice: true,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WPGraphQL',
        fieldName: 'wpcontent',
        // GraphQL endpoint, relative to your WordPress home URL.
        url: 'https://stagingserver.payperhead.com/graphql',
        // GraphQL endpoint using env variable
       // url: "${process.env.WORDPRESS_URL}/graphql",
      },
    },
  ],
}
