import { useState, useEffect } from "react";

export interface Level {
    levelId: number | null | undefined;
    levelName: string;
    gameNameUsa: string;
    system: string;
    developer: string;
    year: number;
    series: string;
    imageFileName: string;
}

export function useNewLevelsSinceLastVisit(levels: Level[]) {
    const [secondRender, setSecondRender] = useState(false);

    useEffect(() => {
        setSecondRender(true);
    }, []);

    if (!secondRender) {
        return [];
    }

    const maxLevelId = Math.max(...levels.map(l => l.levelId || 0));

    // this feature was added around level id 162
    const lastMaxLevelId =
        (!isNaN(sessionStorage.lastMaxLevelId) && sessionStorage.lastMaxLevelId) ||
        localStorage.lastMaxLevelId ||
        maxLevelId;

    localStorage.lastMaxLevelId = maxLevelId;

    if (isNaN(sessionStorage.lastMaxLevelId)) {
        sessionStorage.lastMaxLevelId = lastMaxLevelId;
    }

    if (!lastMaxLevelId) {
        return [];
    }

    return levels.filter(l => l.levelId && l.levelId > lastMaxLevelId);
}
