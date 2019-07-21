import React from "react";
import classnames from "classnames";
import Modal from "react-modal";
import { CorrectionForm } from "./correctionForm";

import styles from "./correctionModal.module.css";

interface CorrectionModalProps {
    className?: string;
    imageUrl?: string;
    isOpen: boolean;
    onRequestClose: () => void;
}

export const CorrectionModal: React.FunctionComponent<CorrectionModalProps> = ({
    className,
    imageUrl,
    isOpen,
    onRequestClose,
}) => {
    const classes = classnames(styles.root, className);

    return (
        <Modal className={classes} isOpen={isOpen} onRequestClose={onRequestClose}>
            <CorrectionForm imageUrl={imageUrl} onClose={onRequestClose} />
        </Modal>
    );
};
