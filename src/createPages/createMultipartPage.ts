import * as path from "path";
import { GatsbyCreatePages } from "./types";
import { fileRoot, otherPath } from "../util";

function getThumbnails(allLevels: any[], allThumbnails: any[]): any[] {
    return allThumbnails.filter(thumbnail => {
        return allLevels.some(level => thumbnail.relativePath.indexOf(fileRoot(level.imageFileName)) > -1);
    });
}

export const createMultipartPage: GatsbyCreatePages = async ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    const listTemplate = path.resolve("src/components/listTemplate.tsx");

    const allLevelsResult = await graphql(`
        query {
            allLevels: allGoogleSheetLeveldataRow {
                totalCount
                edges {
                    node {
                        levelName
                        gameNameUsa
                        imageFileName
                    }
                }
            }
        }
    `);

    if (allLevelsResult.errors) {
        throw allLevelsResult.errors;
    }

    const thumbnailResult = await graphql(`
        query {
            thumbnails: allFile(filter: { relativePath: { regex: "/bgs/thumb/" } }) {
                edges {
                    node {
                        relativePath
                        publicURL
                        childImageSharp {
                            original {
                                width
                                height
                            }
                            fixed(base64Width: 10) {
                                base64
                            }
                        }
                    }
                }
            }
        }
    `);

    if (thumbnailResult.errors) {
        throw thumbnailResult.errors;
    }

    const allThumbnails = thumbnailResult.data.thumbnails.edges.map((e: any) => e.node);

    const allLevels = allLevelsResult.data.allLevels.edges.map((e: any) => e.node);

    const multipartLevels = allLevels.filter((levelNode: any) => {
        return levelNode.imageFileName.split(",").length > 1;
    });

    const thumbnails = getThumbnails(multipartLevels, allThumbnails).map(t => {
        return {
            publicURL: t.publicURL,
            width: t.childImageSharp.original.width,
            height: t.childImageSharp.original.height,
            dataUrl: t.childImageSharp.fixed.base64,
        };
    });

    createPage({
        path: otherPath("multipart"),
        component: listTemplate,
        context: {
            filter: { imageFileName: { regex: "/,/" } },
            listType: "special",
            listTypeValue: "multipart",
            thumbnails,
            description:
                'All of the backgrounds here have multiple "parts", for example they might change from round 1 to round 2',
        },
    });
};
