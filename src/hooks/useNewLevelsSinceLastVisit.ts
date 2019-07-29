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
    const lastMaxLevelId = sessionStorage.lastMaxLevelId || localStorage.lastMaxLevelId;

    localStorage.lastMaxLevelId = maxLevelId;

    if (!sessionStorage.lastMaxLevelId) {
        sessionStorage.lastMaxLevelId = lastMaxLevelId;
    }

    if (!lastMaxLevelId) {
        return [];
    }

    return levels.filter(l => l.levelId > lastMaxLevelId);
}
