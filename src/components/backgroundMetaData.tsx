import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import { systemPath } from "../util/systemPath";
import { yearPath } from "../util/yearPath";
import { gamePath } from "../util/gamePath";
import { developerPath } from "../util/developerPath";

import styles from "./backgroundMetaData.module.css";

interface BackgroundMetaDataProps {
    className?: string;
    levelName: string;
    gameNameUsa: string;
    system: string;
    year?: string;
}

export const BackgroundMetaData: React.FunctionComponent<BackgroundMetaDataProps> = ({
    className,
    levelName,
    gameNameUsa,
    developer,
    system,
    year,
}) => {
    const classes = classnames(styles.root, className);

    return (
        <table className={classes}>
            <tbody>
                <tr className={styles.levelNameRow}>
                    <td colSpan={2}>{levelName}</td>
                </tr>
                <tr>
                    <td>game</td>
                    <td>
                        <Link to={gamePath(gameNameUsa)}>{gameNameUsa}</Link>
                    </td>
                </tr>
                <tr>
                    <td>developer</td>
                    <td>
                        <Link to={developerPath(developer)}>{developer}</Link>
                    </td>
                </tr>
                <tr>
                    <td>system</td>
                    <td>
                        <Link to={systemPath(system)}>{system}</Link>
                    </td>
                </tr>
                <tr>
                    <td>released</td>
                    <td>
                        <Link to={yearPath(year)}>{year || "?"}</Link>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
