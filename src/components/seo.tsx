/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
    description?: string;
    lang?: string;
    meta?: any[];
    title: string;
    imageUrl?: string;
}

const SEO: React.FunctionComponent<SEOProps> = ({ description = "", lang = "en", meta = [], title, imageUrl }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    const fullMeta = [
        {
            name: `description`,
            content: metaDescription,
        },
        {
            property: `og:title`,
            content: title,
        },
        {
            property: `og:description`,
            content: metaDescription,
        },
        {
            property: `og:type`,
            content: `website`,
        },
        {
            name: `twitter:card`,
            content: imageUrl ? "summary_large_image" : "summary",
        },
        {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
        },
        {
            name: `twitter:title`,
            content: title,
        },
        {
            name: `twitter:description`,
            content: metaDescription,
        },
        {
            name: `twitter:site`,
            content: "@mattegreer",
        },
    ].concat(meta);

    if (imageUrl) {
        const fullImageUrl = `https://www.fgbg.art${imageUrl}`;

        fullMeta.push(
            {
                name: `twitter:image`,
                content: fullImageUrl,
            },
            {
                property: "og:image",
                content: fullImageUrl,
            }
        );
    }

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={fullMeta}
        />
    );
};

export default SEO;
