import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import { systemPath } from "../util/systemPath";
import { yearPath } from "../util/yearPath";

import styles from "./backgroundMetaData.module.css";

interface BackgroundMetaDataProps {
    className?: string;
    system: string;
    year?: string;
}

export const BackgroundMetaData: React.FunctionComponent<BackgroundMetaDataProps> = ({ className, system, year }) => {
    const classes = classnames(styles.root, className);

    return (
        <table className={classes}>
            <tbody>
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
