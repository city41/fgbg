import { useState, useEffect } from "react";

export function useNewLevelsSinceLastVisit(levels) {
    const [secondRender, setSecondRender] = useState(false);

    useEffect(() => {
        setSecondRender(true);
    }, []);

    if (!secondRender) {
        return [];
    }

    const maxLevelId = Math.max(...levels.map(l => l.levelId));

    // this feature was added around level id 162
    const lastMaxLevelId =
        (!isNaN(sessionStorage.lastMaxLevelId) && sessionStorage.lastMaxLevelId) ||
        localStorage.lastMaxLevelId ||
        maxLevelId;

    localStorage.lastMaxLevelId = lastMaxLevelId;

    if (isNaN(sessionStorage.lastMaxLevelId)) {
        sessionStorage.lastMaxLevelId = lastMaxLevelId;
    }

    if (!lastMaxLevelId) {
        return [];
    }

    return levels.filter(l => l.levelId > lastMaxLevelId);
}
