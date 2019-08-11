import React from "react";
import classnames from "classnames";
import { FaSmileBeam } from "react-icons/fa";
import { LazyThumbnail } from "./lazyThumbnail";
import { useCorrectionForm } from "../hooks/useCorrectionForm";

import styles from "./identifyEntry.module.css";

interface IdentifyEntryProps {
    className?: string;
    thumbnailData: {
        dataUrl: string;
        publicURL: string;
        width: number;
        height: number;
    };
    unknownId: string;
}

export const IdentifyEntry: React.FunctionComponent<IdentifyEntryProps> = ({ className, thumbnailData, unknownId }) => {
    const { handleInputChange, handleSubmit, inputs, hasSubmitted }: any = useCorrectionForm(
        typeof window !== "undefined" ? window.location.pathname : undefined,
        "identification",
        { unknownId }
    );

    const classes = classnames(styles.root, className);

    let form;

    if (hasSubmitted) {
        form = (
            <div className={styles.thankYou}>
                thank you! <FaSmileBeam />
            </div>
        );
    } else {
        form = (
            <div className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="gameName">game name</label>
                    <input
                        readOnly={hasSubmitted}
                        type="text"
                        name="gameName"
                        value={inputs.gameName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="levelName">level name</label>
                    <input
                        readOnly={hasSubmitted}
                        type="text"
                        name="levelName"
                        value={inputs.levelName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="submit"
                        value="submit"
                        onClick={e => {
                            handleSubmit(e);
                        }}
                    />
                </div>
            </div>
        );
    }

    return (
        <>
            <div className={classes}>
                <LazyThumbnail
                    className={styles.thumbnail}
                    thumbnailData={thumbnailData}
                    width={400}
                    alt="unknown fighting game background"
                />
                {form}
            </div>
        </>
    );
};
