import React from "react";
import classnames from "classnames";

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
                    <td>{system}</td>
                </tr>
                <tr>
                    <td>released</td>
                    <td>{year || "?"}</td>
                </tr>
            </tbody>
        </table>
    );
};
