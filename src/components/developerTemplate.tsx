import React from "react";
import { graphql } from "gatsby";
import { groupBy } from "lodash";
import { BackgroundLink } from "../components/backgroundLink";
import { Layout } from "./layout";

function byGameName(a: { gameNameUsa: string }, b: { gameNameUsa: string }) {
    return a.gameNameUsa.localeCompare(b.gameNameUsa);
}

const DeveloperTemplate: React.FunctionComponent = ({ data }) => {
    const nodes = data.levels.edges.map(e => e.node).sort(byGameName);

    const grouped = groupBy(nodes, "gameNameUsa");

    const developerName = nodes[0].developer;

    return (
        <Layout>
            <pre>Developer: {developerName}</pre>
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
    query($developer: String!) {
        levels: allGoogleSheetLeveldataRow(filter: { developer: { eq: $developer } }) {
            edges {
                node {
                    levelName
                    gameNameUsa
                    system
                    developer
                }
            }
        }
    }
`;

export default DeveloperTemplate;
