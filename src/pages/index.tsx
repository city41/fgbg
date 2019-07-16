import React from "react";
import { Link, graphql } from "gatsby";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Layout } from "../components/layout";
import { Search } from "../components/search";
import SEO from "../components/seo";
import { seriesPath, developerPath, systemPath, yearPath } from "../util";

import "react-tabs/style/react-tabs.css";

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
        <Layout>
            <SEO title="Fighting Game Backgrounds" />
            <h1>FGBG</h1>
            <Tabs>
                <TabList>
                    <Tab>Browse</Tab>
                    <Tab>Search</Tab>
                </TabList>
                <TabPanel>
                    <h2>Browse {data.searchData.totalCount} backgrounds by</h2>
                    <div className={styles.browseColumnContainer}>
                        <BrowseColumn title="Series" pathFn={seriesPath} values={data.series.distinct} />
                        <BrowseColumn title="Developer" pathFn={developerPath} values={data.developers.distinct} />
                        <BrowseColumn title="System" pathFn={systemPath} values={data.systems.distinct} />
                        <BrowseColumn title="Year Released" pathFn={yearPath} values={data.years.distinct} />
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Search</h2>
                    <Search data={searchData} />
                </TabPanel>
            </Tabs>
        </Layout>
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
