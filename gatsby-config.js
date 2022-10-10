module.exports = {
  	siteMetadata: {
    	title: "Techfluent",
		logo: "./images/techfluentlogo1.png",
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
		"gatsby-plugin-mdx",
		"gatsby-transformer-sharp",
  	],
};
