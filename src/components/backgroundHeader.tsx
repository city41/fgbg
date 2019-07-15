import React from "react";
import { Link } from "gatsby";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import classnames from "classnames";
import { backgroundPath } from "../util/backgroundPath";

import styles from "./backgroundHeader.module.css";

interface BackgroundHeaderProps {
    className?: string;
    prevLevel: {
        gameNameUsa: string;
        levelName: string;
    };
    nextLevel: {
        gameNameUsa: string;
        levelName: string;
    };
}

export const BackgroundHeader: React.FunctionComponent<BackgroundHeaderProps> = ({
    className,
    prevLevel,
    nextLevel,
}) => {
    const classes = classnames(styles.root, className);

    return (
        <header className={classes}>
            <div className={styles.prevLevelContainer}>
                <Link to={backgroundPath(prevLevel)}>
                    <FaChevronLeft />
                    <span className={styles.levelName}>{prevLevel.levelName}</span> from {prevLevel.gameNameUsa}
                </Link>
            </div>
            <div className={styles.nextLevelContainer}>
                <Link to={backgroundPath(nextLevel)}>
                    <span className={styles.levelName}>{nextLevel.levelName}</span> from {nextLevel.gameNameUsa}{" "}
                    <FaChevronRight />
                </Link>
            </div>
        </header>
    );
};
