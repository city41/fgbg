import React, { useEffect, useState } from "react";
import classnames from "classnames";

import styles from "./levelImage.module.css";

interface LevelImageProps {
    className?: string;
    width: string;
    height: string;
    src: string;
}

export const LevelImage: React.FunctionComponent<LevelImageProps> = ({ className, width, height, src }) => {
    const classes = classnames(styles.root, className);

    const [dimensions, setDimensions] = useState<null | { width: number; height: number }>(null);
    const [loading, setLoading] = useState(true);
    const [hadError, setHadError] = useState(false);

    useEffect(() => {
        const actualImageWidth = parseInt(width);
        const actualImageHeight = parseInt(height);
        const imageAspectRatio = actualImageHeight / actualImageWidth;

        const windowWidth = window.innerWidth;

        const imageWidth = windowWidth < 401 ? Math.floor(windowWidth * 0.96) : Math.floor(windowWidth * 0.75);
        const imageHeight = Math.floor(imageWidth * imageAspectRatio);

        setDimensions({ width: imageWidth, height: imageHeight });
    });

    if (!dimensions) {
        return null;
    }

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
                    <img {...dimensions} src={src} />
                </>
            )}
        </div>
    );
};
