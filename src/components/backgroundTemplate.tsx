import React from "react";
import { Helmet } from "react-helmet";
import { useHotkeys } from "react-hotkeys-hook";
import { navigate } from "@reach/router";
import { graphql } from "gatsby";
import { Layout } from "./layout";
import { BackgroundHeader } from "./backgroundHeader";
import { BackgroundMetaData } from "./backgroundMetaData";
import { LevelImage } from "./levelImage";
import { backgroundPath } from "../util/backgroundPath";

import styles from "./backgroundTemplate.module.css";

const BackgroundTemplate: React.FunctionComponent = ({ data }) => {
    const levelData = data.currentLevel;
    const prevLevel = data.prevLevel;
    const nextLevel = data.nextLevel;

    useHotkeys("left", () => navigate(backgroundPath(prevLevel)));
    useHotkeys("right", () => navigate(backgroundPath(nextLevel)));

    const imgUrl = data.mainImg.publicURL;
    const bgImageUrl = data.bgImg.childImageSharp.resize.src;

    return (
        <Layout>
            <Helmet>
                <title>
                    {levelData.levelName} from {levelData.gameNameUsa} - FGBG
                </title>
            </Helmet>
            <div className={styles.blur} style={{ backgroundImage: `url(${bgImageUrl})` }} />
            <div className={styles.root}>
                <BackgroundHeader className={styles.header} prevLevel={prevLevel} nextLevel={nextLevel} />
                <div className={styles.imageContainer}>
                    <LevelImage
                        className={styles.levelImage}
                        width={data.dimensions.width}
                        height={data.dimensions.height}
                        src={imgUrl}
                    />
                    <div className={styles.metaDataContainer}>
                        <BackgroundMetaData className={styles.metaData} {...levelData} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query(
        $currentId: String!
        $prevId: String!
        $nextId: String!
        $mainImageRelativePath: String!
        $mainImageRegex: String!
        $bgImageRelativePath: String!
    ) {
        currentLevel: googleSheetLeveldataRow(id: { eq: $currentId }) {
            levelName
            gameNameUsa
            developer
            system
            year
        }
        prevLevel: googleSheetLeveldataRow(id: { eq: $prevId }) {
            levelName
            gameNameUsa
        }
        nextLevel: googleSheetLeveldataRow(id: { eq: $nextId }) {
            levelName
            gameNameUsa
        }
        mainImg: file(relativePath: { eq: $mainImageRelativePath }) {
            publicURL
        }
        bgImg: file(relativePath: { eq: $bgImageRelativePath }) {
            childImageSharp {
                resize(height: 300, quality: 10) {
                    src
                }
            }
        }
        dimensions: bgsizesCsv(file: { regex: $mainImageRegex }) {
            width
            height
        }
    }
`;

export default BackgroundTemplate;
