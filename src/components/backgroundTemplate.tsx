import React from "react";
import { graphql } from "gatsby";
import { Layout } from "./layout";
import { BackgroundHeader } from "./backgroundHeader";
import { BackgroundMetaData } from "./backgroundMetaData";
import { NextBackground } from "./nextBackground";

import styles from "./backgroundTemplate.module.css";

function getImageUrl(edges) {
    const edge = edges.find(e => e.node.relativePath.indexOf("_static.jpg") < 0);

    return edge && edge.node.publicURL;
}

function getStaticImageUrl(edges) {
    const edge = edges.find(e => e.node.relativePath.indexOf("_static.jpg") > -1);

    if (!edge) {
        return getImageUrl(edges);
    }

    return edge.node.publicURL;
}

const BackgroundTemplate: React.FunctionComponent = ({ data }) => {
    const levelData = data.currentLevel;
    const prevLevel = data.prevLevel;
    const nextLevel = data.nextLevel;
    const imgUrl = getImageUrl(data.allFile.edges);
    const staticImgUrl = getStaticImageUrl(data.allFile.edges);

    return (
        <Layout>
            <div className={styles.blur} style={{ backgroundImage: `url(${staticImgUrl})` }} />
            <div className={styles.root}>
                <BackgroundHeader className={styles.header} prevLevel={prevLevel} nextLevel={nextLevel} />
                <div className={styles.imageContainer}>
                    <img src={imgUrl} />
                    <div className={styles.metaDataContainer}>
                        <BackgroundMetaData className={styles.metaData} {...levelData} />
                    </div>
                </div>
                {nextLevel && <NextBackground className={styles.nextBackground} {...nextLevel} />}
            </div>
        </Layout>
    );
};

export const query = graphql`
    query($levelId: Int!, $prevLevelId: Int!, $nextLevelId: Int!, $imageFileNameRegex: String!) {
        currentLevel: googleSheetLeveldataRow(levelId: { eq: $levelId }) {
            levelName
            gameNameUsa
            system
            year
        }
        prevLevel: googleSheetLeveldataRow(levelId: { eq: $prevLevelId }) {
            levelName
            gameNameUsa
        }
        nextLevel: googleSheetLeveldataRow(levelId: { eq: $nextLevelId }) {
            levelName
            gameNameUsa
        }
        allFile(filter: { relativePath: { regex: $imageFileNameRegex } }) {
            edges {
                node {
                    publicURL
                    relativePath
                }
            }
        }
    }
`;

export default BackgroundTemplate;
