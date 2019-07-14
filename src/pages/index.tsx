import React from "react";
import { Link, graphql } from "gatsby";
import { bgpath } from "../util/bgpath";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

interface BasicLevelData {
    levelId: number;
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

const Entry: React.FunctionComponent<BasicLevelData> = ({
    levelId,
    levelName,
    gameNameUsa,
    system,
}) => {
    const entryPath = bgpath({ system, gameNameUsa, levelName });

    return (
        <Link to={entryPath}>
            {gameNameUsa} - {levelName}
        </Link>
    );
};

const IndexPage: React.FunctionComponent<IndexPageProps> = ({ data }) => (
    <Layout>
        <SEO title="Fighting Game Backgrounds" />
        <ul>
            {data.allGoogleSheetLeveldataRow.edges.map(edge => (
                <li key={edge.node.levelId}>
                    <Entry {...edge.node} />
                </li>
            ))}
        </ul>
    </Layout>
);

export default IndexPage;

export const query = graphql`
    query {
        allGoogleSheetLeveldataRow {
            totalCount
            edges {
                node {
                    levelId
                    levelName
                    gameNameUsa
                    system
                }
            }
        }
    }
`;
