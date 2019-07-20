import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import { backgroundPath } from "../util/backgroundPath";

import styles from "./backgroundLink.module.css";

interface BackgroundLinkProps {
    className?: string;
    levelName: string;
    gameNameUsa: string;
    newPage?: boolean;
}

export const BackgroundLink: React.FunctionComponent<BackgroundLinkProps> = ({
    className,
    levelName,
    gameNameUsa,
    newPage,
    children,
}) => {
    const classes = classnames(styles.root, className);

    const entryPath = backgroundPath({ gameNameUsa, levelName });

    children = children || `${gameNameUsa} - ${levelName}`;

    if (newPage) {
        return (
            <a className={classes} href={entryPath} target="_blank">
                {children}
            </a>
        );
    } else {
        return (
            <Link className={classes} to={entryPath}>
                {children}
            </Link>
        );
    }
};
