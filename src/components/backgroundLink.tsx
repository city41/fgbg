import React from "react";
import { Link } from "gatsby";
import { backgroundPath } from "../util/backgroundPath";

interface BackgroundLinkProps {
    levelName: string;
    gameNameUsa: string;
    newPage?: boolean;
}

export const BackgroundLink: React.FunctionComponent<BackgroundLinkProps> = ({
    levelName,
    gameNameUsa,
    newPage,
    children,
}) => {
    const entryPath = backgroundPath({ gameNameUsa, levelName });

    children = children || `${gameNameUsa} - ${levelName}`;

    if (newPage) {
        return (
            <a href={entryPath} target="_blank">
                {children}
            </a>
        );
    } else {
        return <Link to={entryPath}>{children}</Link>;
    }
};
