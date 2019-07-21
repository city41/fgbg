import React, { useEffect, useState } from "react";
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
    const [showSubmitCorrection, setShowSubmitCorrection] = useState(false);
    const [correctionModalOpen, setCorrectionModalOpen] = useState(false);

    useEffect(() => {
        setShowSubmitCorrection(true);
    }, []);

    const levelData = data.currentLevel;
    const prevLevel = data.prevLevel;
    const nextLevel = data.nextLevel;

    useHotkeys("left", () => navigate(backgroundPath(prevLevel)));
    useHotkeys("right", () => navigate(backgroundPath(nextLevel)));

    const imgUrl = data.mainImg.publicURL;
    const bgImageUrl = data.bgImg.childImageSharp.resize.src;

    const levelDescription = `${levelData.levelName} from ${levelData.gameNameUsa}`;

    return (
        <>
            <CorrectionModal
                imageUrl={bgImageUrl}
                isOpen={correctionModalOpen}
                onRequestClose={() => setCorrectionModalOpen(false)}
            />
            <Layout>
                <Helmet>
                    <title>{levelDescription} - FGBG</title>
                </Helmet>
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
                        <div className={styles.metaDataContainer}>
                            {showSubmitCorrection && (
                                <div className={styles.correctionLink}>
                                    <a onClick={() => setCorrectionModalOpen(true)}>submit a correction</a>
                                </div>
                            )}
                            <BackgroundMetaData className={styles.metaData} {...levelData} />
                        </div>
                    </div>
                </div>
                <BackgroundHeader className={styles.header} prevLevel={prevLevel} nextLevel={nextLevel} />
            </Layout>
        </>
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
            series
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
