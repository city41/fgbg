const path = require("path")
const { slug } = require("./src/util/slug")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const backgroundTemplate = path.resolve(
        "src/components/backgroundTemplate.tsx"
    )

    const result = await graphql(`
        query allLevels {
            allGoogleSheetLeveldataRow {
                totalCount
                edges {
                    node {
                        levelId
                        levelName
                        gameNameUsa
                        imageFileName
                    }
                }
            }
        }
    `)

    if (result.errors) {
        throw data.errors
    }

    result.data.allGoogleSheetLeveldataRow.edges.forEach(({ node }) => {
        const webPath = path.join(
            "bg",
            slug(node.gameNameUsa),
            slug(node.levelName)
        )

        createPage({
            path: webPath,
            component: backgroundTemplate,
            context: {
                levelId: node.levelId,
                imageFileName: path.join("bgs", node.imageFileName),
            },
        })
    })
}
