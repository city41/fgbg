import * as path from "path";
import { GatsbyCreateListPages } from "./types";
import { fileRoot, systemPath, gamePath, developerPath, yearPath, seriesPath } from "../util";

const pathMap: { [key: string]: (value: any) => string } = {
    system: systemPath,
    developer: developerPath,
    year: yearPath,
    series: seriesPath,
    gameNameUsa: gamePath,
};

function getWebPath(field: keyof typeof pathMap, fieldValue: string | number): string {
    const fn = pathMap[field];
    return fn(fieldValue);
}

function getThumbnails(field: string, fieldValue: string, allLevels: any[], allThumbnails: any[]): any[] {
    const matchingLevels = allLevels.filter(level => level[field] === fieldValue);

    return allThumbnails.filter(thumbnail => {
        return matchingLevels.some(level => thumbnail.relativePath.indexOf(fileRoot(level.imageFileName)) > -1);
    });
}

export const createListPages: GatsbyCreateListPages = async ({
    graphql,
    boundActionCreators,
    field,
    fieldTransform,
}) => {
    const { createPage } = boundActionCreators;

    const listTemplate = path.resolve("src/components/listTemplate.tsx");

    const distinctResult = await graphql(`
        query {
            ${field}: allGoogleSheetLeveldataRow {
                distinct(field: ${field})
            }
        }
    `);

    if (distinctResult.errors) {
        throw distinctResult.errors;
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

    const allLevelResult = await graphql(`
        query {
            levels: allGoogleSheetLeveldataRow {
                edges {
                    node {
                        imageFileName
                        ${field}
                    }
                }
            }
        }
    `);

    if (allLevelResult.errors) {
        throw allLevelResult.errors;
    }

    const allLevels = allLevelResult.data.levels.edges.map((e: any) => e.node);

    distinctResult.data[field].distinct.forEach((fieldValue: string) => {
        const webPath = getWebPath(field, fieldValue);

        const filterValue = fieldTransform ? fieldTransform(fieldValue) : fieldValue;

        const thumbnails = getThumbnails(field, filterValue, allLevels, allThumbnails).map(t => {
            return {
                publicURL: t.publicURL,
                width: t.childImageSharp.original.width,
                height: t.childImageSharp.original.height,
                dataUrl: t.childImageSharp.fixed.base64,
            };
        });

        createPage({
            path: webPath,
            component: listTemplate,
            context: {
                filter: { [field]: { eq: filterValue } },
                listType: field,
                listTypeValue: fieldValue,
                thumbnails,
            },
        });
    });
};
