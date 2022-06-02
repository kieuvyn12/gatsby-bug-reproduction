module.exports = {
  siteMetadata: {
    title: `bug-reproduction-site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  `gatsby-transformer-documentationjs`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `source`,
      path: `${__dirname}/./src/`,
    },
  },]
};