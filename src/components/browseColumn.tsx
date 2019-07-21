import React from "react";
import { Link } from "gatsby";

import styles from "./browseColumn.module.css";

export const BrowseColumn: React.FunctionComponent = props => {
    return (
        <div className={styles.root}>
            <h3>{props.title}</h3>
            <ul>
                {props.values.map(v => (
                    <li key={v}>
                        <Link to={props.pathFn(v)}>{v}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
