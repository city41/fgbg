import React from "react";
import classnames from "classnames";

import styles from "./levelImage.module.css";

interface LevelImageProps {
    className?: string;
    width: string;
    height: string;
    src: string;
    alt: string;
}

export const LevelImage: React.FunctionComponent<LevelImageProps> = ({
    className,
    width,
    height,
    src,
    alt,
    children,
}) => {
    const classes = classnames(styles.root, className);

    const actualImageWidth = parseInt(width);
    const actualImageHeight = parseInt(height);
    const imageAspectRatio = actualImageHeight / actualImageWidth;
    const paddingTop = `${Math.floor(imageAspectRatio * 100)}%`;

    return (
        <div className={classes} style={{ paddingTop }}>
            <img src={src} alt={alt} />
            {children}
        </div>
    );
};
