import React, { useState } from "react";
import classnames from "classnames";

import styles from "./correctionForm.module.css";

const Required: React.FunctionComponent = () => {
    return <span className={styles.requiredAsterisk}>*</span>;
};

interface NewBackgroundFormProps {
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
    submissionType: "entry.1271839613",
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

const useNewBackgroundForm = (currentPathname: string) => {
    const [inputs, setInputs] = useState({ siteUrl: currentPathname, submissionType: "new" });
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
    const keys = Object.keys(inputs).filter(k => k !== "siteUrl" && k !== "submissionType");

    return keys.length === Object.keys(mapToGoogle).length - 2 && keys.every(k => inputs[k] && inputs[k].trim());
}

export const NewBackgroundForm: React.FunctionComponent<NewBackgroundFormProps> = ({
    className,
    imageUrl,
    onClose,
}) => {
    const { handleInputChange, handleSubmit, inputs, hasSubmitted }: any = useNewBackgroundForm(
        window.location.pathname
    );

    const classes = classnames(styles.root, className);

    const nonSubmittedHeader = (
        <div>
            <h3>Add a New Background</h3>
            <div>
                We are looking for backgrounds from the game's original platform. For example a Street Fighter 2
                background should be of the CPS1 version and not say the Super Nintendo version
            </div>
            <div className={styles.allRequired}>all fields are required</div>
        </div>
    );

    const submittedHeader = (
        <div className={styles.submittedHeader}>
            <h3>Thanks!</h3>
            <div>Thanks for improving the site! We will add the new background ASAP!</div>
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
                <div className={styles.header}>{hasSubmitted ? submittedHeader : nonSubmittedHeader}</div>
                {!hasSubmitted && (
                    <div className={styles.inputGrid}>
                        <label htmlFor="gameName">
                            game name
                            <Required />
                        </label>
                        <input
                            readOnly={hasSubmitted}
                            type="text"
                            name="gameName"
                            value={inputs.gameName}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="levelName">
                            level name
                            <Required />
                        </label>
                        <input
                            readOnly={hasSubmitted}
                            type="text"
                            name="levelName"
                            value={inputs.levelName}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="developer">
                            developer
                            <Required />
                        </label>
                        <input
                            readOnly={hasSubmitted}
                            type="text"
                            name="developer"
                            value={inputs.developer}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="system">
                            system
                            <Required />
                        </label>
                        <input
                            readOnly={hasSubmitted}
                            type="text"
                            name="system"
                            value={inputs.system}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="year">
                            year released
                            <Required />
                        </label>
                        <input
                            readOnly={hasSubmitted}
                            type="text"
                            name="year"
                            value={inputs.year}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="series">
                            series
                            <Required />
                        </label>
                        <input
                            readOnly={hasSubmitted}
                            type="text"
                            name="series"
                            value={inputs.series}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="image">
                            URL of level image
                            <Required />
                        </label>
                        <input
                            readOnly={hasSubmitted}
                            type="text"
                            name="url"
                            value={inputs.url}
                            onChange={handleInputChange}
                        />
                        <div className={styles.sorryURL}>
                            sorry, we can't handle image uploads (yet). If you have the image on your computer, you can
                            upload it to <a href="https://imgur.com">imgur</a>
                        </div>
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
