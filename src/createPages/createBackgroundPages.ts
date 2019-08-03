import * as path from "path";
import * as fs from "fs";
import { GatsbyCreatePages } from "./types";
import { backgroundPath } from "../util/backgroundPath";

const staticSuffix = "_static.jpg";

function getImagePaths(mainImageFileName: string): { mainImageRelativePath: string; bgImageRelativePath: string } {
    const mainImageBaseName = path.basename(mainImageFileName, path.extname(mainImageFileName));
    const rootImgsDir = path.resolve(__dirname, "../images/bgs");

    const mainImagePath = path.resolve(rootImgsDir, "full", mainImageFileName);
    const staticImagePath = path.resolve(rootImgsDir, "static", mainImageBaseName + staticSuffix);

    if (!fs.existsSync(mainImagePath)) {
        throw new Error("Failed to find main background image: " + mainImagePath);
    }

    if (!fs.existsSync(staticImagePath)) {
        throw new Error("Failed to find static image: " + staticImagePath);
    }

    return {
        mainImageRelativePath: path.join("bgs", "full", mainImageFileName),
        bgImageRelativePath: path.join("bgs", "static", mainImageBaseName + staticSuffix),
    };
}

export const createBackgroundPages: GatsbyCreatePages = async ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    const backgroundTemplate = path.resolve("src/components/backgroundTemplate.tsx");

    const result = await graphql(`
        query {
            allLevels: allGoogleSheetLeveldataRow {
                totalCount
                edges {
                    node {
                        levelId
                        levelName
                        gameNameUsa
                        imageFileName
                        system
                    }
                    previous {
                        levelId
                    }
                    next {
                        levelId
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    const [seedEdge, ...restOfEdges] = result.data.allLevels.edges;

    type Node = {
        edge: any;
        next?: Node;
        prev?: Node;
    };

    const head: Node = {
        edge: seedEdge,
        next: null,
        prev: null,
    };

    let tail: Node = head;

    function pluckRandom<T>(array: T[]): T {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array.splice(randomIndex, 1)[0];
    }

    while (restOfEdges.length) {
        const nextEdge = pluckRandom(restOfEdges);
        const nextNode = {
            edge: nextEdge,
            prev: tail,
        };

        tail.next = nextNode;

        tail = nextNode;
    }

    head.prev = tail;
    tail.next = head;

    const nextPrevMap = {};

    let iterator = head;

    let iterationCount = 0;
    while (Object.keys(nextPrevMap).length === 0 || iterator !== head) {
        if (nextPrevMap[iterator.edge.node.levelId]) {
            throw new Error("nextPrevMap, already encountered this node! " + iterator.edge.node.levelId);
        }

        nextPrevMap[iterator.edge.node.levelId] = {
            nextId: iterator.next.edge.node.levelId,
            prevId: iterator.prev.edge.node.levelId,
        };

        iterator = iterator.next;
        ++iterationCount;
    }

    if (iterationCount !== result.data.allLevels.edges.length) {
        throw new Error(
            "nextPrevMap iterationCount mismatch, iterationCount: " +
                iterationCount +
                ", allLevels.length: " +
                result.data.allLevels.edges.length
        );
    }

    result.data.allLevels.edges.forEach(({ node }, index, edges) => {
        const webPath = backgroundPath(node);

        const imagePaths = getImagePaths(node.imageFileName);

        createPage({
            path: webPath,
            component: backgroundTemplate,
            context: {
                currentId: node.levelId,
                nextId: nextPrevMap[node.levelId].nextId,
                prevId: nextPrevMap[node.levelId].prevId,
                ...imagePaths,
                mainImageRegex: `/${node.imageFileName}/`,
            },
        });
    });
};
