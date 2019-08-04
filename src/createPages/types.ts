export interface PageInput {
    path: string;
    component: string;
    layout?: string;
    context?: any;
}

interface BoundActionCreators {
    createPage: (page: PageInput) => void;
    deletePage: (page: PageInput) => void;
    createRedirect: (opts: {
        fromPath: string;
        isPermanent?: boolean;
        redirectInBrowser?: boolean;
        toPath: string;
    }) => void;
}

export type GatsbyCreatePages = (fns: { graphql: any; boundActionCreators: BoundActionCreators }) => void;

export type GatsbyCreateListPages = (fns: {
    graphql: any;
    boundActionCreators: BoundActionCreators;
    field: string;
    fieldTransform?: (fieldValue: string) => any;
}) => void;
