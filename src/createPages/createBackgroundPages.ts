import * as path from "path";
import { GatsbyCreatePages } from "./types";
import { bgpath } from "../util/bgpath";

export const createBackgroundPages: GatsbyCreatePages = async ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    const backgroundTemplate = path.resolve("src/components/backgroundTemplate.tsx");

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
                        system
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    result.data.allGoogleSheetLeveldataRow.edges.forEach(({ node }) => {
        const webPath = bgpath(node);
        const imageFileRoot = node.imageFileName.split(".")[0];

        createPage({
            path: webPath,
            component: backgroundTemplate,
            context: {
                levelId: node.levelId,
                imageFileNameRegex: `/${imageFileRoot}/`,
            },
        });
    });
};
