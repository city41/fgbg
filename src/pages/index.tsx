import React from "react";
import { Link, graphql } from "gatsby";
import { Search } from "../components/search";
import { IndexHeader } from "../components/indexHeader";
import { BrowseColumn } from "../components/browseColumn";
import { NewSinceLastVisitLink } from "../components/newSinceLastVisitLink";
import { IndexMenu } from "../components/indexMenu";
import SEO from "../components/seo";
import { fileRoot, seriesPath, developerPath, otherPath, systemPath, yearPath } from "../util";
import { byIgnoreThe } from "../util/sort";
import { IndexPageQuery } from "../graphqlTypes";

import styles from "./index.module.css";

interface IndexPageProps {
    data: IndexPageQuery;
}

const IndexPage: React.FunctionComponent<IndexPageProps> = ({ data }) => {
    const twitterImg = data.twitterImg.edges[0].node.childImageSharp.fixed.src;

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

    const randomThumbnailIndex = Math.floor(Math.random() * thumbnails.length);
    const bgImageUrl = flattenedThumbnails[randomThumbnailIndex].publicURL;

    const totalSearchData = searchData.map(s => {
        const thumbnail = flattenedThumbnails.find(t => t.relativePath.indexOf(fileRoot(s.imageFileName)) > -1);

        if (!thumbnail) {
            throw new Error("Failed to find a thumbnail for: " + s.imageFileName);
        }

        return {
            ...s,
            thumbnailData: thumbnail,
        };
    });

    return (
        <>
            <div className={styles.ukyo} />
            <div className={styles.credit}>
                by <a href="https://twitter.com/mattegreer">@mattegreer</a>
            </div>
            <div className={styles.blur} style={{ backgroundImage: `url(${bgImageUrl})` }} />
            <IndexMenu className={styles.menu} />
            <div className={styles.root}>
                <div className={styles.content}>
                    <SEO title="Fighting Game Backgrounds" imageUrl={twitterImg} />
                    <IndexHeader className={styles.header} />
                    <NewSinceLastVisitLink levels={totalSearchData} />
                    <Search className={styles.search} data={totalSearchData} />
                    <div className={styles.browseNewContainer}>
                        <p>
                            <Link to="/newest">view the newest additions</Link>, or browse {data.searchData.totalCount}{" "}
                            backgrounds by...
                        </p>
                    </div>
                    <div className={styles.browseColumnContainer}>
                        <BrowseColumn
                            title="series"
                            pathFn={seriesPath}
                            values={data.series.distinct.sort(byIgnoreThe)}
                        />
                        <BrowseColumn title="developer" pathFn={developerPath} values={data.developers.distinct} />
                        <BrowseColumn title="system" pathFn={systemPath} values={data.systems.distinct} />
                        <BrowseColumn
                            title="year released"
                            columns={2}
                            pathFn={yearPath}
                            values={data.years.distinct}
                        />
                        <BrowseColumn title="other" pathFn={otherPath} values={["multipart"]} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndexPage;

export const query = graphql`
    query IndexPage {
        searchData: allGoogleSheetLeveldataRow {
            totalCount
            edges {
                node {
                    levelId
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
        twitterImg: allFile(filter: { relativePath: { regex: "/bgs/static/kof99_park1/" } }) {
            edges {
                node {
                    childImageSharp {
                        fixed(height: 300, width: 300) {
                            src
                        }
                    }
                }
            }
        }
    }
`;
