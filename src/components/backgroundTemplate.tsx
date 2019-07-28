import React, { useEffect, useState } from "react";
import { FaExpand } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useHotkeys } from "react-hotkeys-hook";
import { navigate } from "@reach/router";
import { graphql } from "gatsby";
import { Layout } from "./layout";
import { BackgroundHeader } from "./backgroundHeader";
import { BackgroundMetaData } from "./backgroundMetaData";
import { LevelImage } from "./levelImage";
import { backgroundPath } from "../util/backgroundPath";
import { CorrectionModal } from "./correctionModal";

import styles from "./backgroundTemplate.module.css";

const BackgroundTemplate: React.FunctionComponent = ({ data }) => {
    const [jsSecondRender, setJsSecondRender] = useState(false);
    const [correctionModalOpen, setCorrectionModalOpen] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);

    useEffect(() => {
        setJsSecondRender(true);
    }, []);

    const levelData = data.currentLevel;
    const prevLevel = data.prevLevel;
    const nextLevel = data.nextLevel;

    useHotkeys("left", () => navigate(backgroundPath(prevLevel)));
    useHotkeys("right", () => navigate(backgroundPath(nextLevel)));
    useHotkeys("esc", () => setFullscreen(false));

    const imgUrl = data.mainImg.publicURL;
    const bgImageUrl = data.bgImg.childImageSharp.resize.src;

    const levelDescription = `${levelData.levelName} from ${levelData.gameNameUsa}`;

    let body;

    if (fullscreen) {
        body = (
            <>
                <a className={styles.exitFullscreen} onClick={() => setFullscreen(false)}>
                    exit fullscreen
                </a>
                <LevelImage
                    className={styles.fullscreenLevelImage}
                    width={data.dimensions.width}
                    height={data.dimensions.height}
                    src={imgUrl}
                    alt={levelDescription}
                />
            </>
        );
    } else {
        body = (
            <Layout>
                <CorrectionModal
                    imageUrl={bgImageUrl}
                    isOpen={correctionModalOpen}
                    onRequestClose={() => setCorrectionModalOpen(false)}
                />
                <div className={styles.blur} style={{ backgroundImage: `url(${bgImageUrl})` }} />
                <div className={styles.root}>
                    <div className={styles.imageContainer}>
                        <LevelImage
                            className={styles.levelImage}
                            width={data.dimensions.width}
                            height={data.dimensions.height}
                            src={imgUrl}
                            alt={levelDescription}
                        />
                        {jsSecondRender && (
                            <div className={styles.levelImageFooter}>
                                <div className={styles.correctionLink}>
                                    <a onClick={() => setCorrectionModalOpen(true)}>submit a correction</a>
                                </div>
                                <a
                                    className={styles.enterFullscreen}
                                    title="fullscreen"
                                    onClick={() => setFullscreen(true)}
                                >
                                    <FaExpand />
                                </a>
                            </div>
                        )}
                        <div className={styles.metaDataContainer}>
                            <BackgroundMetaData className={styles.metaData} {...levelData} />
                        </div>
                    </div>
                </div>
                <BackgroundHeader className={styles.header} prevLevel={prevLevel} nextLevel={nextLevel} />
            </Layout>
        );
    }

    return (
        <>
            <Helmet>
                <title>{levelDescription} - FGBG</title>
            </Helmet>
            {body}
        </>
    );
};

export const query = graphql`
    query(
        $currentId: Int!
        $prevId: Int!
        $nextId: Int!
        $mainImageRelativePath: String!
        $mainImageRegex: String!
        $bgImageRelativePath: String!
    ) {
        currentLevel: googleSheetLeveldataRow(levelId: { eq: $currentId }) {
            levelName
            gameNameUsa
            developer
            system
            year
            series
        }
        prevLevel: googleSheetLeveldataRow(levelId: { eq: $prevId }) {
            levelName
            gameNameUsa
        }
        nextLevel: googleSheetLeveldataRow(levelId: { eq: $nextId }) {
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
