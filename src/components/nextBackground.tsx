import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import { backgroundPath } from "../util/backgroundPath";

import styles from "./nextBackground.module.css";

interface NextBackgroundProps {
    className?: string;
    gameNameUsa: string;
    levelName: string;
}

export const NextBackground: React.FunctionComponent<NextBackgroundProps> = ({ className, gameNameUsa, levelName }) => {
    const classes = classnames(styles.root, className);

    return (
        <div className={classes}>
            <Link to={backgroundPath({ gameNameUsa, levelName })}>
                {levelName} from {gameNameUsa} >>>
            </Link>
        </div>
    );
};
