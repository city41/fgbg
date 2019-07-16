import * as path from "path";
import { GatsbyCreatePages } from "./types";
import { developerPath } from "../util";

export const createDeveloperPages: GatsbyCreatePages = async ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    const developerTemplate = path.resolve("src/components/developerTemplate.tsx");

    const result = await graphql(`
        query {
            developers: allGoogleSheetLeveldataRow {
                distinct(field: developer)
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    result.data.developers.distinct.forEach(developer => {
        const webPath = developerPath(developer);

        createPage({
            path: webPath,
            component: developerTemplate,
            context: {
                developer,
            },
        });
    });
};
