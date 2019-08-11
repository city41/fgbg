import React from "react";
import { graphql } from "gatsby";
import { fileRoot } from "../util";
import { useNewLevelsSinceLastVisit } from "../hooks/useNewLevelsSinceLastVisit";
import ListTemplate from "../components/listTemplate";
import { NewPageQuery } from "../graphqlTypes";

interface NewPageProps {
    data: NewPageQuery;
}

const NewPage: React.FunctionComponent<NewPageProps> = ({ data }) => {
    const allLevels = data.newLevelData.edges.map(e => e.node);
    const thumbnails = data.thumbnails.edges.map(e => e.node);

    const flattenedThumbnails = thumbnails.map(t => {
        return {
            ...t,
            width: t.childImageSharp.original.width,
            height: t.childImageSharp.original.height,
            dataUrl: t.childImageSharp.fixed.base64,
        };
    });

    const newLevels = useNewLevelsSinceLastVisit(allLevels);

    const newLevelNodes = newLevels.map(nl => ({ node: nl }));

    const pageContext = {
        listTypeValue: "new backgrounds",
        thumbnails: flattenedThumbnails.filter(t =>
            newLevels.some(l => t.relativePath && t.relativePath.indexOf(fileRoot(l.imageFileName)) > -1)
        ),
    };

    const listTemplateData = { levels: { edges: newLevelNodes } };

    return <ListTemplate data={listTemplateData} pageContext={pageContext} />;
};

export default NewPage;

export const query = graphql`
    query NewPage {
        newLevelData: allGoogleSheetLeveldataRow {
            totalCount
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
