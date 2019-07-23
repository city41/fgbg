import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/layout";
import SEO from "../components/seo";

import styles from "./404.module.css";

const NotFoundPage: React.FunctionComponent = () => (
    <Layout>
        <div className={styles.root}>
            <SEO title="404: Not found" />
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <Link to="/">head to the home page and try again</Link>
        </div>
    </Layout>
);

export default NotFoundPage;
