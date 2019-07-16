import React from "react";
import { Link, graphql } from "gatsby";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Layout } from "../components/layout";
import SEO from "../components/seo";
import { seriesPath, developerPath, systemPath, yearPath } from "../util";

import "react-tabs/style/react-tabs.css";

import styles from "./index.module.css";

interface BasicLevelData {
    levelName: string;
    gameNameUsa: string;
}

interface IndexPageProps {
    data: {
        allGoogleSheetLeveldataRow: {
            totalCount: number;
            edges: Array<{
                node: BasicLevelData;
            }>;
        };
    };
}

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

const IndexPage: React.FunctionComponent<IndexPageProps> = ({ data }) => {
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
                    <h2>Browse by</h2>
                    <div className={styles.browseColumnContainer}>
                        <BrowseColumn title="Series" pathFn={seriesPath} values={data.series.distinct} />
                        <BrowseColumn title="Developer" pathFn={developerPath} values={data.developers.distinct} />
                        <BrowseColumn title="System" pathFn={systemPath} values={data.systems.distinct} />
                        <BrowseColumn title="Year Released" pathFn={yearPath} values={data.years.distinct} />
                    </div>
                </TabPanel>
                <TabPanel>Search...</TabPanel>
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
