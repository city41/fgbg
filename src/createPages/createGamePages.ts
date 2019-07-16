import * as path from "path";
import { GatsbyCreatePages } from "./types";
import { gamePath } from "../util";

export const createGamePages: GatsbyCreatePages = async ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    const gameTemplate = path.resolve("src/components/gameTemplate.tsx");

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
                distinct(field: gameNameUsa)
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    result.data.allGoogleSheetLeveldataRow.distinct.forEach(gameName => {
        const webPath = gamePath(gameName);

        createPage({
            path: webPath,
            component: gameTemplate,
            context: {
                gameName,
            },
        });
    });
};
