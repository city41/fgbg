import React from "react";
import { graphql } from "gatsby";
import { IdentifyEntry } from "../components/identifyEntry";
import { IdentifyBackgroundsPageQuery } from "../graphqlTypes";
import { Layout } from "../components/layout";
import SEO from "../components/seo";

import styles from "./identify-backgrounds.module.css";

interface IdentifyBackgroundsPageProps {
    data: IdentifyBackgroundsPageQuery;
}

const IdentifyBackgroundsPage: React.FunctionComponent<IdentifyBackgroundsPageProps> = ({ data }) => {
    const twitterImg = data.twitterImg.edges[0].node.childImageSharp.fixed.src;

    const identityDatas = data.unknowns.edges.map(e => {
        const originalName = e.node.childImageSharp.fixed.originalName;
        const unknownId = originalName.replace("_static.jpg", "");

        return {
            unknownId,
            thumbnailData: {
                dataUrl: e.node.childImageSharp.dataUrl.base64,
                publicURL: e.node.childImageSharp.fixed.src,
                width: e.node.childImageSharp.original.width,
                height: e.node.childImageSharp.original.height,
            },
            fullImageUrl: data.unknownGifs.edges.find(e => e.node.publicURL.indexOf(unknownId) > -1).node.publicURL,
        };
    });

    return (
        <>
            <SEO
                title="Unknown backgrounds | FGBG"
                description="help identify these unknown backgrounds from fighting games"
                imageUrl={twitterImg}
            />
            <Layout logoClassName={styles.logo}>
                <div className={styles.root}>
                    <p className={styles.intro}>
                        Do you know what games these {data.unknowns.totalCount} backgrounds are from? Let us know!
                    </p>
                    <div className={styles.identityEntriesContainer}>
                        {identityDatas.map(identityData => (
                            <IdentifyEntry
                                className={styles.identityEntry}
                                key={identityData.unknownId}
                                unknownId={identityData.unknownId}
                                thumbnailData={identityData.thumbnailData}
                                fullImageUrl={identityData.fullImageUrl}
                            />
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default IdentifyBackgroundsPage;

export const query = graphql`
    query IdentifyBackgroundsPage {
        unknowns: allFile(filter: { relativePath: { regex: "/bgs/unknown/static/" } }) {
            totalCount
            edges {
                node {
                    relativePath
                    publicURL
                    childImageSharp {
                        original {
                            width
                            height
                        }
                        fixed(height: 200) {
                            src
                            originalName
                        }
                        dataUrl: fixed(base64Width: 10) {
                            base64
                        }
                    }
                }
            }
        }
        unknownGifs: allFile(filter: { relativePath: { regex: "/bgs/unknown/full/" } }) {
            edges {
                node {
                    publicURL
                }
            }
        }
        twitterImg: allFile(filter: { relativePath: { regex: "/bgs/static/kof99_park1/" } }) {
            edges {
                node {
                    childImageSharp {
                        fixed(height: 200) {
                            src
                        }
                    }
                }
            }
        }
    }
`;
