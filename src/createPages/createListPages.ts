import * as path from "path";
import { GatsbyCreateListPages } from "./types";
import { systemPath, developerPath, yearPath, seriesPath } from "../util";

const pathMap = {
    system: systemPath,
    developer: developerPath,
    year: yearPath,
    series: seriesPath,
};

function getWebPath(field: string, fieldValue: string): string {
    const fn = pathMap[field];
    return fn(fieldValue);
}

function root(filename: string): string {
    return filename.split(".")[0];
}

function getThumbnails(field: string, fieldValue: string, allLevels: any[], allThumbnails: any[]): any[] {
    const matchingLevels = allLevels.filter(level => level[field] === fieldValue);

    return allThumbnails.filter(thumbnail => {
        return matchingLevels.some(level => thumbnail.relativePath.indexOf(root(level.imageFileName)) > -1);
    });
}

export const createListPages: GatsbyCreateListPages = async ({
    graphql,
    boundActionCreators,
    field,
    fieldTransform,
}) => {
    debugger;
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
                    }
                }
            }
        }
    `);

    if (thumbnailResult.errors) {
        throw thumbnailResult.errors;
    }

    const allThumbnails = thumbnailResult.data.thumbnails.edges.map(e => e.node);

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

    const allLevels = allLevelResult.data.levels.edges.map(e => e.node);

    distinctResult.data[field].distinct.forEach(fieldValue => {
        const webPath = getWebPath(field, fieldValue);

        const filterValue = fieldTransform ? fieldTransform(fieldValue) : fieldValue;

        const thumbnailUrls = getThumbnails(field, filterValue, allLevels, allThumbnails).map(t => t.publicURL);

        createPage({
            path: webPath,
            component: listTemplate,
            context: {
                filter: { [field]: { eq: filterValue } },
                listType: field,
                listTypeValue: fieldValue,
                thumbnailUrls,
            },
        });
    });
};
