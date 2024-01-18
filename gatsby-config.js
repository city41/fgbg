module.exports = {
    pathPrefix: '/fgbg',
    siteMetadata: {
        title: "FGBG",
        description: "Fighting game backgrounds",
        author: `@mattegreer`,
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Fighting Game Backgrounds",
                short_name: "FGBG",
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: "src/images/faviconSrc.png",
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-google-sheets`,
            options: {
                spreadsheetId: "1W8RE885PVF2z3L9KU9LSCS3y5mpAMldAuoEfcuCcLms",
                worksheetTitle: "leveldata",
                credentials: require("./client_secret.json"),
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `csv`,
                path: `${__dirname}/src/csv`,
            },
        },
        `gatsby-transformer-csv`,
        {
            resolve: "gatsby-plugin-favicon",
            options: {
                logo: "./src/images/faviconSrc.png",
                appName: "FGBG",
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    yandex: false,
                    windows: false,
                },
            },
        },
    ],
};
