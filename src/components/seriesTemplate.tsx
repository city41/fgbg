import React from "react";
import { graphql } from "gatsby";
import { groupBy } from "lodash";
import { BackgroundLink } from "../components/backgroundLink";
import { Layout } from "./layout";

function byGameName(a: { gameNameUsa: string }, b: { gameNameUsa: string }) {
    return a.gameNameUsa.localeCompare(b.gameNameUsa);
}

const SeriesTemplate: React.FunctionComponent = ({ data }) => {
    const nodes = data.levels.edges.map(e => e.node).sort(byGameName);

    const grouped = groupBy(nodes, "gameNameUsa");

    const seriesName = nodes[0].series;

    return (
        <Layout>
            <pre>Series: {seriesName}</pre>
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
    query($series: String!) {
        levels: allGoogleSheetLeveldataRow(filter: { series: { eq: $series } }) {
            edges {
                node {
                    levelName
                    gameNameUsa
                    system
                    series
                }
            }
        }
    }
`;

export default SeriesTemplate;
