// require(`dotenv`).config()

// const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
// const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    // Used for the title template on pages other than the index site
    siteTitle: `Luan`,
    // Default title of the page
    siteTitleAlt: `Luan Nguyen Portfolio`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Luan Nguyen Portfolio`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://www.jonnyn.com`,
    // Used for SEO
    siteDescription: `Jonny Luan Dinh Nguyen Portfolio`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@jonnyn`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        lessBabel: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
}
