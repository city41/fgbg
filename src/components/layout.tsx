import React from "react";
import { Link } from "gatsby";
import logoSvg from "../images/logo.svg";

import styles from "./layout.module.css";

const keyMap = {
    PREV_LEVEL: "ArrowLeft",
    NEXT_LEVEL: "ArrowRight",
};

export const Layout: React.FunctionComponent = ({ children }) => {
    return (
        <>
            {children}
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logoSvg} />
                </Link>
            </div>
        </>
    );
};
