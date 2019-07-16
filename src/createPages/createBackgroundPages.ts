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
                        id
                        levelName
                        gameNameUsa
                        imageFileName
                        system
                    }
                    previous {
                        id
                    }
                    next {
                        id
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    const firstNode = result.data.allGoogleSheetLeveldataRow.edges[0].node;
    const lastNode =
        result.data.allGoogleSheetLeveldataRow.edges[result.data.allGoogleSheetLeveldataRow.totalCount - 1].node;

    result.data.allGoogleSheetLeveldataRow.edges.forEach(({ node, previous, next }) => {
        const webPath = backgroundPath(node);
        const imageFileRoot = node.imageFileName.split(".")[0];

        createPage({
            path: webPath,
            component: backgroundTemplate,
            context: {
                currentId: node.id,
                imageFileNameRegex: `/${imageFileRoot}/`,
                prevId: (previous && previous.id) || lastNode.id,
                nextId: (next && next.id) || firstNode.id,
            },
        });
    });
};
