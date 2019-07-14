import React from "react";
import classnames from "classnames";

import styles from "./backgroundHeader.module.css";

interface BackgroundHeaderProps {
    className?: string;
    levelName: string;
    gameNameUsa: string;
}

export const BackgroundHeader: React.FunctionComponent<BackgroundHeaderProps> = ({
    className,
    levelName,
    gameNameUsa,
}) => {
    const classes = classnames(styles.root, className);

    return (
        <header className={classes}>
            <div className={styles.levelName}>{levelName}</div>
            <div className={styles.gameName}>{gameNameUsa}</div>
        </header>
    );
};
