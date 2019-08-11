import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import SEO from "./seo";
import { FaCompress, FaExpand } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useHotkeys } from "react-hotkeys-hook";
import { navigate } from "@reach/router";
import { graphql } from "gatsby";
import { Layout } from "./layout";
import { BackgroundHeader } from "./backgroundHeader";
import { BackgroundLabels } from "./backgroundLabels";
import { BackgroundMetaData } from "./backgroundMetaData";
import { LevelImage } from "./levelImage";
import { backgroundPath } from "../util/backgroundPath";
import { CorrectionModal } from "./correctionModal";
import { BackgroundTemplateQuery } from "../graphqlTypes";
import { useHasJavaScript } from "../hooks/useHasJavaScript";

import styles from "./backgroundTemplate.module.css";

interface BackgroundTemplateProps {
    data: BackgroundTemplateQuery;
    pageContext: {
        currentLabel?: string;
        labels?: string[];
        fullscreen?: boolean;
    };
}

const BackgroundTemplate: React.FunctionComponent<BackgroundTemplateProps> = ({
    data,
    pageContext: { currentLabel, labels, fullscreen },
}) => {
    const hasJS = useHasJavaScript();
    const [correctionModalOpen, setCorrectionModalOpen] = useState(false);

    const levelData = data.currentLevel!;
    const prevLevel = data.prevLevel!;
    const nextLevel = data.nextLevel!;

    useHotkeys("left", () => navigate(backgroundPath(prevLevel, undefined, fullscreen)));
    useHotkeys("right", () => navigate(backgroundPath(nextLevel, undefined, fullscreen)));
    useHotkeys("esc", () => navigate(backgroundPath(levelData, currentLabel, false)));

    const imgUrl = data.mainImg && data.mainImg.publicURL;
    const bgImageUrl = data.bgImg && data.bgImg.childImageSharp.resize.src;
    const twitterImageUrl = data.twitterImg.childImageSharp.resize.src;

    const levelDescription = `${levelData.levelName} from ${levelData.gameNameUsa}`;

    let body;

    const hideOnFirstRender = { visibility: hasJS ? "visible" : "hidden" } as const;

    if (fullscreen) {
        body = (
            <>
                <div className={styles.fullscreenTitle}>
                    {levelData.levelName}, {levelData.gameNameUsa}
                </div>
                <LevelImage
                    className={styles.fullscreenLevelImage}
                    width={data.dimensions.width}
                    height={data.dimensions.height}
                    src={imgUrl}
                    alt={levelDescription}
                />
                <div className={styles.levelImageFooter}>
                    {!!labels && !!currentLabel && (
                        <BackgroundLabels {...levelData} labels={labels} currentLabel={currentLabel} fullscreen />
                    )}
                    <Link
                        className={styles.fullscreenLink}
                        title="leave fullscreen"
                        to={backgroundPath(levelData, currentLabel, false)}
                    >
                        <FaCompress style={hideOnFirstRender} />
                    </Link>
                </div>
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
                        <div className={styles.correctionLink} style={hideOnFirstRender}>
                            <a onClick={() => setCorrectionModalOpen(true)}>submit a correction</a>
                        </div>
                        <LevelImage
                            className={styles.levelImage}
                            width={data.dimensions.width}
                            height={data.dimensions.height}
                            src={imgUrl}
                            alt={levelDescription}
                        />
                        <div className={styles.levelImageFooter}>
                            {!!labels && !!currentLabel && (
                                <BackgroundLabels {...levelData} labels={labels} currentLabel={currentLabel} />
                            )}
                            <Link
                                className={styles.fullscreenLink}
                                title="fullscreen"
                                to={backgroundPath(levelData, currentLabel, true)}
                            >
                                <FaExpand style={hideOnFirstRender} />
                            </Link>
                        </div>
                        <div className={styles.metaDataContainer}>
                            <BackgroundMetaData className={styles.metaData} {...levelData} label={currentLabel} />
                        </div>
                    </div>
                </div>
                <BackgroundHeader className={styles.header} nextLevel={nextLevel} />
            </Layout>
        );
    }

    return (
        <>
            <Helmet>
                <title>{levelDescription} - FGBG</title>
            </Helmet>
            <SEO title={levelDescription} description="fighting game backgrounds website" imageUrl={twitterImageUrl} />
            {body}
        </>
    );
};

export const query = graphql`
    query BackgroundTemplate(
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
        twitterImg: file(relativePath: { eq: $bgImageRelativePath }) {
            childImageSharp {
                resize(height: 300) {
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
