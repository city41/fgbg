import React, { useState } from "react";
import classnames from "classnames";

import styles from "./correctionForm.module.css";

interface CorrectionFormProps {
    className?: string;
    imageUrl?: string;
    onClose: () => void;
}

const mapToGoogle = {
    levelName: "entry.1758812684",
    gameName: "entry.1658808931",
    system: "entry.2024056467",
    developer: "entry.726710484",
    year: "entry.906557948",
    series: "entry.1788056905",
    url: "entry.89449791",
    siteUrl: "entry.36955456",
};

const formId = "1FAIpQLScSRFk3nVFwV0obvwZsd6H-oAG7SCXM7FsXZ6cU-YsyiqDzAQ";
const BASE_URL = `https://docs.google.com/forms/d/e/${formId}/formResponse?`;

function getGoogleUrl(inputs: any): string {
    const queryParamArray = Object.keys(inputs).reduce((building, inputKey) => {
        const googleKey = mapToGoogle[inputKey];
        const value = encodeURIComponent(inputs[inputKey]);

        return building.concat(`${googleKey}=${value}`);
    }, []);

    const queryString = queryParamArray.join("&");

    return BASE_URL + queryString;
}

const useCorrectionForm = (currentPathname: string) => {
    const [inputs, setInputs] = useState({ siteUrl: currentPathname });
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleSubmit = event => {
        if (event) {
            event.preventDefault();
        }

        fetch(getGoogleUrl(inputs), {
            method: "POST",
        });

        setHasSubmitted(true);
    };

    const handleInputChange = event => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    };

    return {
        handleSubmit,
        handleInputChange,
        inputs,
        hasSubmitted,
    };
};

function hasData(inputs: { [key: string]: string }): boolean {
    const keys = Object.keys(inputs).filter(k => k !== "siteUrl");

    return keys.some(k => inputs[k] && inputs[k].trim());
}

export const CorrectionForm: React.FunctionComponent<CorrectionFormProps> = ({ className, imageUrl, onClose }) => {
    const { handleInputChange, handleSubmit, inputs, hasSubmitted }: any = useCorrectionForm(window.location.pathname);

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
                onClick={e => {
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
