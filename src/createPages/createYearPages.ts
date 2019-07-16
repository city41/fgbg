import * as path from "path";
import { GatsbyCreatePages } from "./types";
import { yearPath } from "../util";

export const createYearPages: GatsbyCreatePages = async ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    const yearTemplate = path.resolve("src/components/yearTemplate.tsx");

    const result = await graphql(`
        query {
            years: allGoogleSheetLeveldataRow {
                distinct(field: year)
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    result.data.years.distinct.forEach(year => {
        const webPath = yearPath(year);

        createPage({
            path: webPath,
            component: yearTemplate,
            context: {
                year: parseInt(year),
            },
        });
    });
};
