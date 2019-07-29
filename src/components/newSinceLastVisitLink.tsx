import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import { FaBell } from "react-icons/fa";
import { LevelListEntry } from "./levelListEntry";
import { Level } from "../types";
import { useNewLevelsSinceLastVisit } from "../hooks/useNewLevelsSinceLastVisit";

import styles from "./newSinceLastVisit.module.css";

interface NewSinceLastVisitLinkProps {
    levels: Level[];
}

export const NewSinceLastVisitLink: React.FunctionComponent = ({ levels }) => {
    const newLevels = useNewLevelsSinceLastVisit(levels);

    const rootClasses = classnames(styles.root, {
        [styles.noLevels]: newLevels.length === 0,
    });

    return (
        <Link className={rootClasses} to="/new">
            <FaBell />
            {newLevels.length} new levels since your last visit
        </Link>
    );
};
