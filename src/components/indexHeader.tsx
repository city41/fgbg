import React from "react";
import classnames from "classnames";

import styles from "./indexHeader.module.css";

interface IndexHeaderProps {
    className?: string;
}

export const IndexHeader: React.FunctionComponent<IndexHeaderProps> = ({ className }) => {
    const rootClasses = classnames(styles.root, className);
    const fgtClasses = classnames(styles.titleText, styles.fightingGameText);
    const bgtClasses = classnames(styles.titleText, styles.backgroundsText);

    return (
        <div className={rootClasses}>
            <div className={styles.logo} />
            <div className={fgtClasses}>fighting game</div>
            <div className={bgtClasses}>backgrounds</div>
        </div>
    );
};
