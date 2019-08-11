import React from "react";
import { Link } from "gatsby";
import { FaChevronRight } from "react-icons/fa";
import classnames from "classnames";
import { backgroundPath } from "../util/backgroundPath";

import styles from "./backgroundHeader.module.css";

interface BackgroundHeaderProps {
    className?: string;
    nextLevel: {
        gameNameUsa: string;
        levelName: string;
    };
}

export const BackgroundHeader: React.FunctionComponent<BackgroundHeaderProps> = ({ className, nextLevel }) => {
    const classes = classnames(styles.root, className);

    return (
        <header className={classes}>
            <div className={styles.nextLevelContainer}>
                <Link to={backgroundPath(nextLevel)}>
                    next up, <span className={styles.levelName}>{nextLevel.levelName}</span> from{" "}
                    {nextLevel.gameNameUsa} <FaChevronRight />
                </Link>
            </div>
        </header>
    );
};
