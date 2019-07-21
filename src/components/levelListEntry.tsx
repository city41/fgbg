import React from "react";
import classnames from "classnames";
import LazyLoad from "react-lazy-load";
import { BackgroundLink } from "./backgroundLink";

import styles from "./levelListEntry.module.css";

export const LevelListEntry: React.FunctionComponent = ({
    className,
    thumbnailData,
    levelName,
    gameNameUsa,
    developer,
    system,
    children,
}) => {
    const aspectRatio = thumbnailData.height / thumbnailData.width;
    const classes = classnames(styles.root, className);

    return (
        <BackgroundLink className={styles.backgroundLink} levelName={levelName} gameNameUsa={gameNameUsa}>
            <div className={classes}>
                <div className={styles.imageContainer} style={{ paddingBottom: 200 * aspectRatio }}>
                    <img
                        className={styles.lowRes}
                        src={thumbnailData.dataUrl}
                        alt={`${levelName} from ${gameNameUsa}`}
                    />
                    <noscript>
                        <img
                            className={styles.highRes}
                            src={thumbnailData.publicURL}
                            alt={`${levelName} from ${gameNameUsa}`}
                        />
                    </noscript>
                    <LazyLoad className={styles.lazyImg} offsetBottom={400}>
                        <>
                            <img
                                className={styles.highRes}
                                src={thumbnailData.publicURL}
                                alt={`${levelName} from ${gameNameUsa}`}
                            />
                        </>
                    </LazyLoad>
                </div>
                <div className={styles.levelName}>{children || levelName}</div>
            </div>
        </BackgroundLink>
    );
};
