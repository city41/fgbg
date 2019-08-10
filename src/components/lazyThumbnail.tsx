import React from "react";
import classnames from "classnames";
import LazyLoad from "react-lazy-load";

import styles from "./lazyThumbnail.module.css";

interface LazyThumbnailProps {
    className?: string;
    width?: number;
    thumbnailData: {
        dataUrl: string;
        publicURL: string;
        width: number;
        height: number;
    };
    alt?: string;
}

export const LazyThumbnail: React.FunctionComponent<LazyThumbnailProps> = ({
    className,
    width = 200,
    thumbnailData,
    alt,
}) => {
    const aspectRatio = thumbnailData.height / thumbnailData.width;
    const classes = classnames(styles.root, className);

    return (
        <div className={classes} style={{ width, paddingBottom: width * aspectRatio }}>
            <img className={styles.lowRes} src={thumbnailData.dataUrl} alt={alt} />
            <noscript>
                <img className={styles.highRes} src={thumbnailData.publicURL} alt={alt} />
            </noscript>
            <LazyLoad className={styles.lazyImg} offsetBottom={400}>
                <>
                    <img className={styles.highRes} src={thumbnailData.publicURL} alt={alt} />
                </>
            </LazyLoad>
        </div>
    );
};
