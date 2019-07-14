import React from "react";
import { graphql } from "gatsby";

const BackgroundTemplate: React.FunctionComponent = ({ data }) => {
    const levelData = data.allGoogleSheetLeveldataRow.edges[0].node;
    const imgUrl = data.allFile.edges[0].node.publicURL;

    return (
        <div>
            <pre>
                {levelData.gameNameUsa} - {levelData.levelName}
            </pre>
            <div>
                <img src={imgUrl} />
            </div>
        </div>
    );
};

export const query = graphql`
    query($levelId: Int!, $imageFileName: String!) {
        allGoogleSheetLeveldataRow(filter: { levelId: { eq: $levelId } }) {
            edges {
                node {
                    levelName
                    gameNameUsa
                }
            }
        }
        allFile(filter: { relativePath: { eq: $imageFileName } }) {
            edges {
                node {
                    publicURL
                }
            }
        }
    }
`;

export default BackgroundTemplate;
