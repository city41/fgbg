import React from "react";
import { Link } from "gatsby";
import { bgpath } from "../util/bgpath";

interface BackgroundLinkProps {
    levelName: string;
    gameNameUsa: string;
}

export const BackgroundLink: React.FunctionComponent<BackgroundLinkProps> = ({
    levelName,
    gameNameUsa,
    children,
}) => {
    const entryPath = bgpath({ gameNameUsa, levelName });

    children = children || `${gameNameUsa} - ${levelName}`;

    return <Link to={entryPath}>{children}</Link>;
};
