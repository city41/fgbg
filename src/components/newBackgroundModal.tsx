import React from "react";
import classnames from "classnames";
import Modal from "react-modal";
import { NewBackgroundForm } from "./newBackgroundForm";

import styles from "./correctionModal.module.css";

interface NewBackgroundModalProps {
    className?: string;
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewBackgroundModal: React.FunctionComponent<NewBackgroundModalProps> = ({
    className,
    isOpen,
    onRequestClose,
}) => {
    const classes = classnames(styles.root, className);

    return (
        <Modal className={classes} isOpen={isOpen} onRequestClose={onRequestClose}>
            <NewBackgroundForm onClose={onRequestClose} />
        </Modal>
    );
};
