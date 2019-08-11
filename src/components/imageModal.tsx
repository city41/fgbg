import React from "react";
import classnames from "classnames";
import Modal from "react-modal";
import { LevelImage } from "./levelImage";

import styles from "./imageModal.module.css";

interface ImageModalProps {
    className?: string;
    src: string;
    width: number;
    height: number;
    alt: string;
    isOpen: boolean;
    onRequestClose: () => void;
}

export const ImageModal: React.FunctionComponent<ImageModalProps> = ({
    className,
    src,
    width,
    height,
    alt,
    isOpen,
    onRequestClose,
}) => {
    const classes = classnames(styles.root, className);

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <div className={classes}>
                <LevelImage width={width} height={height} src={src} alt={alt} />
                <img src={src} alt={alt} />
            </div>
        </Modal>
    );
};
