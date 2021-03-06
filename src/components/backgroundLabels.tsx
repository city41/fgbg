import React from "react";
import classnames from "classnames";
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
    const classes = classnames(styles.root, className);

    return (
        <ul className={classes}>
            {labels.map(label => {
                let body;

                const isCurrentLabel = label === currentLabel;

                if (isCurrentLabel) {
                    body = <div className={styles.currentLabel}>{label}</div>;
                } else {
                    body = <Link to={backgroundPath({ gameNameUsa, levelName }, label, fullscreen)}>{label}</Link>;
                }

                return (
                    <li className={isCurrentLabel && styles.liCurrentLabel} key={label}>
                        {body}
                    </li>
                );
            })}
        </ul>
    );
};
