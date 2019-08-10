import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";

import styles from "./indexMenu.module.css";

interface IndexMenuProps {
    className?: string;
}

export const IndexMenu: React.FunctionComponent<IndexMenuProps> = ({ className }) => {
    const classes = classnames(className, styles.root);

    return (
        <div className={classes}>
            <ul>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/identify-backgrounds">help us!</Link>
                </li>
            </ul>
        </div>
    );
};
