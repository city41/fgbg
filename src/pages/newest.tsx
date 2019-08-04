import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import { fileRoot } from "../util";
import { LevelListEntry } from "../components/levelListEntry";
import ListTemplate from "../components/listTemplate";

const NewestPage: React.FunctionComponent = ({ data }) => {
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

    const randomThumbnailIndex = Math.floor(Math.random() * thumbnails.length);
    const bgImageUrl = flattenedThumbnails[randomThumbnailIndex].publicURL;

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
            the 10 most recently added backgrounds
        </ListTemplate>
    );
};

export default NewestPage;

export const query = graphql`
    query MyQuery {
        latestLevels: allGoogleSheetLeveldataRow(sort: { fields: levelId, order: DESC }, limit: 10) {
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
