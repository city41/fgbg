import React from "react";
import classnames from "classnames";
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
        window.location.pathname,
        "identification",
        { unknownId }
    );

    const classes = classnames(styles.root, className);

    return (
        <div className={classes}>
            <LazyThumbnail thumbnailData={thumbnailData} width={400} alt="unknown fighting game background" />
            <div className={styles.form}>
                <label htmlFor="gameName">game name</label>
                <input
                    readOnly={hasSubmitted}
                    type="text"
                    name="gameName"
                    value={inputs.gameName}
                    onChange={handleInputChange}
                />
                <label htmlFor="levelName">level name</label>
                <input
                    readOnly={hasSubmitted}
                    type="text"
                    name="levelName"
                    value={inputs.levelName}
                    onChange={handleInputChange}
                />
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
};
