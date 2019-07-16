import * as path from "path";
import { GatsbyCreatePages } from "./types";
import { seriesPath } from "../util";

export const createSeriesPages: GatsbyCreatePages = async ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    const seriesTemplate = path.resolve("src/components/seriesTemplate.tsx");

    const result = await graphql(`
        query allLevels {
            series: allGoogleSheetLeveldataRow {
                totalCount
                distinct(field: series)
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    result.data.series.distinct.forEach(series => {
        const webPath = seriesPath(series);

        createPage({
            path: webPath,
            component: seriesTemplate,
            context: {
                series,
            },
        });
    });
};
