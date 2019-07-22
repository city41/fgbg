import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import logoSvg from "../images/logo.svg";

import styles from "./layout.module.css";

interface LayoutProps {
    logoClassName?: string;
}

export const Layout: React.FunctionComponent = ({ logoClassName, children }) => {
    const logoClasses = classnames(styles.logo, logoClassName);
    return (
        <>
            <Link to="/">
                <div className={logoClasses} />
            </Link>
            {children}
        </>
    );
};
