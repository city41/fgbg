import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { FaBell } from "react-icons/fa";
import { LevelListEntry } from "./levelListEntry";

import styles from "./newSinceLastVisit.module.css";

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

function useNewLevelsSinceLastRender(levels) {
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

export const NewSinceLastVisit: React.FunctionComponent = ({ levels }) => {
    const [open, setOpen] = useState(false);
    const newLevels = useNewLevelsSinceLastRender(levels);

    let body;

    if (open && newLevels.length > 0) {
        body = newLevels.map((l, i) => (
            <div key={i}>
                <LevelListEntry className={styles.levelListEntry} {...l}>
                    <span className={styles.levelName}>{l.levelName}</span>{" "}
                    <span className={styles.restOfText}>
                        from {l.gameNameUsa}, {l.system}
                    </span>
                </LevelListEntry>
            </div>
        ));
    } else {
        body = (
            <span>
                <FaBell />
                {newLevels.length} new levels since your last visit
            </span>
        );
    }

    const rootClasses = classnames(styles.root, {
        [styles.noLevels]: newLevels.length === 0,
    });

    return (
        <div className={rootClasses} onClick={() => setOpen(true)}>
            {body}
        </div>
    );
};
