import React from "react";
import { graphql } from "gatsby";
import { Search } from "../components/search";
import { IndexHeader } from "../components/indexHeader";
import { BrowseColumn } from "../components/browseColumn";
import SEO from "../components/seo";
import { seriesPath, developerPath, systemPath, yearPath } from "../util";
import { byIgnoreThe } from "../util/sort";

import styles from "./index.module.css";

const IndexPage: React.FunctionComponent = ({ data }) => {
    const searchData = data.searchData.edges.map(e => e.node);

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <SEO title="Fighting Game Backgrounds" />
                <IndexHeader className={styles.header} />
                <Search className={styles.search} data={searchData} />
                <p>or browse {data.searchData.totalCount} backgrounds by</p>
                <div className={styles.browseColumnContainer}>
                    <BrowseColumn title="series" pathFn={seriesPath} values={data.series.distinct.sort(byIgnoreThe)} />
                    <BrowseColumn
                        title="developer"
                        pathFn={developerPath}
                        values={data.developers.distinct.sort(byIgnoreThe)}
                    />
                    <BrowseColumn title="system" pathFn={systemPath} values={data.systems.distinct.sort(byIgnoreThe)} />
                    <BrowseColumn title="year released" pathFn={yearPath} values={data.years.distinct} />
                </div>
            </div>
        </div>
    );
};

export default IndexPage;

export const query = graphql`
    query {
        searchData: allGoogleSheetLeveldataRow {
            totalCount
            edges {
                node {
                    levelName
                    gameNameUsa
                    system
                    developer
                    year
                    series
                }
            }
        }
        developers: allGoogleSheetLeveldataRow {
            distinct(field: developer)
        }
        years: allGoogleSheetLeveldataRow {
            distinct(field: year)
        }
        systems: allGoogleSheetLeveldataRow {
            distinct(field: system)
        }
        series: allGoogleSheetLeveldataRow {
            distinct(field: series)
        }
    }
`;
