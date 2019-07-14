import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import { systemPath } from "../util/systemPath";
import { yearPath } from "../util/yearPath";
import { gamePath } from "../util/gamePath";

import styles from "./backgroundMetaData.module.css";

interface BackgroundMetaDataProps {
    className?: string;
    gameNameUsa: string;
    system: string;
    year?: string;
}

export const BackgroundMetaData: React.FunctionComponent<BackgroundMetaDataProps> = ({
    className,
    gameNameUsa,
    system,
    year,
}) => {
    const classes = classnames(styles.root, className);

    return (
        <table className={classes}>
            <tbody>
                <tr>
                    <td>game</td>
                    <td>
                        <Link to={gamePath(gameNameUsa)}>{gameNameUsa}</Link>
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
