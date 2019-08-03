import React from "react";
import { Link } from "gatsby";
import { backgroundPath } from "../util";

import styles from "./backgroundLabels.module.css";

interface BackgroundLabelsProps {
    className?: string;
    gameNameUsa: string;
    levelName: string;
    labels: string[];
    currentLabel: string;
    fullscreen?: boolean;
}

export const BackgroundLabels: React.FunctionComponent<BackgroundLabelsProps> = ({
    className,
    gameNameUsa,
    levelName,
    labels,
    currentLabel,
    fullscreen,
}) => {
    return (
        <ul className={styles.root}>
            {labels.map(label => {
                let body;
                if (label === currentLabel) {
                    body = <div className={styles.currentLabel}>{label}</div>;
                } else {
                    body = <Link to={backgroundPath({ gameNameUsa, levelName }, label, fullscreen)}>{label}</Link>;
                }

                return <li key={label}>{body}</li>;
            })}
        </ul>
    );
};
