import React from "react";
import { graphql } from "gatsby";
import { BackgroundHeader } from "./backgroundHeader";
import { BackgroundMetaData } from "./backgroundMetaData";

import styles from "./backgroundTemplate.module.css";

const BackgroundTemplate: React.FunctionComponent = ({ data }) => {
    const levelData = data.allGoogleSheetLeveldataRow.edges[0].node;
    const imgUrl = data.allFile.edges[0].node.publicURL;

    return (
        <>
            <div className={styles.blur} style={{ backgroundImage: `url(${imgUrl})` }} />
            <div className={styles.root}>
                <BackgroundHeader className={styles.header} {...levelData} />
                <div className={styles.imageContainer}>
                    <img src={imgUrl} />
                    <div className={styles.metaDataContainer}>
                        <BackgroundMetaData className={styles.metaData} {...levelData} />
                    </div>
                </div>
            </div>
        </>
    );
};

export const query = graphql`
    query($levelId: Int!, $imageFileName: String!) {
        allGoogleSheetLeveldataRow(filter: { levelId: { eq: $levelId } }) {
            edges {
                node {
                    levelName
                    gameNameUsa
                    system
                    year
                }
            }
        }
        allFile(filter: { relativePath: { eq: $imageFileName } }) {
            edges {
                node {
                    publicURL
                }
            }
        }
    }
`;

export default BackgroundTemplate;
