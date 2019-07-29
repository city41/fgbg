import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import { fileRoot } from "../util";
import { useNewLevelsSinceLastVisit } from "../hooks/useNewLevelsSinceLastVisit";
import { LevelListEntry } from "../components/levelListEntry";
import ListTemplate from "../components/listTemplate";

const NewPage: React.FunctionComponent = ({ data }) => {
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

    const randomThumbnailIndex = Math.floor(Math.random() * thumbnails.length);
    const bgImageUrl = flattenedThumbnails[randomThumbnailIndex].publicURL;

    const newLevels = useNewLevelsSinceLastVisit(allLevels);

    const newLevelNodes = newLevels.map(nl => ({ node: nl }));

    const pageContext = {
        listTypeValue: "new arrivals",
        thumbnails: flattenedThumbnails.filter(t =>
            newLevels.some(l => t.relativePath.indexOf(fileRoot(l.imageFileName)) > -1)
        ),
    };

    const listTemplateData = { levels: { edges: newLevelNodes } };

    return <ListTemplate data={listTemplateData} pageContext={pageContext} />;
};

export default NewPage;

export const query = graphql`
    query {
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
