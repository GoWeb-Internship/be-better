require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Be-better`,
    description: `Если ты эмоционально выгорел и живешь без удовольствия.`,
    siteUrl: `https://be-better.netlify.app`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-i18next`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `price`,
        path: `${__dirname}/content/price`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `aboutMe`,
        path: `${__dirname}/content/aboutMe`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `aboutYou`,
        path: `${__dirname}/content/aboutYou`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `guarantee`,
        path: `${__dirname}/content/guarantee`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `route`,
        path: `${__dirname}/content/route`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/image`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
