import React, { useEffect, useState } from "react";
import classnames from "classnames";

import styles from "./levelImage.module.css";

interface LevelImageProps {
    className?: string;
    width: string;
    height: string;
    src: string;
    alt: string;
}

export const LevelImage: React.FunctionComponent<LevelImageProps> = ({ className, width, height, src, alt }) => {
    const classes = classnames(styles.root, className);

    const [loading, setLoading] = useState(false);
    const [hadError, setHadError] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    const actualImageWidth = parseInt(width);
    const actualImageHeight = parseInt(height);
    const imageAspectRatio = actualImageHeight / actualImageWidth;

    const imageWidth = windowWidth < 401 ? Math.floor(windowWidth * 0.96) : Math.floor(windowWidth * 0.75);
    const imageHeight = Math.floor(imageWidth * imageAspectRatio);

    const dimensions = { width: imageWidth, height: imageHeight };

    useEffect(() => {
        function onWindowResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", onWindowResize);

        return () => window.removeEventListener("resize", onWindowResize);
    });

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    return (
        <div className={classes} style={dimensions}>
            {hadError ? (
                <>
                    <div className={styles.errorContainer}>an error occurred, try reloading the page</div>
                    <img />
                </>
            ) : loading ? (
                <>
                    <div className={styles.loadingContainer}>loading&hellip;</div>
                    <img
                        width="1"
                        height="1"
                        src={src}
                        onLoad={() => setLoading(false)}
                        onError={() => setHadError(true)}
                    />
                </>
            ) : (
                <>
                    <div />
                    <img {...dimensions} src={src} alt={alt} />
                </>
            )}
        </div>
    );
};
