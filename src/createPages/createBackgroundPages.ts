import * as path from "path";
import * as fs from "fs";
import { GatsbyCreatePages } from "./types";
import { backgroundPath } from "../util/backgroundPath";

const staticSuffix = "_static.jpg";

function getImagePaths(mainImageFileName: string): { mainImageRelativePath: string; bgImageRelativePath: string } {
    const mainImageBaseName = path.basename(mainImageFileName, path.extname(mainImageFileName));
    const imgsDir = path.resolve(__dirname, "../images/bgs");

    const mainImagePath = path.resolve(imgsDir, mainImageFileName);
    const potentialStaticImagePath = path.resolve(imgsDir, mainImageBaseName + staticSuffix);

    if (fs.existsSync(potentialStaticImagePath)) {
        return {
            mainImageRelativePath: path.join("bgs", mainImageFileName),
            bgImageRelativePath: path.join("bgs", mainImageBaseName + staticSuffix),
        };
    } else {
        return {
            mainImageRelativePath: path.join("bgs", mainImageFileName),
            bgImageRelativePath: path.join("bgs", mainImageFileName),
        };
    }
}

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

        const imagePaths = getImagePaths(node.imageFileName);

        createPage({
            path: webPath,
            component: backgroundTemplate,
            context: {
                currentId: node.id,
                prevId: (previous && previous.id) || lastNode.id,
                nextId: (next && next.id) || firstNode.id,
                ...imagePaths,
                mainImageRegex: `/${node.imageFileName}/`,
            },
        });
    });
};
