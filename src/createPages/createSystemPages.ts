import * as path from "path";
import { GatsbyCreatePages } from "./types";
import { slug } from "../util/slug";

export const createSystemPages: GatsbyCreatePages = async ({
    graphql,
    boundActionCreators,
}) => {
    const { createPage } = boundActionCreators;

    const systemTemplate = path.resolve("src/components/systemTemplate.tsx");

    const result = await graphql(`
        query allLevels {
            allGoogleSheetLeveldataRow {
                totalCount
                edges {
                    node {
                        levelName
                        gameNameUsa
                        imageFileName
                        system
                    }
                }
                distinct(field: system)
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    result.data.allGoogleSheetLeveldataRow.distinct.forEach(system => {
        const webPath = slug(system);

        createPage({
            path: webPath,
            component: systemTemplate,
            context: {
                system,
            },
        });
    });
};
