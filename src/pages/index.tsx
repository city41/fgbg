import React from "react";
import { Link, graphql } from "gatsby";
import { BackgroundLink } from "../components/backgroundLink";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { groupBy } from "lodash";
import { slug } from "../util/slug";

interface BasicLevelData {
    levelName: string;
    gameNameUsa: string;
}

interface IndexPageProps {
    data: {
        allGoogleSheetLeveldataRow: {
            totalCount: number;
            edges: Array<{
                node: BasicLevelData;
            }>;
        };
    };
}

const IndexPage: React.FunctionComponent<IndexPageProps> = ({ data }) => {
    const nodes = data.allGoogleSheetLeveldataRow.edges.map(e => e.node);
    const bySystem = groupBy(nodes, "system");

    return (
        <Layout>
            <SEO title="Fighting Game Backgrounds" />
            {Object.keys(bySystem).map(system => (
                <Link to={slug(system)}>
                    <h2>{system}</h2>
                    <ul>
                        {bySystem[system].map(l => (
                            <li>
                                <BackgroundLink {...l} />
                            </li>
                        ))}
                    </ul>
                </Link>
            ))}
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
                    levelName
                    gameNameUsa
                    system
                }
            }
        }
    }
`;
