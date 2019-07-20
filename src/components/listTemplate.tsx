import React, { useState } from "react";
import classnames from "classnames";
import { useStaticQuery, graphql } from "gatsby";
import { groupBy } from "lodash";
import { fileRoot } from "../util";
import { LevelListEntry } from "./levelListEntry";

import styles from "./listTemplate.module.css";

function byLevelName(a: { levelName: string }, b: { levelName: string }): number {
    return a.levelName.localeCompare(b.levelName);
}

function byIgnorePrefix(ignorePrefix: RegExp) {
    return function(a: string, b: string): number {
        const aValue = a.replace(ignorePrefix, "");
        const bValue = b.replace(ignorePrefix, "");

        return aValue.localeCompare(bValue);
    };
}

interface Thumbnail {
    publicURL: string;
    width: number;
    height: number;
    dataUrl: string;
}

function getThumbnail(thumbnails: Thumbnail[], imageFileName: string): Thumbnail {
    return thumbnails.find(t => t.publicURL.indexOf(fileRoot(imageFileName)) > -1);
}

const ListTemplate: React.FunctionComponent = ({ data, pageContext: { listType, listTypeValue, thumbnails } }) => {
    const levels = data.levels.edges.map(e => e.node);

    const byGame = groupBy(levels, "gameNameUsa");

    return (
        <div className={styles.root}>
            <h1>
                {listType}: {listTypeValue}
            </h1>
            <ul>
                {Object.keys(byGame)
                    .sort(byIgnorePrefix(/^the /i))
                    .map(gameName => {
                        return (
                            <li>
                                <h2 className={styles.gameHeader}>{gameName}</h2>
                                <ul>
                                    {byGame[gameName].sort(byLevelName).map(level => (
                                        <li>
                                            <LevelListEntry
                                                className={styles.listEntry}
                                                {...level}
                                                thumbnailData={getThumbnail(thumbnails, level.imageFileName)}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export const query = graphql`
    query($filter: googleSheetLeveldataRowFilterInput!) {
        levels: allGoogleSheetLeveldataRow(filter: $filter) {
            edges {
                node {
                    developer
                    gameNameUsa
                    levelName
                    system
                    imageFileName
                }
            }
        }
    }
`;

export default ListTemplate;
