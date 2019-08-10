import React from "react";
import classnames from "classnames";
import { LazyThumbnail } from "./lazyThumbnail";
import { BackgroundLink } from "./backgroundLink";

import styles from "./levelListEntry.module.css";

interface LevelListEntryProps {
    className?: string;
    // TODO type this
    thumbnailData: any;
    linkClassName?: string;
    levelName: string;
    gameNameUsa: string;
}

export const LevelListEntry: React.FunctionComponent<LevelListEntryProps> = ({
    className,
    linkClassName,
    thumbnailData,
    levelName,
    gameNameUsa,
    children,
}) => {
    const classes = classnames(styles.root, className);
    const linkClasses = classnames(styles.backgroundLink, linkClassName);
    return (
        <BackgroundLink className={linkClasses} levelName={levelName} gameNameUsa={gameNameUsa}>
            <div className={classes}>
                <LazyThumbnail thumbnailData={thumbnailData} alt={`${levelName} from ${gameNameUsa}`} />
                <div className={styles.levelName}>{children || levelName}</div>
            </div>
        </BackgroundLink>
    );
};
