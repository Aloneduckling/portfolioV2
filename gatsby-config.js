/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `frontend`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: "jwbzp4ko",
                dataset: "production",
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "./src/images/icon.png",
            },
        },
    ],
};