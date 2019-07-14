import React from "react";
import { graphql } from "gatsby";

import styles from "./backgroundTemplate.module.css";

const BackgroundTemplate: React.FunctionComponent = ({ data }) => {
    const levelData = data.allGoogleSheetLeveldataRow.edges[0].node;
    const imgUrl = data.allFile.edges[0].node.publicURL;

    return (
        <div className={styles.root}>
            <pre>
                {levelData.gameNameUsa} - {levelData.levelName}
            </pre>
            <div className={styles.imageContainer}>
                <div
                    className={styles.blur}
                    style={{ backgroundImage: `url(${imgUrl})` }}
                />
                <img src={imgUrl} />
            </div>
        </div>
    );
};

export const query = graphql`
    query($levelId: Int!, $imageFileName: String!) {
        allGoogleSheetLeveldataRow(filter: { levelId: { eq: $levelId } }) {
            edges {
                node {
                    levelName
                    gameNameUsa
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
