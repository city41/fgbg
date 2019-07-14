import React from "react";
import { Link } from "gatsby";
import logoSvg from "../images/logo.svg";

import styles from "./layout.module.css";

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
