import React, { useEffect, useState } from "react";

interface Level {
    levelId: number;
    levelName: string;
    gameNameUsa: string;
    system: string;
    developer: string;
    year: string;
    series: string;
    thumbnailData: {
        width: number;
        height: number;
        dataUrl: string;
    };
}

interface NewSinceLastVisitProps {
    levels: Level[];
}

export const NewSinceLastVisit: React.FunctionComponent = ({ levels }) => {
    const [secondRender, setSecondRender] = useState(false);
    useEffect(() => {
        setSecondRender(true);
    }, []);

    if (!secondRender) {
        return null;
    }

    const maxLevelId = Math.max(...levels.map(l => l.levelId));
    const lastMaxLevelId = sessionStorage.lastMaxLevelId || localStorage.lastMaxLevelId;

    localStorage.lastMaxLevelId = maxLevelId;

    if (!sessionStorage.lastMaxLevelId) {
        sessionStorage.lastMaxLevelId = lastMaxLevelId;
    }

    if (!lastMaxLevelId) {
        return null;
    }

    const newLevels = levels.filter(l => l.levelId > lastMaxLevelId);

    if (newLevels.length === 0) {
        return null;
    }

    return <div>{newLevels.length} new levels since your last visit</div>;
};
