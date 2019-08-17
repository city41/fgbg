import React from "react";
import classnames from "classnames";
import { useCorrectionForm } from "../hooks/useCorrectionForm";

import styles from "./correctionForm.module.css";

interface CorrectionFormProps {
    className?: string;
    imageUrl?: string;
    onClose: () => void;
}

function hasData(inputs: { [key: string]: string }): boolean {
    const keys = Object.keys(inputs).filter(k => k !== "siteUrl" && k !== "submissionType");

    return keys.some(k => inputs[k] && inputs[k].trim());
}

export const CorrectionForm: React.FunctionComponent<CorrectionFormProps> = ({ className, imageUrl, onClose }) => {
    const { handleInputChange, handleSubmit, inputs, hasSubmitted }: any = useCorrectionForm(
        window.location.pathname,
        "correction"
    );

    const classes = classnames(styles.root, className);

    const nonSubmittedHeader = (
        <div>
            <h3>Found an error?</h3>
            All fields are optional, just fill in whatever needs fixing.
        </div>
    );

    const submittedHeader = (
        <div className={styles.submittedHeader}>
            <h3>Thanks!</h3>
            <div>Thanks for improving the site! We will correct the mistake right away</div>
            <input
                type="submit"
                value="OK"
                onClick={() => {
                    onClose();
                }}
            />
        </div>
    );

    return (
        <div className={classes}>
            <div>
                <div className={styles.header}>
                    <img src={imageUrl} />
                    {hasSubmitted ? submittedHeader : nonSubmittedHeader}
                </div>
                {!hasSubmitted && (
                    <div className={styles.inputGrid}>
                        <label htmlFor="ripCredit">rip credit (name and website)</label>
                        <input
                            readOnly={hasSubmitted}
                            type="text"
                            name="ripCredit"
                            value={inputs.ripCredit}
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
                        <label htmlFor="gameName">game name</label>
                        <input
                            readOnly={hasSubmitted}
                            type="text"
                            name="gameName"
                            value={inputs.gameName}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="developer">developer</label>
                        <input
                            readOnly={hasSubmitted}
                            type="text"
                            name="developer"
                            value={inputs.developer}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="system">system</label>
                        <input
                            readOnly={hasSubmitted}
                            type="text"
                            name="system"
                            value={inputs.system}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="year">year released</label>
                        <input
                            readOnly={hasSubmitted}
                            type="text"
                            name="year"
                            value={inputs.year}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="series">series</label>
                        <input
                            readOnly={hasSubmitted}
                            type="text"
                            name="series"
                            value={inputs.series}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="image">URL of better image</label>
                        <input
                            readOnly={hasSubmitted}
                            type="text"
                            name="url"
                            value={inputs.url}
                            onChange={handleInputChange}
                        />
                        <input
                            disabled={!hasData(inputs)}
                            type="submit"
                            value="submit"
                            onClick={e => {
                                handleSubmit(e);
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
