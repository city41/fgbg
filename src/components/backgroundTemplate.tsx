import React from "react";
import { graphql } from "gatsby";
import { Layout } from "./layout";
import { BackgroundHeader } from "./backgroundHeader";
import { BackgroundMetaData } from "./backgroundMetaData";

import styles from "./backgroundTemplate.module.css";

function getImageUrl(edges) {
    const edge = edges.find(e => e.node.relativePath.indexOf("_static.jpg") < 0);

    return edge.node.publicURL;
}

function getStaticImageUrl(edges) {
    const edge = edges.find(e => e.node.relativePath.indexOf("_static.jpg") > -1);

    if (!edge) {
        return getImageUrl(edges);
    }

    return edge.node.publicURL;
}

const BackgroundTemplate: React.FunctionComponent = ({ data }) => {
    const levelData = data.allGoogleSheetLeveldataRow.edges[0].node;
    const imgUrl = getImageUrl(data.allFile.edges);
    const staticImgUrl = getStaticImageUrl(data.allFile.edges);

    return (
        <Layout>
            <div className={styles.blur} style={{ backgroundImage: `url(${staticImgUrl})` }} />
            <div className={styles.root}>
                <BackgroundHeader className={styles.header} {...levelData} />
                <div className={styles.imageContainer}>
                    <img src={imgUrl} />
                    <div className={styles.metaDataContainer}>
                        <BackgroundMetaData className={styles.metaData} {...levelData} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query($levelId: Int!, $imageFileNameRegex: String!) {
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
