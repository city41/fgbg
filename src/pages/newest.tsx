import React from "react";
import { graphql } from "gatsby";
import { fileRoot } from "../util";
import ListTemplate from "../components/listTemplate";

interface NewestPageProps {
    data: {
        latestLevels: {
            edges: Array<{
                node: {
                    levelId: number;
                    levelName: string;
                    gameNameUsa: string;
                    system: string;
                    developer: string;
                    year: number;
                    series: string;
                    imageFileName: string;
                };
            }>;
        };
        thumbnails: {
            edges: Array<{
                node: {
                    relativePath: string;
                    publicURL: string;
                    childImageSharp: {
                        original: {
                            width: number;
                            height: number;
                        };
                        fixed: {
                            base64: string;
                        };
                    };
                };
            }>;
        };
    };
}

const NewestPage: React.FunctionComponent<NewestPageProps> = ({ data }) => {
    const latestLevels = data.latestLevels.edges.map(e => e.node);
    const thumbnails = data.thumbnails.edges.map(e => e.node);

    const flattenedThumbnails = thumbnails.map(t => {
        return {
            ...t,
            width: t.childImageSharp.original.width,
            height: t.childImageSharp.original.height,
            dataUrl: t.childImageSharp.fixed.base64,
        };
    });

    const latestLevelNodes = latestLevels.map(nl => ({ node: nl }));

    const pageContext = {
        listTypeValue: "the latest",
        thumbnails: flattenedThumbnails.filter(t =>
            latestLevels.some(l => t.relativePath.indexOf(fileRoot(l.imageFileName)) > -1)
        ),
    };

    const listTemplateData = { levels: { edges: latestLevelNodes } };

    return (
        <ListTemplate dontGroup data={listTemplateData} pageContext={pageContext}>
            the 20 most recently added backgrounds
        </ListTemplate>
    );
};

export default NewestPage;

export const query = graphql`
    query NewestPage {
        latestLevels: allGoogleSheetLeveldataRow(sort: { fields: levelId, order: DESC }, limit: 20) {
            edges {
                node {
                    levelId
                    levelName
                    gameNameUsa
                    system
                    developer
                    year
                    series
                    imageFileName
                }
            }
        }
        thumbnails: allFile(filter: { relativePath: { regex: "/bgs/thumb/" } }) {
            edges {
                node {
                    relativePath
                    publicURL
                    childImageSharp {
                        original {
                            width
                            height
                        }
                        fixed(base64Width: 10) {
                            base64
                        }
                    }
                }
            }
        }
    }
`;
