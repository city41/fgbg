import React from "react";
import { graphql } from "gatsby";
import { IdentifyEntry } from "../components/identifyEntry";
import { IdentifyBackgroundsPageQuery } from "../graphqlTypes";

interface IdentifyBackgroundsPageProps {
    data: IdentifyBackgroundsPageQuery;
}

const IdentifyBackgroundsPage: React.FunctionComponent<IdentifyBackgroundsPageProps> = ({ data }) => {
    const identityDatas = data.unknowns.edges.map(e => {
        return {
            unknownId: e.node.childImageSharp.fixed.originalName,
            thumbnailData: {
                dataUrl: e.node.childImageSharp.dataUrl.base64,
                publicURL: e.node.childImageSharp.fixed.src,
                width: e.node.childImageSharp.original.width,
                height: e.node.childImageSharp.original.height,
            },
        };
    });

    return (
        <div>
            {identityDatas.map(identityData => (
                <IdentifyEntry
                    key={identityData.unknownId}
                    unknownId={identityData.unknownId}
                    thumbnailData={identityData.thumbnailData}
                />
            ))}
        </div>
    );
};

export default IdentifyBackgroundsPage;

export const query = graphql`
    query IdentifyBackgroundsPage {
        unknowns: allFile(filter: { relativePath: { regex: "/bgs/unknown/static/" } }) {
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
    }
`;
