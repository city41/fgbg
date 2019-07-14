import React from "react";
import { Link } from "gatsby";
import { backgroundPath } from "../util/backgroundPath";

interface BackgroundLinkProps {
    levelName: string;
    gameNameUsa: string;
}

export const BackgroundLink: React.FunctionComponent<BackgroundLinkProps> = ({ levelName, gameNameUsa, children }) => {
    const entryPath = backgroundPath({ gameNameUsa, levelName });

    children = children || `${gameNameUsa} - ${levelName}`;

    return <Link to={entryPath}>{children}</Link>;
};
