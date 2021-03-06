import * as path from "path";
import * as fs from "fs";
import { GatsbyCreatePages, PageInput } from "./types";
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

    function createPageWithFullscreenVariant(options: PageInput) {
        createPage(options);

        createPage({
            ...options,
            path: options.path + "/fullscreen",
            context: {
                ...options.context,
                fullscreen: true,
            },
        });
    }

    const backgroundTemplate = path.resolve("src/components/backgroundTemplate.tsx");

    const allImageFiles = fs.readdirSync(path.resolve("src/images/bgs/full"));

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
                        labels
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

    const imagesWithPages: string[] = result.data.allLevels.edges
        .map((e: { node: { imageFileName: string } }) => e.node.imageFileName)
        .reduce((building: string[], i: string) => {
            return building.concat(i.split(","));
        }, []);

    const imagesWithoutPages = allImageFiles.filter(i => !imagesWithPages.some(iwp => i === iwp));
    console.log("imagesWithoutPages", imagesWithoutPages);

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

    const nextPrevMap: { [key: number]: { nextId: number; prevId: number } } = {};

    let iterator = head;

    let iterationCount = 0;
    while (Object.keys(nextPrevMap).length === 0 || iterator !== head) {
        if (nextPrevMap[iterator.edge.node.levelId as number]) {
            throw new Error("nextPrevMap, already encountered this node! " + iterator.edge.node.levelId);
        }

        nextPrevMap[iterator.edge.node.levelId] = {
            nextId: iterator.next!.edge.node.levelId,
            prevId: iterator.prev!.edge.node.levelId,
        };

        iterator = iterator.next!;
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

    interface ResultNode {
        levelId: number;
        labels?: string;
        imageFileName: string;
        gameNameUsa: string;
        levelName: string;
    }

    result.data.allLevels.edges.forEach(({ node }: { node: ResultNode }) => {
        const images = node.imageFileName.split(",");

        if (images.length === 1) {
            const webPath = backgroundPath(node);

            const imagePaths = getImagePaths(node.imageFileName);

            createPageWithFullscreenVariant({
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
        } else {
            if (!node.labels) {
                throw new Error("found a row with multiple images but no labels");
            }

            const labels = node.labels.split(",");

            if (labels.length !== images.length) {
                throw new Error(`For ${node.levelName}, ${node.gameNameUsa}, images/labels mismatch`);
            }

            if (labels.some(l => l.trim().length === 0)) {
                throw new Error(`For ${node.levelName}, ${node.gameNameUsa}, empty label found`);
            }

            if (images.some(i => i.trim().length === 0)) {
                throw new Error(`For ${node.levelName}, ${node.gameNameUsa}, empty image filename found`);
            }

            // create game:kof99/park/round-1, .../round-2, etc
            images.forEach((image, index) => {
                const currentLabel = labels[index];

                const webPath = backgroundPath(node, currentLabel);

                const imagePaths = getImagePaths(image);

                createPageWithFullscreenVariant({
                    path: webPath,
                    component: backgroundTemplate,
                    context: {
                        currentId: node.levelId,
                        nextId: nextPrevMap[node.levelId].nextId,
                        prevId: nextPrevMap[node.levelId].prevId,
                        ...imagePaths,
                        mainImageRegex: `/${image}/`,
                        labels,
                        currentLabel,
                    },
                });
            });

            // and create game:kof99/park which is just round-1 again
            const webPath = backgroundPath(node);

            const imagePaths = getImagePaths(images[0]);

            createPageWithFullscreenVariant({
                path: webPath,
                component: backgroundTemplate,
                context: {
                    currentId: node.levelId,
                    nextId: nextPrevMap[node.levelId].nextId,
                    prevId: nextPrevMap[node.levelId].prevId,
                    ...imagePaths,
                    mainImageRegex: `/${images[0]}/`,
                    labels,
                    currentLabel: labels[0],
                },
            });
        }
    });
};
