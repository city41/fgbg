import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import SEO from "./seo";
import { groupBy } from "lodash";
import { fileRoot } from "../util";
import { LevelListEntry } from "./levelListEntry";
import { Layout } from "./layout";
import { byLevelName, byIgnoreThe } from "../util/sort";
import { ListTemplateQuery } from "../graphqlTypes";

import styles from "./listTemplate.module.css";

interface Thumbnail {
    publicURL: string;
    width: number;
    height: number;
    dataUrl: string;
}

function getThumbnail(thumbnails: Thumbnail[], imageFileName: string): Thumbnail | undefined {
    return thumbnails.find(t => t.publicURL.indexOf(fileRoot(imageFileName) + "_thumb") > -1);
}

interface ListTemplateProps {
    dontGroup?: boolean;
    pageContext: {
        listTypeValue: string;
        thumbnails: Thumbnail[];
        description?: string;
    };
    data: ListTemplateQuery;
}

const ListTemplate: React.FunctionComponent<ListTemplateProps> = ({
    children,
    dontGroup,
    data,
    pageContext: { listTypeValue, thumbnails, description },
}) => {
    const levels = data.levels.edges.map(e => e.node);
    const twitterImageUrl = data.twitterImg && data.twitterImg.edges[0].node.childImageSharp.fixed.src;

    const byGame = groupBy(levels, "gameNameUsa");

    const gameBody = dontGroup ? (
        <ul>
            {levels.map(level => (
                <li key={level.levelName}>
                    <LevelListEntry
                        linkClassName={styles.listEntryLink}
                        className={styles.listEntry}
                        {...level}
                        thumbnailData={getThumbnail(thumbnails, level.imageFileName)}
                    />
                </li>
            ))}
        </ul>
    ) : (
        <ul>
            {Object.keys(byGame)
                .sort(byIgnoreThe)
                .map(gameName => {
                    return (
                        <li key={gameName}>
                            {gameName !== listTypeValue && <h2 className={styles.gameHeader}>{gameName}</h2>}
                            <ul>
                                {byGame[gameName].sort(byLevelName).map(level => (
                                    <li key={level.levelName}>
                                        <LevelListEntry
                                            linkClassName={styles.listEntryLink}
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
    );

    return (
        <>
            <SEO
                title={`${listTypeValue} - FGBG`}
                description="fighting game backgrounds website"
                imageUrl={twitterImageUrl}
            />
            <Layout logoClassName={styles.layoutLogo}>
                <div className={styles.root}>
                    <h1>
                        {listTypeValue}{" "}
                        <span className={styles.levelCount}>
                            {children || (
                                <span>
                                    {levels.length} background{levels.length !== 1 && "s"}
                                </span>
                            )}
                        </span>
                    </h1>
                    {description && <p>{description}</p>}
                    <noscript>
                        <div className={styles.noscriptWarning}>this page loads faster with JavaScript enabled</div>
                    </noscript>
                    {gameBody}
                </div>
            </Layout>
        </>
    );
};

export const query = graphql`
    query ListTemplate($filter: googleSheetLeveldataRowFilterInput!, $seoImageRegex: String!) {
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
        twitterImg: allFile(filter: { relativePath: { regex: $seoImageRegex } }) {
            edges {
                node {
                    childImageSharp {
                        fixed(height: 200) {
                            src
                        }
                    }
                }
            }
        }
    }
`;

export default ListTemplate;
