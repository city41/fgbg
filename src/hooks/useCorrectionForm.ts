import { useState } from "react";

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
    unknownId: "entry.1564011080",
    ripCredit: "entry.116198943",
};

const initialState = Object.keys(mapToGoogle).reduce<Record<string, string>>((building, keyName) => {
    building[keyName] = "";
    return building;
}, {});

const formId = "1FAIpQLScSRFk3nVFwV0obvwZsd6H-oAG7SCXM7FsXZ6cU-YsyiqDzAQ";
const BASE_URL = `https://docs.google.com/forms/d/e/${formId}/formResponse?`;

function getGoogleUrl(inputs: any): string {
    const queryParamArray = Object.keys(inputs).reduce<string[]>((building, inputKey) => {
        const googleKey = mapToGoogle[inputKey as keyof typeof mapToGoogle];
        const value = encodeURIComponent(inputs[inputKey]);

        return building.concat(`${googleKey}=${value}`);
    }, []);

    const queryString = queryParamArray.join("&");

    return BASE_URL + queryString;
}
export const useCorrectionForm = (currentPathname: string | undefined, submissionType: string, initialData = {}) => {
    const [inputs, setInputs] = useState({
        ...initialState,
        ...initialData,
        siteUrl: currentPathname || "unknown",
        submissionType,
    });
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleSubmit = (event: React.MouseEvent<HTMLInputElement>) => {
        if (event) {
            event.preventDefault();
        }

        fetch(getGoogleUrl(inputs), {
            method: "POST",
        });

        setHasSubmitted(true);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
