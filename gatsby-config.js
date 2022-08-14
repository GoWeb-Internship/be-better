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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-facebook-pixel`,
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
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: false,
    //     develop: false,
    //     tailwind: true,
    //     ignore: ['react-phone-input-2/lib/bootstrap.css'],
    //   },
    // },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "pixel id here",
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
        name: `wyCouchBetter`,
        path: `${__dirname}/content/wyCouchBetter`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `beBetter`,
        path: `${__dirname}/content/beBetter`,
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
        name: `experience`,
        path: `${__dirname}/content/experience`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `changes`,
        path: `${__dirname}/content/changes`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
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
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`ua`, `en`, `ru`],
        defaultLanguage: `ua`,
        generateDefaultLanguagePage: '/ua',
        siteUrl: ``,

        i18nextOptions: {
          lng: 'ua',
          load: 'currentOnly',

          interpolation: {
            escapeValue: false,
          },

          keySeparator: false,
          nsSeparator: true,
        },
      },
    },
  ],
};
