import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import { backgroundPath } from "../util/backgroundPath";

import styles from "./backgroundHeader.module.css";

interface BackgroundHeaderProps {
    className?: string;
    prevLevel: {
        gameNameUsa: string;
        levelName: string;
    };
    nextLevel: {
        gameNameUsa: string;
        levelName: string;
    };
}

export const BackgroundHeader: React.FunctionComponent<BackgroundHeaderProps> = ({
    className,
    prevLevel,
    nextLevel,
}) => {
    const classes = classnames(styles.root, className);

    return (
        <header className={classes}>
            <div>
                <Link to={backgroundPath(prevLevel)}>
                    &lt; {prevLevel.levelName} from {prevLevel.gameNameUsa}
                </Link>
            </div>
            <div>
                <Link to={backgroundPath(nextLevel)}>
                    {nextLevel.levelName} from {nextLevel.gameNameUsa} &gt;
                </Link>
            </div>
        </header>
    );
};
