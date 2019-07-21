import React from "react";
import { graphql } from "gatsby";
import { Search } from "../components/search";
import { IndexHeader } from "../components/indexHeader";
import { BrowseColumn } from "../components/browseColumn";
import SEO from "../components/seo";
import { fileRoot, seriesPath, developerPath, systemPath, yearPath } from "../util";
import { byIgnoreThe } from "../util/sort";

import styles from "./index.module.css";

const IndexPage: React.FunctionComponent = ({ data }) => {
    const searchData = data.searchData.edges.map(e => e.node);
    const thumbnails = data.thumbnails.edges.map(e => e.node);
    const flattenedThumbnails = thumbnails.map(t => {
        return {
            ...t,
            width: t.childImageSharp.original.width,
            height: t.childImageSharp.original.height,
            dataUrl: t.childImageSharp.fixed.base64,
        };
    });

    const totalSearchData = searchData.map(s => {
        const thumbnail = flattenedThumbnails.find(t => t.relativePath.indexOf(fileRoot(s.imageFileName)) > -1);

        return {
            ...s,
            thumbnailData: thumbnail,
        };
    });

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <SEO title="Fighting Game Backgrounds" />
                <IndexHeader className={styles.header} />
                <Search className={styles.search} data={totalSearchData} />
                <p>or browse {data.searchData.totalCount} backgrounds by...</p>
                <div className={styles.browseColumnContainer}>
                    <BrowseColumn title="series" pathFn={seriesPath} values={data.series.distinct.sort(byIgnoreThe)} />
                    <BrowseColumn title="developer" pathFn={developerPath} values={data.developers.distinct} />
                    <BrowseColumn title="system" pathFn={systemPath} values={data.systems.distinct} />
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
                    imageFileName
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
        thumbnails: allFile(filter: { relativePath: { regex: "/bgs/thumb/" } }) {
            edges {
                node {
                    relativePath
                    publicURL
                    childImageSharp {
                        original {
                            width
                            height
                        }
                        fixed(base64Width: 10) {
                            base64
                        }
                    }
                }
            }
        }
    }
`;
