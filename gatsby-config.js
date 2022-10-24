module.exports = {
   siteMetadata: {
      title: "Techfluent",
      logo: "./images/techfluentlogo.png",
   },
   plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `blog`,
            path: `${__dirname}/blog`,
         },
      },
      {
         resolve: `gatsby-plugin-netlify-admin`,
         options: {
            adminPath: `${__dirname}/src/admin`,
            adminUri: `admin`,
            loginUri: `/admin/login/`,
            excludeUri: [`admin/signup`],
         },
      },
      `gatsby-plugin-mdx`,
      `gatsby-transformer-sharp`,
   ],
};