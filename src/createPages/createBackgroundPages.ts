import * as path from "path";
import { GatsbyCreatePages } from "./types";
import { backgroundPath } from "../util/backgroundPath";

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
                    next {
                        levelId
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    result.data.allGoogleSheetLeveldataRow.edges.forEach(({ node, next }) => {
        const webPath = backgroundPath(node);
        const imageFileRoot = node.imageFileName.split(".")[0];

        createPage({
            path: webPath,
            component: backgroundTemplate,
            context: {
                levelId: node.levelId,
                imageFileNameRegex: `/${imageFileRoot}/`,
                nextLevelId: (next && next.levelId) || 1,
            },
        });
    });
};
