import React from "react";
import { graphql } from "gatsby";
import { groupBy } from "lodash";
import { BackgroundLink } from "../components/backgroundLink";
import { Layout } from "./layout";

function byGameName(a: { gameNameUsa: string }, b: { gameNameUsa: string }) {
    return a.gameNameUsa.localeCompare(b.gameNameUsa);
}

const SystemTemplate: React.FunctionComponent = ({ data }) => {
    const nodes = data.allGoogleSheetLeveldataRow.edges.map(e => e.node).sort(byGameName);

    const grouped = groupBy(nodes, "gameNameUsa");

    const systemName = nodes[0].system;

    return (
        <Layout>
            <pre>{systemName}</pre>
            <ul>
                {Object.keys(grouped).map(gameName => (
                    <>
                        <h3>{gameName}</h3>
                        <ul>
                            {grouped[gameName].map(l => (
                                <li key={l.levelName}>
                                    <BackgroundLink {...l}>{l.levelName}</BackgroundLink>
                                </li>
                            ))}
                        </ul>
                    </>
                ))}
            </ul>
        </Layout>
    );
};

export const query = graphql`
    query($system: String!) {
        allGoogleSheetLeveldataRow(filter: { system: { eq: $system } }) {
            edges {
                node {
                    levelName
                    gameNameUsa
                    system
                }
            }
        }
    }
`;

export default SystemTemplate;
