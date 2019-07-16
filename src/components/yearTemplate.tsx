import React from "react";
import { graphql } from "gatsby";
import { groupBy } from "lodash";
import { BackgroundLink } from "../components/backgroundLink";
import { Layout } from "./layout";

function byGameName(a: { gameNameUsa: string }, b: { gameNameUsa: string }) {
    return a.gameNameUsa.localeCompare(b.gameNameUsa);
}

const YearTemplate: React.FunctionComponent = ({ data }) => {
    const nodes = data.levels.edges.map(e => e.node).sort(byGameName);

    const grouped = groupBy(nodes, "gameNameUsa");

    const year = nodes[0].year;

    return (
        <Layout>
            <pre>Year: {year}</pre>
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
    query($year: Int!) {
        levels: allGoogleSheetLeveldataRow(filter: { year: { eq: $year } }) {
            edges {
                node {
                    levelName
                    gameNameUsa
                    year
                }
            }
        }
    }
`;

export default YearTemplate;
