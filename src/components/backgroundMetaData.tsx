import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import { systemPath, yearPath, gamePath, developerPath, seriesPath } from "../util";

import styles from "./backgroundMetaData.module.css";

interface BackgroundMetaDataProps {
    className?: string;
    levelName: string;
    label?: string;
    gameNameUsa: string;
    developer: string;
    system: string;
    year: number;
    series: string;
}

export const BackgroundMetaData: React.FunctionComponent<BackgroundMetaDataProps> = ({
    className,
    levelName,
    label,
    gameNameUsa,
    developer,
    system,
    year,
    series,
}) => {
    const classes = classnames(styles.root, className);

    return (
        <table className={classes}>
            <tbody>
                <tr className={styles.levelNameRow}>
                    <td colSpan={2}>
                        {levelName}
                        {label && ` - ${label}`}
                    </td>
                </tr>
                <tr>
                    <td>game</td>
                    <td>
                        <Link to={gamePath(gameNameUsa)}>{gameNameUsa}</Link>
                    </td>
                </tr>
                <tr>
                    <td>series</td>
                    <td>
                        <Link to={seriesPath(series)}>{series}</Link>
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
