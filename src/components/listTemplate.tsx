import React, { useState } from "react";
import classnames from "classnames";
import { useStaticQuery, graphql } from "gatsby";
import { groupBy } from "lodash";
import { fileRoot } from "../util";
import { LevelListEntry } from "./levelListEntry";
import { Layout } from "./layout";
import { byLevelName, byIgnoreThe } from "../util/sort";

import styles from "./listTemplate.module.css";

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
        <Layout logoClassName={styles.layoutLogo}>
            <div className={styles.root}>
                <h1>{listTypeValue}</h1>
                <noscript>
                    <div className={styles.noscriptWarning}>this page loads faster with JavaScript enabled</div>
                </noscript>
                <ul>
                    {Object.keys(byGame)
                        .sort(byIgnoreThe)
                        .map(gameName => {
                            return (
                                <li>
                                    {gameName !== listTypeValue && <h2 className={styles.gameHeader}>{gameName}</h2>}
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
        </Layout>
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
