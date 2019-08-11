import { useState, useEffect } from "react";

export function useHasJavaScript() {
    const [hasJS, setHasJS] = useState(false);

    useEffect(() => {
        setHasJS(true);
    }, []);

    return hasJS;
}
