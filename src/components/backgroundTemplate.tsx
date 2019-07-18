import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useHotkeys } from "react-hotkeys-hook";
import { navigate } from "@reach/router";
import { graphql } from "gatsby";
import { Layout } from "./layout";
import { BackgroundHeader } from "./backgroundHeader";
import { BackgroundMetaData } from "./backgroundMetaData";
import { backgroundPath } from "../util/backgroundPath";

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

    useHotkeys("left", () => navigate(backgroundPath(prevLevel)));
    useHotkeys("right", () => navigate(backgroundPath(nextLevel)));

    const [dimensions, setDimensions] = useState<null | { imageWidth: number; imageHeight: number }>(null);

    useEffect(() => {
        const actualImageWidth = parseInt(data.dimensions.width);
        const actualImageHeight = parseInt(data.dimensions.height);
        const imageAspectRatio = actualImageHeight / actualImageWidth;

        const windowWidth = window.innerWidth;

        const imageWidth =
            windowWidth < 401
                ? Math.min(Math.floor(windowWidth * 0.96), actualImageWidth)
                : Math.min(Math.floor(windowWidth * 0.75), actualImageWidth);

        const imageHeight = Math.floor(imageWidth * imageAspectRatio);

        setDimensions({ imageWidth, imageHeight });
    });

    return (
        <Layout>
            <Helmet>
                <title>
                    {levelData.levelName} from {levelData.gameNameUsa} - FGBG
                </title>
            </Helmet>
            <div className={styles.blur} style={{ backgroundImage: `url(${staticImgUrl})` }} />
            <div className={styles.root}>
                <BackgroundHeader className={styles.header} prevLevel={prevLevel} nextLevel={nextLevel} />
                <div className={styles.imageContainer}>
                    {dimensions ? (
                        <img width={dimensions.imageWidth} height={dimensions.imageHeight} src={imgUrl} />
                    ) : (
                        <img src={imgUrl} />
                    )}
                    <div className={styles.metaDataContainer}>
                        <BackgroundMetaData className={styles.metaData} {...levelData} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query($currentId: String!, $prevId: String!, $nextId: String!, $imageFileNameRegex: String!) {
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
        allFile(filter: { relativePath: { regex: $imageFileNameRegex } }) {
            edges {
                node {
                    publicURL
                    relativePath
                }
            }
        }
        dimensions: bgsizesCsv(file: { regex: $imageFileNameRegex }) {
            width
            height
        }
    }
`;

export default BackgroundTemplate;
