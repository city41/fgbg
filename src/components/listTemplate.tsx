import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { BackgroundLink } from "./backgroundLink";
import { groupBy } from "lodash";

import styles from "./listTemplate.module.css";

function by(key: string) {
    return function sortByKey(a: { [key: string]: string }, b: { [key: string]: string }): number {
        return a[key].localeCompare(b[key]);
    };
}

function byIgnorePrefix(ignorePrefix: RegExp) {
    return function(a: string, b: string): number {
        const aValue = a.replace(ignorePrefix, "");
        const bValue = b.replace(ignorePrefix, "");

        return aValue.localeCompare(bValue);
    };
}

function root(filename: string): string {
    return filename.split(".")[0];
}

function getThumbnail(thumbnailUrls: string[], imageFileName: string): string {
    return thumbnailUrls.find(t => t.indexOf(root(imageFileName)) > -1);
}

const LevelListEntry: React.FunctionComponent = ({ thumbnailUrl, levelName, gameNameUsa, developer, system }) => {
    return (
        <div>
            <img src={thumbnailUrl} />
            {levelName} - {gameNameUsa} - {developer} - {system}
        </div>
    );
};

const ListTemplate: React.FunctionComponent = ({ data, pageContext: { listType, listTypeValue, thumbnailUrls } }) => {
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
                                    {byGame[gameName].sort(by("levelName")).map(level => (
                                        <BackgroundLink {...level}>
                                            <LevelListEntry
                                                {...level}
                                                thumbnailUrl={getThumbnail(thumbnailUrls, level.imageFileName)}
                                            />
                                        </BackgroundLink>
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
