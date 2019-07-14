import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";

import styles from "./backgroundHeader.module.css";

interface BackgroundHeaderProps {
    className?: string;
    levelName: string;
}

export const BackgroundHeader: React.FunctionComponent<BackgroundHeaderProps> = ({
    className,
    levelName,
    gameNameUsa,
}) => {
    const classes = classnames(styles.root, className);

    return <header className={classes}>{levelName}</header>;
};
