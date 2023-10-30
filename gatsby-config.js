const siteMetadata = {
    title: `My Gatsby Blog`,
    description: `This is my coding blog.`,
    lastBuildDate: new Date(Date.now()).toISOString(),
    siteUrl: `https://dummy-url-for-now.com`,
    authorName: `Author McAuthorson`,
    twitterUsername: `@authorOfPosts`,
    siteLanguage: `en-US`,
    siteLocale: `en_us`,
};


module.exports = {
    siteMetadata,
    plugins: [
        `gatsby-plugin-theme-ui`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 620,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/`,
                name: `content`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content`,
                name: `content`,
            },
        },
    ],
};