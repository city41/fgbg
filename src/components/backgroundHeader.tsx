import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import { gamePath } from "../util/gamePath";

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
            <div className={styles.gameName}>
                <Link to={gamePath(gameNameUsa)}>{gameNameUsa}</Link>
            </div>
        </header>
    );
};
