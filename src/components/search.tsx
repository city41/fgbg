import React from "react";
import classnames from "classnames";
import { FaSearch } from "react-icons/fa";
import Downshift from "downshift";
import { LevelListEntry } from "./levelListEntry";
import { Level } from "../types";

import styles from "./search.module.css";

interface SearchProps {
    className?: string;
    data: Level[];
}

const LevelResult: React.FunctionComponent<Level> = props => {
    return (
        <div>
            <LevelListEntry className={styles.levelListEntry} {...props}>
                <span className={styles.levelName}>{props.levelName}</span>{" "}
                <span className={styles.restOfText}>
                    from {props.gameNameUsa}, {props.system}
                </span>
            </LevelListEntry>
        </div>
    );
};

export const Search: React.FunctionComponent<SearchProps> = ({ className, data }) => {
    const classes = classnames(styles.root, className);

    function getMatchingLevels(term: string | null): Level[] {
        if (!term) {
            return [];
        }

        term = term.toLowerCase();

        return data.filter(level => {
            term = term || "";
            return (
                level.levelName.toLowerCase().indexOf(term) > -1 ||
                level.gameNameUsa.toLowerCase().indexOf(term) > -1 ||
                level.system.toLowerCase().indexOf(term) > -1 ||
                level.developer.toLowerCase().indexOf(term) > -1 ||
                (level.year && level.year.toString().indexOf(term) > -1) ||
                level.series.indexOf(term) > 1
            );
        });
    }

    return (
        <div className={classes}>
            <noscript>
                <div className={styles.noscriptCantSearch}>search doesn't work without JavaScript enabled</div>
            </noscript>
            <Downshift onChange={item => alert(JSON.stringify(item))}>
                {({ isOpen, getInputProps, inputValue }) => {
                    return (
                        <div className={styles.searchContainer}>
                            <input {...getInputProps()} type="search" placeholder="search for a background..." />
                            <FaSearch className={styles.searchIcon} />
                            <ul className={styles.resultsList}>
                                {isOpen &&
                                    getMatchingLevels(inputValue).map(level => (
                                        <li>
                                            <LevelResult {...level} />
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    );
                }}
            </Downshift>
        </div>
    );
};
