import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";

import styles from "./browseColumn.module.css";

interface BrowseColumnProps {
    className?: string;
    title: string;
    columns?: number;
    values: string[];
    pathFn: (value: any) => string;
}

export const BrowseColumn: React.FunctionComponent<BrowseColumnProps> = ({
    className,
    title,
    columns,
    values,
    pathFn,
}) => {
    const classes = classnames(styles.root, className);

    return (
        <div className={classes}>
            <h3>{title}</h3>
            <ul style={{ columns: columns || 1 }}>
                {values.map(v => (
                    <li key={v}>
                        <Link to={pathFn(v)}>{v}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
