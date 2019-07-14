import React from "react";
import { graphql } from "gatsby";
import { BackgroundLink } from "../components/backgroundLink";
import { Layout } from "./layout";

const GameTemplate: React.FunctionComponent = ({ data }) => {
    const nodes = data.allGoogleSheetLeveldataRow.edges.map(e => e.node);
    const gameName = nodes[0].gameNameUsa;

    return (
        <Layout>
            <pre>{gameName}</pre>
            <ul>
                {nodes.map(n => (
                    <li key={n.levelName}>
                        <BackgroundLink {...n}>{n.levelName}</BackgroundLink>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export const query = graphql`
    query($gameName: String!) {
        allGoogleSheetLeveldataRow(filter: { gameNameUsa: { eq: $gameName } }) {
            edges {
                node {
                    levelName
                    gameNameUsa
                }
            }
        }
    }
`;

export default GameTemplate;
