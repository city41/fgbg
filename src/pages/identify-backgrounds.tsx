import React from "react";
import { graphql } from "gatsby";

const IdentifyBackgroundsPage: React.FunctionComponent = ({ data }) => {
    return (
        <div>
            {data.unknowns.edges.map(e => (
                <div>
                    <img src={e.node.childImageSharp.fixed.src} />
                </div>
            ))}
        </div>
    );
};

export default IdentifyBackgroundsPage;

export const query = graphql`
    query {
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
                        }
                    }
                }
            }
        }
    }
`;
