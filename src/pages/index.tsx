import React from "react";
import { Link, graphql } from "gatsby";
import { Search } from "../components/search";
import { IndexHeader } from "../components/indexHeader";
import SEO from "../components/seo";
import { seriesPath, developerPath, systemPath, yearPath } from "../util";

import styles from "./index.module.css";

const BrowseColumn: React.FunctionComponent = props => {
    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                {props.values.map(v => (
                    <li key={v}>
                        <Link to={props.pathFn(v)}>{v}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const IndexPage: React.FunctionComponent = ({ data }) => {
    const searchData = data.searchData.edges.map(e => e.node);

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <SEO title="Fighting Game Backgrounds" />
                <IndexHeader />
                <Search className={styles.search} data={searchData} />
                <h2>Browse {data.searchData.totalCount} backgrounds by</h2>
                <div className={styles.browseColumnContainer}>
                    <BrowseColumn title="Series" pathFn={seriesPath} values={data.series.distinct} />
                    <BrowseColumn title="Developer" pathFn={developerPath} values={data.developers.distinct} />
                    <BrowseColumn title="System" pathFn={systemPath} values={data.systems.distinct} />
                    <BrowseColumn title="Year Released" pathFn={yearPath} values={data.years.distinct} />
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
