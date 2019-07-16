import * as path from "path";
import { GatsbyCreatePages } from "./types";
import { systemPath } from "../util";

export const createSystemPages: GatsbyCreatePages = async ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    const systemTemplate = path.resolve("src/components/systemTemplate.tsx");

    const result = await graphql(`
        query {
            systems: allGoogleSheetLeveldataRow {
                distinct(field: system)
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    result.data.systems.distinct.forEach(system => {
        const webPath = systemPath(system);

        createPage({
            path: webPath,
            component: systemTemplate,
            context: {
                system,
            },
        });
    });
};
