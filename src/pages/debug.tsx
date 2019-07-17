import React from "react";
import { Link, graphql } from "gatsby";
import { BackgroundLink } from "../components/backgroundLink";
import { Layout } from "../components/layout";
import Image from "../components/image";
import { groupBy } from "lodash";
import { slug } from "../util/slug";

interface Node {
    id: string;
    levelName: string;
    gameNameUsa: string;
}

interface NeighborNode {
    id: string;
}

interface Edge {
    node: Node;
    next: NeighborNode;
    previous: NeighborNode;
}

interface IndexPageProps {
    data: {
        allGoogleSheetLeveldataRow: {
            totalCount: number;
            edges: Edge[];
        };
    };
}

function checkCycle(edges: Edge[], neighbor: "next" | "previous"): string {
    const seenIds: { [uuid: string]: number } = {};

    edges.forEach(e => {
        if (!e[neighbor]) return;

        const count = seenIds[e[neighbor].id] || 0;
        seenIds[e[neighbor].id] = count + 1;
    });

    return `${neighbor} -- count: ${Object.keys(seenIds).length}\n ${JSON.stringify(seenIds, null, 2)}`;
}

const IndexPage: React.FunctionComponent<IndexPageProps> = ({ data }) => {
    const nodes = data.allGoogleSheetLeveldataRow.edges.map(e => e.node);
    const bySystem = groupBy(nodes, "system");

    return (
        <Layout>
            <pre>FGBG ({data.allGoogleSheetLeveldataRow.totalCount} backgrounds)</pre>
            <pre>{checkCycle(data.allGoogleSheetLeveldataRow.edges, "next")}</pre>
            <pre>{checkCycle(data.allGoogleSheetLeveldataRow.edges, "previous")}</pre>
            {Object.keys(bySystem)
                .sort()
                .map(systemName => {
                    const byGame = groupBy(bySystem[systemName], "gameNameUsa");

                    return (
                        <>
                            <Link to={slug(systemName)}>
                                <h2>{systemName}</h2>
                            </Link>
                            <ul>
                                {Object.keys(byGame)
                                    .sort()
                                    .map(gameName => (
                                        <li>
                                            <Link to={slug(gameName)}>{gameName}</Link>
                                            <ul>
                                                {byGame[gameName].map(l => (
                                                    <li>
                                                        <BackgroundLink newPage {...l}>
                                                            {l.levelName}
                                                        </BackgroundLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                            </ul>
                        </>
                    );
                })}
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query {
        allGoogleSheetLeveldataRow {
            totalCount
            edges {
                node {
                    id
                    levelName
                    gameNameUsa
                    system
                }
                next {
                    id
                }
                previous {
                    id
                }
            }
        }
    }
`;
