export type Maybe<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /**
     * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
     * representation of dates and times using the Gregorian calendar.
     **/
    Date: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
};

export type BgsizesCsv = Node & {
    __typename?: "BgsizesCsv";
    id: Scalars["ID"];
    parent: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    file: Maybe<Scalars["String"]>;
    width: Maybe<Scalars["String"]>;
    height: Maybe<Scalars["String"]>;
};

export type BgsizesCsvConnection = {
    __typename?: "BgsizesCsvConnection";
    totalCount: Scalars["Int"];
    edges: Array<BgsizesCsvEdge>;
    nodes: Array<BgsizesCsv>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    group: Array<BgsizesCsvGroupConnection>;
};

export type BgsizesCsvConnectionDistinctArgs = {
    field: BgsizesCsvFieldsEnum;
};

export type BgsizesCsvConnectionGroupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: BgsizesCsvFieldsEnum;
};

export type BgsizesCsvEdge = {
    __typename?: "BgsizesCsvEdge";
    next: Maybe<BgsizesCsv>;
    node: BgsizesCsv;
    previous: Maybe<BgsizesCsv>;
};

export enum BgsizesCsvFieldsEnum {
    id = "id",
    parent___id = "parent___id",
    parent___parent___id = "parent___parent___id",
    parent___parent___parent___id = "parent___parent___parent___id",
    parent___parent___parent___children = "parent___parent___parent___children",
    parent___parent___children = "parent___parent___children",
    parent___parent___children___id = "parent___parent___children___id",
    parent___parent___children___children = "parent___parent___children___children",
    parent___parent___internal___content = "parent___parent___internal___content",
    parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
    parent___parent___internal___description = "parent___parent___internal___description",
    parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
    parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
    parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
    parent___parent___internal___owner = "parent___parent___internal___owner",
    parent___parent___internal___type = "parent___parent___internal___type",
    parent___children = "parent___children",
    parent___children___id = "parent___children___id",
    parent___children___parent___id = "parent___children___parent___id",
    parent___children___parent___children = "parent___children___parent___children",
    parent___children___children = "parent___children___children",
    parent___children___children___id = "parent___children___children___id",
    parent___children___children___children = "parent___children___children___children",
    parent___children___internal___content = "parent___children___internal___content",
    parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
    parent___children___internal___description = "parent___children___internal___description",
    parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
    parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
    parent___children___internal___mediaType = "parent___children___internal___mediaType",
    parent___children___internal___owner = "parent___children___internal___owner",
    parent___children___internal___type = "parent___children___internal___type",
    parent___internal___content = "parent___internal___content",
    parent___internal___contentDigest = "parent___internal___contentDigest",
    parent___internal___description = "parent___internal___description",
    parent___internal___fieldOwners = "parent___internal___fieldOwners",
    parent___internal___ignoreType = "parent___internal___ignoreType",
    parent___internal___mediaType = "parent___internal___mediaType",
    parent___internal___owner = "parent___internal___owner",
    parent___internal___type = "parent___internal___type",
    children = "children",
    children___id = "children___id",
    children___parent___id = "children___parent___id",
    children___parent___parent___id = "children___parent___parent___id",
    children___parent___parent___children = "children___parent___parent___children",
    children___parent___children = "children___parent___children",
    children___parent___children___id = "children___parent___children___id",
    children___parent___children___children = "children___parent___children___children",
    children___parent___internal___content = "children___parent___internal___content",
    children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
    children___parent___internal___description = "children___parent___internal___description",
    children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
    children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
    children___parent___internal___mediaType = "children___parent___internal___mediaType",
    children___parent___internal___owner = "children___parent___internal___owner",
    children___parent___internal___type = "children___parent___internal___type",
    children___children = "children___children",
    children___children___id = "children___children___id",
    children___children___parent___id = "children___children___parent___id",
    children___children___parent___children = "children___children___parent___children",
    children___children___children = "children___children___children",
    children___children___children___id = "children___children___children___id",
    children___children___children___children = "children___children___children___children",
    children___children___internal___content = "children___children___internal___content",
    children___children___internal___contentDigest = "children___children___internal___contentDigest",
    children___children___internal___description = "children___children___internal___description",
    children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
    children___children___internal___ignoreType = "children___children___internal___ignoreType",
    children___children___internal___mediaType = "children___children___internal___mediaType",
    children___children___internal___owner = "children___children___internal___owner",
    children___children___internal___type = "children___children___internal___type",
    children___internal___content = "children___internal___content",
    children___internal___contentDigest = "children___internal___contentDigest",
    children___internal___description = "children___internal___description",
    children___internal___fieldOwners = "children___internal___fieldOwners",
    children___internal___ignoreType = "children___internal___ignoreType",
    children___internal___mediaType = "children___internal___mediaType",
    children___internal___owner = "children___internal___owner",
    children___internal___type = "children___internal___type",
    internal___content = "internal___content",
    internal___contentDigest = "internal___contentDigest",
    internal___description = "internal___description",
    internal___fieldOwners = "internal___fieldOwners",
    internal___ignoreType = "internal___ignoreType",
    internal___mediaType = "internal___mediaType",
    internal___owner = "internal___owner",
    internal___type = "internal___type",
    file = "file",
    width = "width",
    height = "height",
}

export type BgsizesCsvFilterInput = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    file: Maybe<StringQueryOperatorInput>;
    width: Maybe<StringQueryOperatorInput>;
    height: Maybe<StringQueryOperatorInput>;
};

export type BgsizesCsvGroupConnection = {
    __typename?: "BgsizesCsvGroupConnection";
    totalCount: Scalars["Int"];
    edges: Array<BgsizesCsvEdge>;
    nodes: Array<BgsizesCsv>;
    pageInfo: PageInfo;
    field: Scalars["String"];
    fieldValue: Maybe<Scalars["String"]>;
};

export type BgsizesCsvSortInput = {
    fields: Maybe<Array<Maybe<BgsizesCsvFieldsEnum>>>;
    order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type BooleanQueryOperatorInput = {
    eq: Maybe<Scalars["Boolean"]>;
    ne: Maybe<Scalars["Boolean"]>;
    in: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
    nin: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type DateQueryOperatorInput = {
    eq: Maybe<Scalars["Date"]>;
    ne: Maybe<Scalars["Date"]>;
    gt: Maybe<Scalars["Date"]>;
    gte: Maybe<Scalars["Date"]>;
    lt: Maybe<Scalars["Date"]>;
    lte: Maybe<Scalars["Date"]>;
    in: Maybe<Array<Maybe<Scalars["Date"]>>>;
    nin: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
    __typename?: "Directory";
    id: Scalars["ID"];
    parent: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    sourceInstanceName: Maybe<Scalars["String"]>;
    absolutePath: Maybe<Scalars["String"]>;
    relativePath: Maybe<Scalars["String"]>;
    extension: Maybe<Scalars["String"]>;
    size: Maybe<Scalars["Int"]>;
    prettySize: Maybe<Scalars["String"]>;
    modifiedTime: Maybe<Scalars["Date"]>;
    accessTime: Maybe<Scalars["Date"]>;
    changeTime: Maybe<Scalars["Date"]>;
    birthTime: Maybe<Scalars["Date"]>;
    root: Maybe<Scalars["String"]>;
    dir: Maybe<Scalars["String"]>;
    base: Maybe<Scalars["String"]>;
    ext: Maybe<Scalars["String"]>;
    name: Maybe<Scalars["String"]>;
    relativeDirectory: Maybe<Scalars["String"]>;
    dev: Maybe<Scalars["Int"]>;
    mode: Maybe<Scalars["Int"]>;
    nlink: Maybe<Scalars["Int"]>;
    uid: Maybe<Scalars["Int"]>;
    gid: Maybe<Scalars["Int"]>;
    rdev: Maybe<Scalars["Int"]>;
    blksize: Maybe<Scalars["Int"]>;
    ino: Maybe<Scalars["Int"]>;
    blocks: Maybe<Scalars["Int"]>;
    atimeMs: Maybe<Scalars["Float"]>;
    mtimeMs: Maybe<Scalars["Float"]>;
    ctimeMs: Maybe<Scalars["Float"]>;
    birthtimeMs: Maybe<Scalars["Float"]>;
    atime: Maybe<Scalars["Date"]>;
    mtime: Maybe<Scalars["Date"]>;
    ctime: Maybe<Scalars["Date"]>;
    birthtime: Maybe<Scalars["Date"]>;
};

export type DirectoryModifiedTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
};

export type DirectoryAccessTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
};

export type DirectoryBirthtimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
};

export type DirectoryConnection = {
    __typename?: "DirectoryConnection";
    totalCount: Scalars["Int"];
    edges: Array<DirectoryEdge>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
    field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
    __typename?: "DirectoryEdge";
    next: Maybe<Directory>;
    node: Directory;
    previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
    id = "id",
    parent___id = "parent___id",
    parent___parent___id = "parent___parent___id",
    parent___parent___parent___id = "parent___parent___parent___id",
    parent___parent___parent___children = "parent___parent___parent___children",
    parent___parent___children = "parent___parent___children",
    parent___parent___children___id = "parent___parent___children___id",
    parent___parent___children___children = "parent___parent___children___children",
    parent___parent___internal___content = "parent___parent___internal___content",
    parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
    parent___parent___internal___description = "parent___parent___internal___description",
    parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
    parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
    parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
    parent___parent___internal___owner = "parent___parent___internal___owner",
    parent___parent___internal___type = "parent___parent___internal___type",
    parent___children = "parent___children",
    parent___children___id = "parent___children___id",
    parent___children___parent___id = "parent___children___parent___id",
    parent___children___parent___children = "parent___children___parent___children",
    parent___children___children = "parent___children___children",
    parent___children___children___id = "parent___children___children___id",
    parent___children___children___children = "parent___children___children___children",
    parent___children___internal___content = "parent___children___internal___content",
    parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
    parent___children___internal___description = "parent___children___internal___description",
    parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
    parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
    parent___children___internal___mediaType = "parent___children___internal___mediaType",
    parent___children___internal___owner = "parent___children___internal___owner",
    parent___children___internal___type = "parent___children___internal___type",
    parent___internal___content = "parent___internal___content",
    parent___internal___contentDigest = "parent___internal___contentDigest",
    parent___internal___description = "parent___internal___description",
    parent___internal___fieldOwners = "parent___internal___fieldOwners",
    parent___internal___ignoreType = "parent___internal___ignoreType",
    parent___internal___mediaType = "parent___internal___mediaType",
    parent___internal___owner = "parent___internal___owner",
    parent___internal___type = "parent___internal___type",
    children = "children",
    children___id = "children___id",
    children___parent___id = "children___parent___id",
    children___parent___parent___id = "children___parent___parent___id",
    children___parent___parent___children = "children___parent___parent___children",
    children___parent___children = "children___parent___children",
    children___parent___children___id = "children___parent___children___id",
    children___parent___children___children = "children___parent___children___children",
    children___parent___internal___content = "children___parent___internal___content",
    children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
    children___parent___internal___description = "children___parent___internal___description",
    children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
    children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
    children___parent___internal___mediaType = "children___parent___internal___mediaType",
    children___parent___internal___owner = "children___parent___internal___owner",
    children___parent___internal___type = "children___parent___internal___type",
    children___children = "children___children",
    children___children___id = "children___children___id",
    children___children___parent___id = "children___children___parent___id",
    children___children___parent___children = "children___children___parent___children",
    children___children___children = "children___children___children",
    children___children___children___id = "children___children___children___id",
    children___children___children___children = "children___children___children___children",
    children___children___internal___content = "children___children___internal___content",
    children___children___internal___contentDigest = "children___children___internal___contentDigest",
    children___children___internal___description = "children___children___internal___description",
    children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
    children___children___internal___ignoreType = "children___children___internal___ignoreType",
    children___children___internal___mediaType = "children___children___internal___mediaType",
    children___children___internal___owner = "children___children___internal___owner",
    children___children___internal___type = "children___children___internal___type",
    children___internal___content = "children___internal___content",
    children___internal___contentDigest = "children___internal___contentDigest",
    children___internal___description = "children___internal___description",
    children___internal___fieldOwners = "children___internal___fieldOwners",
    children___internal___ignoreType = "children___internal___ignoreType",
    children___internal___mediaType = "children___internal___mediaType",
    children___internal___owner = "children___internal___owner",
    children___internal___type = "children___internal___type",
    internal___content = "internal___content",
    internal___contentDigest = "internal___contentDigest",
    internal___description = "internal___description",
    internal___fieldOwners = "internal___fieldOwners",
    internal___ignoreType = "internal___ignoreType",
    internal___mediaType = "internal___mediaType",
    internal___owner = "internal___owner",
    internal___type = "internal___type",
    sourceInstanceName = "sourceInstanceName",
    absolutePath = "absolutePath",
    relativePath = "relativePath",
    extension = "extension",
    size = "size",
    prettySize = "prettySize",
    modifiedTime = "modifiedTime",
    accessTime = "accessTime",
    changeTime = "changeTime",
    birthTime = "birthTime",
    root = "root",
    dir = "dir",
    base = "base",
    ext = "ext",
    name = "name",
    relativeDirectory = "relativeDirectory",
    dev = "dev",
    mode = "mode",
    nlink = "nlink",
    uid = "uid",
    gid = "gid",
    rdev = "rdev",
    blksize = "blksize",
    ino = "ino",
    blocks = "blocks",
    atimeMs = "atimeMs",
    mtimeMs = "mtimeMs",
    ctimeMs = "ctimeMs",
    birthtimeMs = "birthtimeMs",
    atime = "atime",
    mtime = "mtime",
    ctime = "ctime",
    birthtime = "birthtime",
}

export type DirectoryFilterInput = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    sourceInstanceName: Maybe<StringQueryOperatorInput>;
    absolutePath: Maybe<StringQueryOperatorInput>;
    relativePath: Maybe<StringQueryOperatorInput>;
    extension: Maybe<StringQueryOperatorInput>;
    size: Maybe<IntQueryOperatorInput>;
    prettySize: Maybe<StringQueryOperatorInput>;
    modifiedTime: Maybe<DateQueryOperatorInput>;
    accessTime: Maybe<DateQueryOperatorInput>;
    changeTime: Maybe<DateQueryOperatorInput>;
    birthTime: Maybe<DateQueryOperatorInput>;
    root: Maybe<StringQueryOperatorInput>;
    dir: Maybe<StringQueryOperatorInput>;
    base: Maybe<StringQueryOperatorInput>;
    ext: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    relativeDirectory: Maybe<StringQueryOperatorInput>;
    dev: Maybe<IntQueryOperatorInput>;
    mode: Maybe<IntQueryOperatorInput>;
    nlink: Maybe<IntQueryOperatorInput>;
    uid: Maybe<IntQueryOperatorInput>;
    gid: Maybe<IntQueryOperatorInput>;
    rdev: Maybe<IntQueryOperatorInput>;
    blksize: Maybe<IntQueryOperatorInput>;
    ino: Maybe<IntQueryOperatorInput>;
    blocks: Maybe<IntQueryOperatorInput>;
    atimeMs: Maybe<FloatQueryOperatorInput>;
    mtimeMs: Maybe<FloatQueryOperatorInput>;
    ctimeMs: Maybe<FloatQueryOperatorInput>;
    birthtimeMs: Maybe<FloatQueryOperatorInput>;
    atime: Maybe<DateQueryOperatorInput>;
    mtime: Maybe<DateQueryOperatorInput>;
    ctime: Maybe<DateQueryOperatorInput>;
    birthtime: Maybe<DateQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
    __typename?: "DirectoryGroupConnection";
    totalCount: Scalars["Int"];
    edges: Array<DirectoryEdge>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    field: Scalars["String"];
    fieldValue: Maybe<Scalars["String"]>;
};

export type DirectorySortInput = {
    fields: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
    order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
    highlight: Maybe<Scalars["String"]>;
    shadow: Maybe<Scalars["String"]>;
    opacity: Maybe<Scalars["Int"]>;
};

export type File = Node & {
    __typename?: "File";
    birthtime: Maybe<Scalars["Date"]>;
    birthtimeMs: Maybe<Scalars["Float"]>;
    sourceInstanceName: Maybe<Scalars["String"]>;
    absolutePath: Maybe<Scalars["String"]>;
    relativePath: Maybe<Scalars["String"]>;
    extension: Maybe<Scalars["String"]>;
    size: Maybe<Scalars["Int"]>;
    prettySize: Maybe<Scalars["String"]>;
    modifiedTime: Maybe<Scalars["Date"]>;
    accessTime: Maybe<Scalars["Date"]>;
    changeTime: Maybe<Scalars["Date"]>;
    birthTime: Maybe<Scalars["Date"]>;
    root: Maybe<Scalars["String"]>;
    dir: Maybe<Scalars["String"]>;
    base: Maybe<Scalars["String"]>;
    ext: Maybe<Scalars["String"]>;
    name: Maybe<Scalars["String"]>;
    relativeDirectory: Maybe<Scalars["String"]>;
    dev: Maybe<Scalars["Int"]>;
    mode: Maybe<Scalars["Int"]>;
    nlink: Maybe<Scalars["Int"]>;
    uid: Maybe<Scalars["Int"]>;
    gid: Maybe<Scalars["Int"]>;
    rdev: Maybe<Scalars["Int"]>;
    blksize: Maybe<Scalars["Int"]>;
    ino: Maybe<Scalars["Int"]>;
    blocks: Maybe<Scalars["Int"]>;
    atimeMs: Maybe<Scalars["Float"]>;
    mtimeMs: Maybe<Scalars["Float"]>;
    ctimeMs: Maybe<Scalars["Float"]>;
    atime: Maybe<Scalars["Date"]>;
    mtime: Maybe<Scalars["Date"]>;
    ctime: Maybe<Scalars["Date"]>;
    /** Copy file to static directory and return public url to it */
    publicURL: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    parent: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    childImageSharp: Maybe<ImageSharp>;
    childrenBgsizesCsv: Maybe<Array<Maybe<BgsizesCsv>>>;
};

export type FileModifiedTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
};

export type FileAccessTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
};

export type FileConnection = {
    __typename?: "FileConnection";
    totalCount: Scalars["Int"];
    edges: Array<FileEdge>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
    field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: FileFieldsEnum;
};

export type FileEdge = {
    __typename?: "FileEdge";
    next: Maybe<File>;
    node: File;
    previous: Maybe<File>;
};

export enum FileFieldsEnum {
    birthtime = "birthtime",
    birthtimeMs = "birthtimeMs",
    sourceInstanceName = "sourceInstanceName",
    absolutePath = "absolutePath",
    relativePath = "relativePath",
    extension = "extension",
    size = "size",
    prettySize = "prettySize",
    modifiedTime = "modifiedTime",
    accessTime = "accessTime",
    changeTime = "changeTime",
    birthTime = "birthTime",
    root = "root",
    dir = "dir",
    base = "base",
    ext = "ext",
    name = "name",
    relativeDirectory = "relativeDirectory",
    dev = "dev",
    mode = "mode",
    nlink = "nlink",
    uid = "uid",
    gid = "gid",
    rdev = "rdev",
    blksize = "blksize",
    ino = "ino",
    blocks = "blocks",
    atimeMs = "atimeMs",
    mtimeMs = "mtimeMs",
    ctimeMs = "ctimeMs",
    atime = "atime",
    mtime = "mtime",
    ctime = "ctime",
    publicURL = "publicURL",
    id = "id",
    parent___id = "parent___id",
    parent___parent___id = "parent___parent___id",
    parent___parent___parent___id = "parent___parent___parent___id",
    parent___parent___parent___children = "parent___parent___parent___children",
    parent___parent___children = "parent___parent___children",
    parent___parent___children___id = "parent___parent___children___id",
    parent___parent___children___children = "parent___parent___children___children",
    parent___parent___internal___content = "parent___parent___internal___content",
    parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
    parent___parent___internal___description = "parent___parent___internal___description",
    parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
    parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
    parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
    parent___parent___internal___owner = "parent___parent___internal___owner",
    parent___parent___internal___type = "parent___parent___internal___type",
    parent___children = "parent___children",
    parent___children___id = "parent___children___id",
    parent___children___parent___id = "parent___children___parent___id",
    parent___children___parent___children = "parent___children___parent___children",
    parent___children___children = "parent___children___children",
    parent___children___children___id = "parent___children___children___id",
    parent___children___children___children = "parent___children___children___children",
    parent___children___internal___content = "parent___children___internal___content",
    parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
    parent___children___internal___description = "parent___children___internal___description",
    parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
    parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
    parent___children___internal___mediaType = "parent___children___internal___mediaType",
    parent___children___internal___owner = "parent___children___internal___owner",
    parent___children___internal___type = "parent___children___internal___type",
    parent___internal___content = "parent___internal___content",
    parent___internal___contentDigest = "parent___internal___contentDigest",
    parent___internal___description = "parent___internal___description",
    parent___internal___fieldOwners = "parent___internal___fieldOwners",
    parent___internal___ignoreType = "parent___internal___ignoreType",
    parent___internal___mediaType = "parent___internal___mediaType",
    parent___internal___owner = "parent___internal___owner",
    parent___internal___type = "parent___internal___type",
    children = "children",
    children___id = "children___id",
    children___parent___id = "children___parent___id",
    children___parent___parent___id = "children___parent___parent___id",
    children___parent___parent___children = "children___parent___parent___children",
    children___parent___children = "children___parent___children",
    children___parent___children___id = "children___parent___children___id",
    children___parent___children___children = "children___parent___children___children",
    children___parent___internal___content = "children___parent___internal___content",
    children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
    children___parent___internal___description = "children___parent___internal___description",
    children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
    children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
    children___parent___internal___mediaType = "children___parent___internal___mediaType",
    children___parent___internal___owner = "children___parent___internal___owner",
    children___parent___internal___type = "children___parent___internal___type",
    children___children = "children___children",
    children___children___id = "children___children___id",
    children___children___parent___id = "children___children___parent___id",
    children___children___parent___children = "children___children___parent___children",
    children___children___children = "children___children___children",
    children___children___children___id = "children___children___children___id",
    children___children___children___children = "children___children___children___children",
    children___children___internal___content = "children___children___internal___content",
    children___children___internal___contentDigest = "children___children___internal___contentDigest",
    children___children___internal___description = "children___children___internal___description",
    children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
    children___children___internal___ignoreType = "children___children___internal___ignoreType",
    children___children___internal___mediaType = "children___children___internal___mediaType",
    children___children___internal___owner = "children___children___internal___owner",
    children___children___internal___type = "children___children___internal___type",
    children___internal___content = "children___internal___content",
    children___internal___contentDigest = "children___internal___contentDigest",
    children___internal___description = "children___internal___description",
    children___internal___fieldOwners = "children___internal___fieldOwners",
    children___internal___ignoreType = "children___internal___ignoreType",
    children___internal___mediaType = "children___internal___mediaType",
    children___internal___owner = "children___internal___owner",
    children___internal___type = "children___internal___type",
    internal___content = "internal___content",
    internal___contentDigest = "internal___contentDigest",
    internal___description = "internal___description",
    internal___fieldOwners = "internal___fieldOwners",
    internal___ignoreType = "internal___ignoreType",
    internal___mediaType = "internal___mediaType",
    internal___owner = "internal___owner",
    internal___type = "internal___type",
}

export type FileFilterInput = {
    birthtime: Maybe<DateQueryOperatorInput>;
    birthtimeMs: Maybe<FloatQueryOperatorInput>;
    sourceInstanceName: Maybe<StringQueryOperatorInput>;
    absolutePath: Maybe<StringQueryOperatorInput>;
    relativePath: Maybe<StringQueryOperatorInput>;
    extension: Maybe<StringQueryOperatorInput>;
    size: Maybe<IntQueryOperatorInput>;
    prettySize: Maybe<StringQueryOperatorInput>;
    modifiedTime: Maybe<DateQueryOperatorInput>;
    accessTime: Maybe<DateQueryOperatorInput>;
    changeTime: Maybe<DateQueryOperatorInput>;
    birthTime: Maybe<DateQueryOperatorInput>;
    root: Maybe<StringQueryOperatorInput>;
    dir: Maybe<StringQueryOperatorInput>;
    base: Maybe<StringQueryOperatorInput>;
    ext: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    relativeDirectory: Maybe<StringQueryOperatorInput>;
    dev: Maybe<IntQueryOperatorInput>;
    mode: Maybe<IntQueryOperatorInput>;
    nlink: Maybe<IntQueryOperatorInput>;
    uid: Maybe<IntQueryOperatorInput>;
    gid: Maybe<IntQueryOperatorInput>;
    rdev: Maybe<IntQueryOperatorInput>;
    blksize: Maybe<IntQueryOperatorInput>;
    ino: Maybe<IntQueryOperatorInput>;
    blocks: Maybe<IntQueryOperatorInput>;
    atimeMs: Maybe<FloatQueryOperatorInput>;
    mtimeMs: Maybe<FloatQueryOperatorInput>;
    ctimeMs: Maybe<FloatQueryOperatorInput>;
    atime: Maybe<DateQueryOperatorInput>;
    mtime: Maybe<DateQueryOperatorInput>;
    ctime: Maybe<DateQueryOperatorInput>;
    publicURL: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
    __typename?: "FileGroupConnection";
    totalCount: Scalars["Int"];
    edges: Array<FileEdge>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    field: Scalars["String"];
    fieldValue: Maybe<Scalars["String"]>;
};

export type FileSortInput = {
    fields: Maybe<Array<Maybe<FileFieldsEnum>>>;
    order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
    eq: Maybe<Scalars["Float"]>;
    ne: Maybe<Scalars["Float"]>;
    gt: Maybe<Scalars["Float"]>;
    gte: Maybe<Scalars["Float"]>;
    lt: Maybe<Scalars["Float"]>;
    lte: Maybe<Scalars["Float"]>;
    in: Maybe<Array<Maybe<Scalars["Float"]>>>;
    nin: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type GoogleSheetLeveldataRow = Node & {
    __typename?: "googleSheetLeveldataRow";
    id: Scalars["ID"];
    parent: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    gameNameUsa: Maybe<Scalars["String"]>;
    levelId: Maybe<Scalars["Int"]>;
    levelName: Maybe<Scalars["String"]>;
    imageFileName: Maybe<Scalars["String"]>;
    animated: Maybe<Scalars["Boolean"]>;
    system: Maybe<Scalars["String"]>;
    developer: Maybe<Scalars["String"]>;
    year: Maybe<Scalars["Int"]>;
    series: Maybe<Scalars["String"]>;
    labels: Maybe<Scalars["String"]>;
};

export type GoogleSheetLeveldataRowConnection = {
    __typename?: "googleSheetLeveldataRowConnection";
    totalCount: Scalars["Int"];
    edges: Array<GoogleSheetLeveldataRowEdge>;
    nodes: Array<GoogleSheetLeveldataRow>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    group: Array<GoogleSheetLeveldataRowGroupConnection>;
};

export type GoogleSheetLeveldataRowConnectionDistinctArgs = {
    field: GoogleSheetLeveldataRowFieldsEnum;
};

export type GoogleSheetLeveldataRowConnectionGroupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: GoogleSheetLeveldataRowFieldsEnum;
};

export type GoogleSheetLeveldataRowEdge = {
    __typename?: "googleSheetLeveldataRowEdge";
    next: Maybe<GoogleSheetLeveldataRow>;
    node: GoogleSheetLeveldataRow;
    previous: Maybe<GoogleSheetLeveldataRow>;
};

export enum GoogleSheetLeveldataRowFieldsEnum {
    id = "id",
    parent___id = "parent___id",
    parent___parent___id = "parent___parent___id",
    parent___parent___parent___id = "parent___parent___parent___id",
    parent___parent___parent___children = "parent___parent___parent___children",
    parent___parent___children = "parent___parent___children",
    parent___parent___children___id = "parent___parent___children___id",
    parent___parent___children___children = "parent___parent___children___children",
    parent___parent___internal___content = "parent___parent___internal___content",
    parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
    parent___parent___internal___description = "parent___parent___internal___description",
    parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
    parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
    parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
    parent___parent___internal___owner = "parent___parent___internal___owner",
    parent___parent___internal___type = "parent___parent___internal___type",
    parent___children = "parent___children",
    parent___children___id = "parent___children___id",
    parent___children___parent___id = "parent___children___parent___id",
    parent___children___parent___children = "parent___children___parent___children",
    parent___children___children = "parent___children___children",
    parent___children___children___id = "parent___children___children___id",
    parent___children___children___children = "parent___children___children___children",
    parent___children___internal___content = "parent___children___internal___content",
    parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
    parent___children___internal___description = "parent___children___internal___description",
    parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
    parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
    parent___children___internal___mediaType = "parent___children___internal___mediaType",
    parent___children___internal___owner = "parent___children___internal___owner",
    parent___children___internal___type = "parent___children___internal___type",
    parent___internal___content = "parent___internal___content",
    parent___internal___contentDigest = "parent___internal___contentDigest",
    parent___internal___description = "parent___internal___description",
    parent___internal___fieldOwners = "parent___internal___fieldOwners",
    parent___internal___ignoreType = "parent___internal___ignoreType",
    parent___internal___mediaType = "parent___internal___mediaType",
    parent___internal___owner = "parent___internal___owner",
    parent___internal___type = "parent___internal___type",
    children = "children",
    children___id = "children___id",
    children___parent___id = "children___parent___id",
    children___parent___parent___id = "children___parent___parent___id",
    children___parent___parent___children = "children___parent___parent___children",
    children___parent___children = "children___parent___children",
    children___parent___children___id = "children___parent___children___id",
    children___parent___children___children = "children___parent___children___children",
    children___parent___internal___content = "children___parent___internal___content",
    children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
    children___parent___internal___description = "children___parent___internal___description",
    children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
    children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
    children___parent___internal___mediaType = "children___parent___internal___mediaType",
    children___parent___internal___owner = "children___parent___internal___owner",
    children___parent___internal___type = "children___parent___internal___type",
    children___children = "children___children",
    children___children___id = "children___children___id",
    children___children___parent___id = "children___children___parent___id",
    children___children___parent___children = "children___children___parent___children",
    children___children___children = "children___children___children",
    children___children___children___id = "children___children___children___id",
    children___children___children___children = "children___children___children___children",
    children___children___internal___content = "children___children___internal___content",
    children___children___internal___contentDigest = "children___children___internal___contentDigest",
    children___children___internal___description = "children___children___internal___description",
    children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
    children___children___internal___ignoreType = "children___children___internal___ignoreType",
    children___children___internal___mediaType = "children___children___internal___mediaType",
    children___children___internal___owner = "children___children___internal___owner",
    children___children___internal___type = "children___children___internal___type",
    children___internal___content = "children___internal___content",
    children___internal___contentDigest = "children___internal___contentDigest",
    children___internal___description = "children___internal___description",
    children___internal___fieldOwners = "children___internal___fieldOwners",
    children___internal___ignoreType = "children___internal___ignoreType",
    children___internal___mediaType = "children___internal___mediaType",
    children___internal___owner = "children___internal___owner",
    children___internal___type = "children___internal___type",
    internal___content = "internal___content",
    internal___contentDigest = "internal___contentDigest",
    internal___description = "internal___description",
    internal___fieldOwners = "internal___fieldOwners",
    internal___ignoreType = "internal___ignoreType",
    internal___mediaType = "internal___mediaType",
    internal___owner = "internal___owner",
    internal___type = "internal___type",
    gameNameUsa = "gameNameUsa",
    levelId = "levelId",
    levelName = "levelName",
    imageFileName = "imageFileName",
    animated = "animated",
    system = "system",
    developer = "developer",
    year = "year",
    series = "series",
    labels = "labels",
}

export type GoogleSheetLeveldataRowFilterInput = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    gameNameUsa: Maybe<StringQueryOperatorInput>;
    levelId: Maybe<IntQueryOperatorInput>;
    levelName: Maybe<StringQueryOperatorInput>;
    imageFileName: Maybe<StringQueryOperatorInput>;
    animated: Maybe<BooleanQueryOperatorInput>;
    system: Maybe<StringQueryOperatorInput>;
    developer: Maybe<StringQueryOperatorInput>;
    year: Maybe<IntQueryOperatorInput>;
    series: Maybe<StringQueryOperatorInput>;
    labels: Maybe<StringQueryOperatorInput>;
};

export type GoogleSheetLeveldataRowGroupConnection = {
    __typename?: "googleSheetLeveldataRowGroupConnection";
    totalCount: Scalars["Int"];
    edges: Array<GoogleSheetLeveldataRowEdge>;
    nodes: Array<GoogleSheetLeveldataRow>;
    pageInfo: PageInfo;
    field: Scalars["String"];
    fieldValue: Maybe<Scalars["String"]>;
};

export type GoogleSheetLeveldataRowSortInput = {
    fields: Maybe<Array<Maybe<GoogleSheetLeveldataRowFieldsEnum>>>;
    order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ImageCropFocus {
    CENTER = "CENTER",
    NORTH = "NORTH",
    NORTHEAST = "NORTHEAST",
    EAST = "EAST",
    SOUTHEAST = "SOUTHEAST",
    SOUTH = "SOUTH",
    SOUTHWEST = "SOUTHWEST",
    WEST = "WEST",
    NORTHWEST = "NORTHWEST",
    ENTROPY = "ENTROPY",
    ATTENTION = "ATTENTION",
}

export enum ImageFit {
    COVER = "COVER",
    CONTAIN = "CONTAIN",
    FILL = "FILL",
}

export enum ImageFormat {
    NO_CHANGE = "NO_CHANGE",
    JPG = "JPG",
    PNG = "PNG",
    WEBP = "WEBP",
}

export type ImageSharp = Node & {
    __typename?: "ImageSharp";
    id: Scalars["ID"];
    fixed: Maybe<ImageSharpFixed>;
    resolutions: Maybe<ImageSharpResolutions>;
    fluid: Maybe<ImageSharpFluid>;
    sizes: Maybe<ImageSharpSizes>;
    original: Maybe<ImageSharpOriginal>;
    resize: Maybe<ImageSharpResize>;
    parent: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type ImageSharpFixedArgs = {
    width: Maybe<Scalars["Int"]>;
    height: Maybe<Scalars["Int"]>;
    base64Width: Maybe<Scalars["Int"]>;
    jpegProgressive?: Maybe<Scalars["Boolean"]>;
    pngCompressionSpeed?: Maybe<Scalars["Int"]>;
    grayscale?: Maybe<Scalars["Boolean"]>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars["Int"]>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars["String"]>;
    rotate?: Maybe<Scalars["Int"]>;
    trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpResolutionsArgs = {
    width: Maybe<Scalars["Int"]>;
    height: Maybe<Scalars["Int"]>;
    base64Width: Maybe<Scalars["Int"]>;
    jpegProgressive?: Maybe<Scalars["Boolean"]>;
    pngCompressionSpeed?: Maybe<Scalars["Int"]>;
    grayscale?: Maybe<Scalars["Boolean"]>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars["Int"]>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars["String"]>;
    rotate?: Maybe<Scalars["Int"]>;
    trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpFluidArgs = {
    maxWidth: Maybe<Scalars["Int"]>;
    maxHeight: Maybe<Scalars["Int"]>;
    base64Width: Maybe<Scalars["Int"]>;
    grayscale?: Maybe<Scalars["Boolean"]>;
    jpegProgressive?: Maybe<Scalars["Boolean"]>;
    pngCompressionSpeed?: Maybe<Scalars["Int"]>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars["Int"]>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars["String"]>;
    rotate?: Maybe<Scalars["Int"]>;
    trim?: Maybe<Scalars["Float"]>;
    sizes?: Maybe<Scalars["String"]>;
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type ImageSharpSizesArgs = {
    maxWidth: Maybe<Scalars["Int"]>;
    maxHeight: Maybe<Scalars["Int"]>;
    base64Width: Maybe<Scalars["Int"]>;
    grayscale?: Maybe<Scalars["Boolean"]>;
    jpegProgressive?: Maybe<Scalars["Boolean"]>;
    pngCompressionSpeed?: Maybe<Scalars["Int"]>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars["Int"]>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars["String"]>;
    rotate?: Maybe<Scalars["Int"]>;
    trim?: Maybe<Scalars["Float"]>;
    sizes?: Maybe<Scalars["String"]>;
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type ImageSharpResizeArgs = {
    width: Maybe<Scalars["Int"]>;
    height: Maybe<Scalars["Int"]>;
    quality: Maybe<Scalars["Int"]>;
    jpegProgressive?: Maybe<Scalars["Boolean"]>;
    pngCompressionLevel?: Maybe<Scalars["Int"]>;
    pngCompressionSpeed?: Maybe<Scalars["Int"]>;
    grayscale?: Maybe<Scalars["Boolean"]>;
    duotone: Maybe<DuotoneGradient>;
    base64?: Maybe<Scalars["Boolean"]>;
    traceSVG: Maybe<Potrace>;
    toFormat?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars["String"]>;
    rotate?: Maybe<Scalars["Int"]>;
    trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpConnection = {
    __typename?: "ImageSharpConnection";
    totalCount: Scalars["Int"];
    edges: Array<ImageSharpEdge>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
    field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
    __typename?: "ImageSharpEdge";
    next: Maybe<ImageSharp>;
    node: ImageSharp;
    previous: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
    id = "id",
    fixed___base64 = "fixed___base64",
    fixed___tracedSVG = "fixed___tracedSVG",
    fixed___aspectRatio = "fixed___aspectRatio",
    fixed___width = "fixed___width",
    fixed___height = "fixed___height",
    fixed___src = "fixed___src",
    fixed___srcSet = "fixed___srcSet",
    fixed___srcWebp = "fixed___srcWebp",
    fixed___srcSetWebp = "fixed___srcSetWebp",
    fixed___originalName = "fixed___originalName",
    resolutions___base64 = "resolutions___base64",
    resolutions___tracedSVG = "resolutions___tracedSVG",
    resolutions___aspectRatio = "resolutions___aspectRatio",
    resolutions___width = "resolutions___width",
    resolutions___height = "resolutions___height",
    resolutions___src = "resolutions___src",
    resolutions___srcSet = "resolutions___srcSet",
    resolutions___srcWebp = "resolutions___srcWebp",
    resolutions___srcSetWebp = "resolutions___srcSetWebp",
    resolutions___originalName = "resolutions___originalName",
    fluid___base64 = "fluid___base64",
    fluid___tracedSVG = "fluid___tracedSVG",
    fluid___aspectRatio = "fluid___aspectRatio",
    fluid___src = "fluid___src",
    fluid___srcSet = "fluid___srcSet",
    fluid___srcWebp = "fluid___srcWebp",
    fluid___srcSetWebp = "fluid___srcSetWebp",
    fluid___sizes = "fluid___sizes",
    fluid___originalImg = "fluid___originalImg",
    fluid___originalName = "fluid___originalName",
    fluid___presentationWidth = "fluid___presentationWidth",
    fluid___presentationHeight = "fluid___presentationHeight",
    sizes___base64 = "sizes___base64",
    sizes___tracedSVG = "sizes___tracedSVG",
    sizes___aspectRatio = "sizes___aspectRatio",
    sizes___src = "sizes___src",
    sizes___srcSet = "sizes___srcSet",
    sizes___srcWebp = "sizes___srcWebp",
    sizes___srcSetWebp = "sizes___srcSetWebp",
    sizes___sizes = "sizes___sizes",
    sizes___originalImg = "sizes___originalImg",
    sizes___originalName = "sizes___originalName",
    sizes___presentationWidth = "sizes___presentationWidth",
    sizes___presentationHeight = "sizes___presentationHeight",
    original___width = "original___width",
    original___height = "original___height",
    original___src = "original___src",
    resize___src = "resize___src",
    resize___tracedSVG = "resize___tracedSVG",
    resize___width = "resize___width",
    resize___height = "resize___height",
    resize___aspectRatio = "resize___aspectRatio",
    resize___originalName = "resize___originalName",
    parent___id = "parent___id",
    parent___parent___id = "parent___parent___id",
    parent___parent___parent___id = "parent___parent___parent___id",
    parent___parent___parent___children = "parent___parent___parent___children",
    parent___parent___children = "parent___parent___children",
    parent___parent___children___id = "parent___parent___children___id",
    parent___parent___children___children = "parent___parent___children___children",
    parent___parent___internal___content = "parent___parent___internal___content",
    parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
    parent___parent___internal___description = "parent___parent___internal___description",
    parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
    parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
    parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
    parent___parent___internal___owner = "parent___parent___internal___owner",
    parent___parent___internal___type = "parent___parent___internal___type",
    parent___children = "parent___children",
    parent___children___id = "parent___children___id",
    parent___children___parent___id = "parent___children___parent___id",
    parent___children___parent___children = "parent___children___parent___children",
    parent___children___children = "parent___children___children",
    parent___children___children___id = "parent___children___children___id",
    parent___children___children___children = "parent___children___children___children",
    parent___children___internal___content = "parent___children___internal___content",
    parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
    parent___children___internal___description = "parent___children___internal___description",
    parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
    parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
    parent___children___internal___mediaType = "parent___children___internal___mediaType",
    parent___children___internal___owner = "parent___children___internal___owner",
    parent___children___internal___type = "parent___children___internal___type",
    parent___internal___content = "parent___internal___content",
    parent___internal___contentDigest = "parent___internal___contentDigest",
    parent___internal___description = "parent___internal___description",
    parent___internal___fieldOwners = "parent___internal___fieldOwners",
    parent___internal___ignoreType = "parent___internal___ignoreType",
    parent___internal___mediaType = "parent___internal___mediaType",
    parent___internal___owner = "parent___internal___owner",
    parent___internal___type = "parent___internal___type",
    children = "children",
    children___id = "children___id",
    children___parent___id = "children___parent___id",
    children___parent___parent___id = "children___parent___parent___id",
    children___parent___parent___children = "children___parent___parent___children",
    children___parent___children = "children___parent___children",
    children___parent___children___id = "children___parent___children___id",
    children___parent___children___children = "children___parent___children___children",
    children___parent___internal___content = "children___parent___internal___content",
    children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
    children___parent___internal___description = "children___parent___internal___description",
    children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
    children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
    children___parent___internal___mediaType = "children___parent___internal___mediaType",
    children___parent___internal___owner = "children___parent___internal___owner",
    children___parent___internal___type = "children___parent___internal___type",
    children___children = "children___children",
    children___children___id = "children___children___id",
    children___children___parent___id = "children___children___parent___id",
    children___children___parent___children = "children___children___parent___children",
    children___children___children = "children___children___children",
    children___children___children___id = "children___children___children___id",
    children___children___children___children = "children___children___children___children",
    children___children___internal___content = "children___children___internal___content",
    children___children___internal___contentDigest = "children___children___internal___contentDigest",
    children___children___internal___description = "children___children___internal___description",
    children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
    children___children___internal___ignoreType = "children___children___internal___ignoreType",
    children___children___internal___mediaType = "children___children___internal___mediaType",
    children___children___internal___owner = "children___children___internal___owner",
    children___children___internal___type = "children___children___internal___type",
    children___internal___content = "children___internal___content",
    children___internal___contentDigest = "children___internal___contentDigest",
    children___internal___description = "children___internal___description",
    children___internal___fieldOwners = "children___internal___fieldOwners",
    children___internal___ignoreType = "children___internal___ignoreType",
    children___internal___mediaType = "children___internal___mediaType",
    children___internal___owner = "children___internal___owner",
    children___internal___type = "children___internal___type",
    internal___content = "internal___content",
    internal___contentDigest = "internal___contentDigest",
    internal___description = "internal___description",
    internal___fieldOwners = "internal___fieldOwners",
    internal___ignoreType = "internal___ignoreType",
    internal___mediaType = "internal___mediaType",
    internal___owner = "internal___owner",
    internal___type = "internal___type",
}

export type ImageSharpFilterInput = {
    id: Maybe<StringQueryOperatorInput>;
    fixed: Maybe<ImageSharpFixedFilterInput>;
    resolutions: Maybe<ImageSharpResolutionsFilterInput>;
    fluid: Maybe<ImageSharpFluidFilterInput>;
    sizes: Maybe<ImageSharpSizesFilterInput>;
    original: Maybe<ImageSharpOriginalFilterInput>;
    resize: Maybe<ImageSharpResizeFilterInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
    __typename?: "ImageSharpFixed";
    base64: Maybe<Scalars["String"]>;
    tracedSVG: Maybe<Scalars["String"]>;
    aspectRatio: Maybe<Scalars["Float"]>;
    width: Maybe<Scalars["Float"]>;
    height: Maybe<Scalars["Float"]>;
    src: Maybe<Scalars["String"]>;
    srcSet: Maybe<Scalars["String"]>;
    srcWebp: Maybe<Scalars["String"]>;
    srcSetWebp: Maybe<Scalars["String"]>;
    originalName: Maybe<Scalars["String"]>;
};

export type ImageSharpFixedFilterInput = {
    base64: Maybe<StringQueryOperatorInput>;
    tracedSVG: Maybe<StringQueryOperatorInput>;
    aspectRatio: Maybe<FloatQueryOperatorInput>;
    width: Maybe<FloatQueryOperatorInput>;
    height: Maybe<FloatQueryOperatorInput>;
    src: Maybe<StringQueryOperatorInput>;
    srcSet: Maybe<StringQueryOperatorInput>;
    srcWebp: Maybe<StringQueryOperatorInput>;
    srcSetWebp: Maybe<StringQueryOperatorInput>;
    originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
    __typename?: "ImageSharpFluid";
    base64: Maybe<Scalars["String"]>;
    tracedSVG: Maybe<Scalars["String"]>;
    aspectRatio: Maybe<Scalars["Float"]>;
    src: Maybe<Scalars["String"]>;
    srcSet: Maybe<Scalars["String"]>;
    srcWebp: Maybe<Scalars["String"]>;
    srcSetWebp: Maybe<Scalars["String"]>;
    sizes: Maybe<Scalars["String"]>;
    originalImg: Maybe<Scalars["String"]>;
    originalName: Maybe<Scalars["String"]>;
    presentationWidth: Maybe<Scalars["Int"]>;
    presentationHeight: Maybe<Scalars["Int"]>;
};

export type ImageSharpFluidFilterInput = {
    base64: Maybe<StringQueryOperatorInput>;
    tracedSVG: Maybe<StringQueryOperatorInput>;
    aspectRatio: Maybe<FloatQueryOperatorInput>;
    src: Maybe<StringQueryOperatorInput>;
    srcSet: Maybe<StringQueryOperatorInput>;
    srcWebp: Maybe<StringQueryOperatorInput>;
    srcSetWebp: Maybe<StringQueryOperatorInput>;
    sizes: Maybe<StringQueryOperatorInput>;
    originalImg: Maybe<StringQueryOperatorInput>;
    originalName: Maybe<StringQueryOperatorInput>;
    presentationWidth: Maybe<IntQueryOperatorInput>;
    presentationHeight: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
    __typename?: "ImageSharpGroupConnection";
    totalCount: Scalars["Int"];
    edges: Array<ImageSharpEdge>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    field: Scalars["String"];
    fieldValue: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginal = {
    __typename?: "ImageSharpOriginal";
    width: Maybe<Scalars["Float"]>;
    height: Maybe<Scalars["Float"]>;
    src: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginalFilterInput = {
    width: Maybe<FloatQueryOperatorInput>;
    height: Maybe<FloatQueryOperatorInput>;
    src: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
    __typename?: "ImageSharpResize";
    src: Maybe<Scalars["String"]>;
    tracedSVG: Maybe<Scalars["String"]>;
    width: Maybe<Scalars["Int"]>;
    height: Maybe<Scalars["Int"]>;
    aspectRatio: Maybe<Scalars["Float"]>;
    originalName: Maybe<Scalars["String"]>;
};

export type ImageSharpResizeFilterInput = {
    src: Maybe<StringQueryOperatorInput>;
    tracedSVG: Maybe<StringQueryOperatorInput>;
    width: Maybe<IntQueryOperatorInput>;
    height: Maybe<IntQueryOperatorInput>;
    aspectRatio: Maybe<FloatQueryOperatorInput>;
    originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
    __typename?: "ImageSharpResolutions";
    base64: Maybe<Scalars["String"]>;
    tracedSVG: Maybe<Scalars["String"]>;
    aspectRatio: Maybe<Scalars["Float"]>;
    width: Maybe<Scalars["Float"]>;
    height: Maybe<Scalars["Float"]>;
    src: Maybe<Scalars["String"]>;
    srcSet: Maybe<Scalars["String"]>;
    srcWebp: Maybe<Scalars["String"]>;
    srcSetWebp: Maybe<Scalars["String"]>;
    originalName: Maybe<Scalars["String"]>;
};

export type ImageSharpResolutionsFilterInput = {
    base64: Maybe<StringQueryOperatorInput>;
    tracedSVG: Maybe<StringQueryOperatorInput>;
    aspectRatio: Maybe<FloatQueryOperatorInput>;
    width: Maybe<FloatQueryOperatorInput>;
    height: Maybe<FloatQueryOperatorInput>;
    src: Maybe<StringQueryOperatorInput>;
    srcSet: Maybe<StringQueryOperatorInput>;
    srcWebp: Maybe<StringQueryOperatorInput>;
    srcSetWebp: Maybe<StringQueryOperatorInput>;
    originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
    __typename?: "ImageSharpSizes";
    base64: Maybe<Scalars["String"]>;
    tracedSVG: Maybe<Scalars["String"]>;
    aspectRatio: Maybe<Scalars["Float"]>;
    src: Maybe<Scalars["String"]>;
    srcSet: Maybe<Scalars["String"]>;
    srcWebp: Maybe<Scalars["String"]>;
    srcSetWebp: Maybe<Scalars["String"]>;
    sizes: Maybe<Scalars["String"]>;
    originalImg: Maybe<Scalars["String"]>;
    originalName: Maybe<Scalars["String"]>;
    presentationWidth: Maybe<Scalars["Int"]>;
    presentationHeight: Maybe<Scalars["Int"]>;
};

export type ImageSharpSizesFilterInput = {
    base64: Maybe<StringQueryOperatorInput>;
    tracedSVG: Maybe<StringQueryOperatorInput>;
    aspectRatio: Maybe<FloatQueryOperatorInput>;
    src: Maybe<StringQueryOperatorInput>;
    srcSet: Maybe<StringQueryOperatorInput>;
    srcWebp: Maybe<StringQueryOperatorInput>;
    srcSetWebp: Maybe<StringQueryOperatorInput>;
    sizes: Maybe<StringQueryOperatorInput>;
    originalImg: Maybe<StringQueryOperatorInput>;
    originalName: Maybe<StringQueryOperatorInput>;
    presentationWidth: Maybe<IntQueryOperatorInput>;
    presentationHeight: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
    fields: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
    order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
    __typename?: "Internal";
    content: Maybe<Scalars["String"]>;
    contentDigest: Scalars["String"];
    description: Maybe<Scalars["String"]>;
    fieldOwners: Maybe<Array<Maybe<Scalars["String"]>>>;
    ignoreType: Maybe<Scalars["Boolean"]>;
    mediaType: Maybe<Scalars["String"]>;
    owner: Scalars["String"];
    type: Scalars["String"];
};

export type InternalFilterInput = {
    content: Maybe<StringQueryOperatorInput>;
    contentDigest: Maybe<StringQueryOperatorInput>;
    description: Maybe<StringQueryOperatorInput>;
    fieldOwners: Maybe<StringQueryOperatorInput>;
    ignoreType: Maybe<BooleanQueryOperatorInput>;
    mediaType: Maybe<StringQueryOperatorInput>;
    owner: Maybe<StringQueryOperatorInput>;
    type: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
    eq: Maybe<Scalars["Int"]>;
    ne: Maybe<Scalars["Int"]>;
    gt: Maybe<Scalars["Int"]>;
    gte: Maybe<Scalars["Int"]>;
    lt: Maybe<Scalars["Int"]>;
    lte: Maybe<Scalars["Int"]>;
    in: Maybe<Array<Maybe<Scalars["Int"]>>>;
    nin: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

/** Node Interface */
export type Node = {
    id: Scalars["ID"];
    parent: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type NodeFilterInput = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
    elemMatch: Maybe<NodeFilterInput>;
};

export type PageInfo = {
    __typename?: "PageInfo";
    currentPage: Scalars["Int"];
    hasPreviousPage: Scalars["Boolean"];
    hasNextPage: Scalars["Boolean"];
    itemCount: Scalars["Int"];
    pageCount: Scalars["Int"];
    perPage: Maybe<Scalars["Int"]>;
};

export type Potrace = {
    turnPolicy: Maybe<PotraceTurnPolicy>;
    turdSize: Maybe<Scalars["Float"]>;
    alphaMax: Maybe<Scalars["Float"]>;
    optCurve: Maybe<Scalars["Boolean"]>;
    optTolerance: Maybe<Scalars["Float"]>;
    threshold: Maybe<Scalars["Int"]>;
    blackOnWhite: Maybe<Scalars["Boolean"]>;
    color: Maybe<Scalars["String"]>;
    background: Maybe<Scalars["String"]>;
};

export enum PotraceTurnPolicy {
    TURNPOLICY_BLACK = "TURNPOLICY_BLACK",
    TURNPOLICY_WHITE = "TURNPOLICY_WHITE",
    TURNPOLICY_LEFT = "TURNPOLICY_LEFT",
    TURNPOLICY_RIGHT = "TURNPOLICY_RIGHT",
    TURNPOLICY_MINORITY = "TURNPOLICY_MINORITY",
    TURNPOLICY_MAJORITY = "TURNPOLICY_MAJORITY",
}

export type Query = {
    __typename?: "Query";
    imageSharp: Maybe<ImageSharp>;
    allImageSharp: Maybe<ImageSharpConnection>;
    file: Maybe<File>;
    allFile: Maybe<FileConnection>;
    sitePage: Maybe<SitePage>;
    allSitePage: Maybe<SitePageConnection>;
    sitePlugin: Maybe<SitePlugin>;
    allSitePlugin: Maybe<SitePluginConnection>;
    site: Maybe<Site>;
    allSite: Maybe<SiteConnection>;
    directory: Maybe<Directory>;
    allDirectory: Maybe<DirectoryConnection>;
    googleSheetLeveldataRow: Maybe<GoogleSheetLeveldataRow>;
    allGoogleSheetLeveldataRow: Maybe<GoogleSheetLeveldataRowConnection>;
    bgsizesCsv: Maybe<BgsizesCsv>;
    allBgsizesCsv: Maybe<BgsizesCsvConnection>;
};

export type QueryImageSharpArgs = {
    id: Maybe<StringQueryOperatorInput>;
    fixed: Maybe<ImageSharpFixedFilterInput>;
    resolutions: Maybe<ImageSharpResolutionsFilterInput>;
    fluid: Maybe<ImageSharpFluidFilterInput>;
    sizes: Maybe<ImageSharpSizesFilterInput>;
    original: Maybe<ImageSharpOriginalFilterInput>;
    resize: Maybe<ImageSharpResizeFilterInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
    filter: Maybe<ImageSharpFilterInput>;
    sort: Maybe<ImageSharpSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
};

export type QueryFileArgs = {
    birthtime: Maybe<DateQueryOperatorInput>;
    birthtimeMs: Maybe<FloatQueryOperatorInput>;
    sourceInstanceName: Maybe<StringQueryOperatorInput>;
    absolutePath: Maybe<StringQueryOperatorInput>;
    relativePath: Maybe<StringQueryOperatorInput>;
    extension: Maybe<StringQueryOperatorInput>;
    size: Maybe<IntQueryOperatorInput>;
    prettySize: Maybe<StringQueryOperatorInput>;
    modifiedTime: Maybe<DateQueryOperatorInput>;
    accessTime: Maybe<DateQueryOperatorInput>;
    changeTime: Maybe<DateQueryOperatorInput>;
    birthTime: Maybe<DateQueryOperatorInput>;
    root: Maybe<StringQueryOperatorInput>;
    dir: Maybe<StringQueryOperatorInput>;
    base: Maybe<StringQueryOperatorInput>;
    ext: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    relativeDirectory: Maybe<StringQueryOperatorInput>;
    dev: Maybe<IntQueryOperatorInput>;
    mode: Maybe<IntQueryOperatorInput>;
    nlink: Maybe<IntQueryOperatorInput>;
    uid: Maybe<IntQueryOperatorInput>;
    gid: Maybe<IntQueryOperatorInput>;
    rdev: Maybe<IntQueryOperatorInput>;
    blksize: Maybe<IntQueryOperatorInput>;
    ino: Maybe<IntQueryOperatorInput>;
    blocks: Maybe<IntQueryOperatorInput>;
    atimeMs: Maybe<FloatQueryOperatorInput>;
    mtimeMs: Maybe<FloatQueryOperatorInput>;
    ctimeMs: Maybe<FloatQueryOperatorInput>;
    atime: Maybe<DateQueryOperatorInput>;
    mtime: Maybe<DateQueryOperatorInput>;
    ctime: Maybe<DateQueryOperatorInput>;
    publicURL: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
    filter: Maybe<FileFilterInput>;
    sort: Maybe<FileSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
};

export type QuerySitePageArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    path: Maybe<StringQueryOperatorInput>;
    internalComponentName: Maybe<StringQueryOperatorInput>;
    component: Maybe<StringQueryOperatorInput>;
    componentChunkName: Maybe<StringQueryOperatorInput>;
    isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
    context: Maybe<SitePageContextFilterInput>;
    pluginCreator: Maybe<SitePluginFilterInput>;
    pluginCreatorId: Maybe<StringQueryOperatorInput>;
    componentPath: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
    filter: Maybe<SitePageFilterInput>;
    sort: Maybe<SitePageSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
};

export type QuerySitePluginArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    resolve: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    version: Maybe<StringQueryOperatorInput>;
    pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs: Maybe<StringQueryOperatorInput>;
    browserAPIs: Maybe<StringQueryOperatorInput>;
    ssrAPIs: Maybe<StringQueryOperatorInput>;
    pluginFilepath: Maybe<StringQueryOperatorInput>;
    packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
    filter: Maybe<SitePluginFilterInput>;
    sort: Maybe<SitePluginSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
};

export type QuerySiteArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
    port: Maybe<IntQueryOperatorInput>;
    host: Maybe<StringQueryOperatorInput>;
    pathPrefix: Maybe<StringQueryOperatorInput>;
    polyfill: Maybe<BooleanQueryOperatorInput>;
    buildTime: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteArgs = {
    filter: Maybe<SiteFilterInput>;
    sort: Maybe<SiteSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
};

export type QueryDirectoryArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    sourceInstanceName: Maybe<StringQueryOperatorInput>;
    absolutePath: Maybe<StringQueryOperatorInput>;
    relativePath: Maybe<StringQueryOperatorInput>;
    extension: Maybe<StringQueryOperatorInput>;
    size: Maybe<IntQueryOperatorInput>;
    prettySize: Maybe<StringQueryOperatorInput>;
    modifiedTime: Maybe<DateQueryOperatorInput>;
    accessTime: Maybe<DateQueryOperatorInput>;
    changeTime: Maybe<DateQueryOperatorInput>;
    birthTime: Maybe<DateQueryOperatorInput>;
    root: Maybe<StringQueryOperatorInput>;
    dir: Maybe<StringQueryOperatorInput>;
    base: Maybe<StringQueryOperatorInput>;
    ext: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    relativeDirectory: Maybe<StringQueryOperatorInput>;
    dev: Maybe<IntQueryOperatorInput>;
    mode: Maybe<IntQueryOperatorInput>;
    nlink: Maybe<IntQueryOperatorInput>;
    uid: Maybe<IntQueryOperatorInput>;
    gid: Maybe<IntQueryOperatorInput>;
    rdev: Maybe<IntQueryOperatorInput>;
    blksize: Maybe<IntQueryOperatorInput>;
    ino: Maybe<IntQueryOperatorInput>;
    blocks: Maybe<IntQueryOperatorInput>;
    atimeMs: Maybe<FloatQueryOperatorInput>;
    mtimeMs: Maybe<FloatQueryOperatorInput>;
    ctimeMs: Maybe<FloatQueryOperatorInput>;
    birthtimeMs: Maybe<FloatQueryOperatorInput>;
    atime: Maybe<DateQueryOperatorInput>;
    mtime: Maybe<DateQueryOperatorInput>;
    ctime: Maybe<DateQueryOperatorInput>;
    birthtime: Maybe<DateQueryOperatorInput>;
};

export type QueryAllDirectoryArgs = {
    filter: Maybe<DirectoryFilterInput>;
    sort: Maybe<DirectorySortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
};

export type QueryGoogleSheetLeveldataRowArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    gameNameUsa: Maybe<StringQueryOperatorInput>;
    levelId: Maybe<IntQueryOperatorInput>;
    levelName: Maybe<StringQueryOperatorInput>;
    imageFileName: Maybe<StringQueryOperatorInput>;
    animated: Maybe<BooleanQueryOperatorInput>;
    system: Maybe<StringQueryOperatorInput>;
    developer: Maybe<StringQueryOperatorInput>;
    year: Maybe<IntQueryOperatorInput>;
    series: Maybe<StringQueryOperatorInput>;
    labels: Maybe<StringQueryOperatorInput>;
};

export type QueryAllGoogleSheetLeveldataRowArgs = {
    filter: Maybe<GoogleSheetLeveldataRowFilterInput>;
    sort: Maybe<GoogleSheetLeveldataRowSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
};

export type QueryBgsizesCsvArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    file: Maybe<StringQueryOperatorInput>;
    width: Maybe<StringQueryOperatorInput>;
    height: Maybe<StringQueryOperatorInput>;
};

export type QueryAllBgsizesCsvArgs = {
    filter: Maybe<BgsizesCsvFilterInput>;
    sort: Maybe<BgsizesCsvSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
};

export type Site = Node & {
    __typename?: "Site";
    id: Scalars["ID"];
    parent: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    siteMetadata: Maybe<SiteSiteMetadata>;
    port: Maybe<Scalars["Int"]>;
    host: Maybe<Scalars["String"]>;
    pathPrefix: Maybe<Scalars["String"]>;
    polyfill: Maybe<Scalars["Boolean"]>;
    buildTime: Maybe<Scalars["Date"]>;
};

export type SiteBuildTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
};

export type SiteConnection = {
    __typename?: "SiteConnection";
    totalCount: Scalars["Int"];
    edges: Array<SiteEdge>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
    field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SiteFieldsEnum;
};

export type SiteEdge = {
    __typename?: "SiteEdge";
    next: Maybe<Site>;
    node: Site;
    previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
    id = "id",
    parent___id = "parent___id",
    parent___parent___id = "parent___parent___id",
    parent___parent___parent___id = "parent___parent___parent___id",
    parent___parent___parent___children = "parent___parent___parent___children",
    parent___parent___children = "parent___parent___children",
    parent___parent___children___id = "parent___parent___children___id",
    parent___parent___children___children = "parent___parent___children___children",
    parent___parent___internal___content = "parent___parent___internal___content",
    parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
    parent___parent___internal___description = "parent___parent___internal___description",
    parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
    parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
    parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
    parent___parent___internal___owner = "parent___parent___internal___owner",
    parent___parent___internal___type = "parent___parent___internal___type",
    parent___children = "parent___children",
    parent___children___id = "parent___children___id",
    parent___children___parent___id = "parent___children___parent___id",
    parent___children___parent___children = "parent___children___parent___children",
    parent___children___children = "parent___children___children",
    parent___children___children___id = "parent___children___children___id",
    parent___children___children___children = "parent___children___children___children",
    parent___children___internal___content = "parent___children___internal___content",
    parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
    parent___children___internal___description = "parent___children___internal___description",
    parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
    parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
    parent___children___internal___mediaType = "parent___children___internal___mediaType",
    parent___children___internal___owner = "parent___children___internal___owner",
    parent___children___internal___type = "parent___children___internal___type",
    parent___internal___content = "parent___internal___content",
    parent___internal___contentDigest = "parent___internal___contentDigest",
    parent___internal___description = "parent___internal___description",
    parent___internal___fieldOwners = "parent___internal___fieldOwners",
    parent___internal___ignoreType = "parent___internal___ignoreType",
    parent___internal___mediaType = "parent___internal___mediaType",
    parent___internal___owner = "parent___internal___owner",
    parent___internal___type = "parent___internal___type",
    children = "children",
    children___id = "children___id",
    children___parent___id = "children___parent___id",
    children___parent___parent___id = "children___parent___parent___id",
    children___parent___parent___children = "children___parent___parent___children",
    children___parent___children = "children___parent___children",
    children___parent___children___id = "children___parent___children___id",
    children___parent___children___children = "children___parent___children___children",
    children___parent___internal___content = "children___parent___internal___content",
    children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
    children___parent___internal___description = "children___parent___internal___description",
    children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
    children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
    children___parent___internal___mediaType = "children___parent___internal___mediaType",
    children___parent___internal___owner = "children___parent___internal___owner",
    children___parent___internal___type = "children___parent___internal___type",
    children___children = "children___children",
    children___children___id = "children___children___id",
    children___children___parent___id = "children___children___parent___id",
    children___children___parent___children = "children___children___parent___children",
    children___children___children = "children___children___children",
    children___children___children___id = "children___children___children___id",
    children___children___children___children = "children___children___children___children",
    children___children___internal___content = "children___children___internal___content",
    children___children___internal___contentDigest = "children___children___internal___contentDigest",
    children___children___internal___description = "children___children___internal___description",
    children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
    children___children___internal___ignoreType = "children___children___internal___ignoreType",
    children___children___internal___mediaType = "children___children___internal___mediaType",
    children___children___internal___owner = "children___children___internal___owner",
    children___children___internal___type = "children___children___internal___type",
    children___internal___content = "children___internal___content",
    children___internal___contentDigest = "children___internal___contentDigest",
    children___internal___description = "children___internal___description",
    children___internal___fieldOwners = "children___internal___fieldOwners",
    children___internal___ignoreType = "children___internal___ignoreType",
    children___internal___mediaType = "children___internal___mediaType",
    children___internal___owner = "children___internal___owner",
    children___internal___type = "children___internal___type",
    internal___content = "internal___content",
    internal___contentDigest = "internal___contentDigest",
    internal___description = "internal___description",
    internal___fieldOwners = "internal___fieldOwners",
    internal___ignoreType = "internal___ignoreType",
    internal___mediaType = "internal___mediaType",
    internal___owner = "internal___owner",
    internal___type = "internal___type",
    siteMetadata___title = "siteMetadata___title",
    siteMetadata___description = "siteMetadata___description",
    siteMetadata___author = "siteMetadata___author",
    port = "port",
    host = "host",
    pathPrefix = "pathPrefix",
    polyfill = "polyfill",
    buildTime = "buildTime",
}

export type SiteFilterInput = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
    port: Maybe<IntQueryOperatorInput>;
    host: Maybe<StringQueryOperatorInput>;
    pathPrefix: Maybe<StringQueryOperatorInput>;
    polyfill: Maybe<BooleanQueryOperatorInput>;
    buildTime: Maybe<DateQueryOperatorInput>;
};

export type SiteGroupConnection = {
    __typename?: "SiteGroupConnection";
    totalCount: Scalars["Int"];
    edges: Array<SiteEdge>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    field: Scalars["String"];
    fieldValue: Maybe<Scalars["String"]>;
};

export type SitePage = Node & {
    __typename?: "SitePage";
    id: Scalars["ID"];
    parent: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    path: Maybe<Scalars["String"]>;
    internalComponentName: Maybe<Scalars["String"]>;
    component: Maybe<Scalars["String"]>;
    componentChunkName: Maybe<Scalars["String"]>;
    isCreatedByStatefulCreatePages: Maybe<Scalars["Boolean"]>;
    context: Maybe<SitePageContext>;
    pluginCreator: Maybe<SitePlugin>;
    pluginCreatorId: Maybe<Scalars["String"]>;
    componentPath: Maybe<Scalars["String"]>;
};

export type SitePageConnection = {
    __typename?: "SitePageConnection";
    totalCount: Scalars["Int"];
    edges: Array<SitePageEdge>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
    field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SitePageFieldsEnum;
};

export type SitePageContext = {
    __typename?: "SitePageContext";
    currentId: Maybe<Scalars["Int"]>;
    nextId: Maybe<Scalars["Int"]>;
    prevId: Maybe<Scalars["Int"]>;
    mainImageRelativePath: Maybe<Scalars["String"]>;
    bgImageRelativePath: Maybe<Scalars["String"]>;
    mainImageRegex: Maybe<Scalars["String"]>;
    fullscreen: Maybe<Scalars["Boolean"]>;
    labels: Maybe<Array<Maybe<Scalars["String"]>>>;
    currentLabel: Maybe<Scalars["String"]>;
    filter: Maybe<SitePageContextFilter>;
    listType: Maybe<Scalars["String"]>;
    listTypeValue: Maybe<Scalars["String"]>;
    thumbnails: Maybe<Array<Maybe<SitePageContextThumbnails>>>;
};

export type SitePageContextFilter = {
    __typename?: "SitePageContextFilter";
    year: Maybe<SitePageContextFilterYear>;
    system: Maybe<SitePageContextFilterSystem>;
    series: Maybe<SitePageContextFilterSeries>;
    developer: Maybe<SitePageContextFilterDeveloper>;
    gameNameUsa: Maybe<SitePageContextFilterGameNameUsa>;
};

export type SitePageContextFilterDeveloper = {
    __typename?: "SitePageContextFilterDeveloper";
    eq: Maybe<Scalars["String"]>;
};

export type SitePageContextFilterDeveloperInput = {
    eq: Maybe<Scalars["String"]>;
};

export type SitePageContextFilterGameNameUsa = {
    __typename?: "SitePageContextFilterGameNameUsa";
    eq: Maybe<Scalars["String"]>;
};

export type SitePageContextFilterGameNameUsaInput = {
    eq: Maybe<Scalars["String"]>;
};

export type SitePageContextFilterInput = {
    year: Maybe<SitePageContextFilterYearInput>;
    system: Maybe<SitePageContextFilterSystemInput>;
    series: Maybe<SitePageContextFilterSeriesInput>;
    developer: Maybe<SitePageContextFilterDeveloperInput>;
    gameNameUsa: Maybe<SitePageContextFilterGameNameUsaInput>;
};

export type SitePageContextFilterSeries = {
    __typename?: "SitePageContextFilterSeries";
    eq: Maybe<Scalars["String"]>;
};

export type SitePageContextFilterSeriesInput = {
    eq: Maybe<Scalars["String"]>;
};

export type SitePageContextFilterSystem = {
    __typename?: "SitePageContextFilterSystem";
    eq: Maybe<Scalars["String"]>;
};

export type SitePageContextFilterSystemInput = {
    eq: Maybe<Scalars["String"]>;
};

export type SitePageContextFilterYear = {
    __typename?: "SitePageContextFilterYear";
    eq: Maybe<Scalars["Int"]>;
};

export type SitePageContextFilterYearInput = {
    eq: Maybe<Scalars["Int"]>;
};

export type SitePageContextThumbnails = {
    __typename?: "SitePageContextThumbnails";
    publicURL: Maybe<Scalars["String"]>;
    width: Maybe<Scalars["Int"]>;
    height: Maybe<Scalars["Int"]>;
    dataUrl: Maybe<Scalars["String"]>;
};

export type SitePageEdge = {
    __typename?: "SitePageEdge";
    next: Maybe<SitePage>;
    node: SitePage;
    previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
    id = "id",
    parent___id = "parent___id",
    parent___parent___id = "parent___parent___id",
    parent___parent___parent___id = "parent___parent___parent___id",
    parent___parent___parent___children = "parent___parent___parent___children",
    parent___parent___children = "parent___parent___children",
    parent___parent___children___id = "parent___parent___children___id",
    parent___parent___children___children = "parent___parent___children___children",
    parent___parent___internal___content = "parent___parent___internal___content",
    parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
    parent___parent___internal___description = "parent___parent___internal___description",
    parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
    parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
    parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
    parent___parent___internal___owner = "parent___parent___internal___owner",
    parent___parent___internal___type = "parent___parent___internal___type",
    parent___children = "parent___children",
    parent___children___id = "parent___children___id",
    parent___children___parent___id = "parent___children___parent___id",
    parent___children___parent___children = "parent___children___parent___children",
    parent___children___children = "parent___children___children",
    parent___children___children___id = "parent___children___children___id",
    parent___children___children___children = "parent___children___children___children",
    parent___children___internal___content = "parent___children___internal___content",
    parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
    parent___children___internal___description = "parent___children___internal___description",
    parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
    parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
    parent___children___internal___mediaType = "parent___children___internal___mediaType",
    parent___children___internal___owner = "parent___children___internal___owner",
    parent___children___internal___type = "parent___children___internal___type",
    parent___internal___content = "parent___internal___content",
    parent___internal___contentDigest = "parent___internal___contentDigest",
    parent___internal___description = "parent___internal___description",
    parent___internal___fieldOwners = "parent___internal___fieldOwners",
    parent___internal___ignoreType = "parent___internal___ignoreType",
    parent___internal___mediaType = "parent___internal___mediaType",
    parent___internal___owner = "parent___internal___owner",
    parent___internal___type = "parent___internal___type",
    children = "children",
    children___id = "children___id",
    children___parent___id = "children___parent___id",
    children___parent___parent___id = "children___parent___parent___id",
    children___parent___parent___children = "children___parent___parent___children",
    children___parent___children = "children___parent___children",
    children___parent___children___id = "children___parent___children___id",
    children___parent___children___children = "children___parent___children___children",
    children___parent___internal___content = "children___parent___internal___content",
    children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
    children___parent___internal___description = "children___parent___internal___description",
    children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
    children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
    children___parent___internal___mediaType = "children___parent___internal___mediaType",
    children___parent___internal___owner = "children___parent___internal___owner",
    children___parent___internal___type = "children___parent___internal___type",
    children___children = "children___children",
    children___children___id = "children___children___id",
    children___children___parent___id = "children___children___parent___id",
    children___children___parent___children = "children___children___parent___children",
    children___children___children = "children___children___children",
    children___children___children___id = "children___children___children___id",
    children___children___children___children = "children___children___children___children",
    children___children___internal___content = "children___children___internal___content",
    children___children___internal___contentDigest = "children___children___internal___contentDigest",
    children___children___internal___description = "children___children___internal___description",
    children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
    children___children___internal___ignoreType = "children___children___internal___ignoreType",
    children___children___internal___mediaType = "children___children___internal___mediaType",
    children___children___internal___owner = "children___children___internal___owner",
    children___children___internal___type = "children___children___internal___type",
    children___internal___content = "children___internal___content",
    children___internal___contentDigest = "children___internal___contentDigest",
    children___internal___description = "children___internal___description",
    children___internal___fieldOwners = "children___internal___fieldOwners",
    children___internal___ignoreType = "children___internal___ignoreType",
    children___internal___mediaType = "children___internal___mediaType",
    children___internal___owner = "children___internal___owner",
    children___internal___type = "children___internal___type",
    internal___content = "internal___content",
    internal___contentDigest = "internal___contentDigest",
    internal___description = "internal___description",
    internal___fieldOwners = "internal___fieldOwners",
    internal___ignoreType = "internal___ignoreType",
    internal___mediaType = "internal___mediaType",
    internal___owner = "internal___owner",
    internal___type = "internal___type",
    path = "path",
    internalComponentName = "internalComponentName",
    component = "component",
    componentChunkName = "componentChunkName",
    isCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
    context___currentId = "context___currentId",
    context___nextId = "context___nextId",
    context___prevId = "context___prevId",
    context___mainImageRelativePath = "context___mainImageRelativePath",
    context___bgImageRelativePath = "context___bgImageRelativePath",
    context___mainImageRegex = "context___mainImageRegex",
    context___fullscreen = "context___fullscreen",
    context___labels = "context___labels",
    context___currentLabel = "context___currentLabel",
    context___filter___year___eq = "context___filter___year___eq",
    context___filter___system___eq = "context___filter___system___eq",
    context___filter___series___eq = "context___filter___series___eq",
    context___filter___developer___eq = "context___filter___developer___eq",
    context___filter___gameNameUsa___eq = "context___filter___gameNameUsa___eq",
    context___listType = "context___listType",
    context___listTypeValue = "context___listTypeValue",
    context___thumbnails = "context___thumbnails",
    context___thumbnails___publicURL = "context___thumbnails___publicURL",
    context___thumbnails___width = "context___thumbnails___width",
    context___thumbnails___height = "context___thumbnails___height",
    context___thumbnails___dataUrl = "context___thumbnails___dataUrl",
    pluginCreator___id = "pluginCreator___id",
    pluginCreator___parent___id = "pluginCreator___parent___id",
    pluginCreator___parent___parent___id = "pluginCreator___parent___parent___id",
    pluginCreator___parent___parent___children = "pluginCreator___parent___parent___children",
    pluginCreator___parent___children = "pluginCreator___parent___children",
    pluginCreator___parent___children___id = "pluginCreator___parent___children___id",
    pluginCreator___parent___children___children = "pluginCreator___parent___children___children",
    pluginCreator___parent___internal___content = "pluginCreator___parent___internal___content",
    pluginCreator___parent___internal___contentDigest = "pluginCreator___parent___internal___contentDigest",
    pluginCreator___parent___internal___description = "pluginCreator___parent___internal___description",
    pluginCreator___parent___internal___fieldOwners = "pluginCreator___parent___internal___fieldOwners",
    pluginCreator___parent___internal___ignoreType = "pluginCreator___parent___internal___ignoreType",
    pluginCreator___parent___internal___mediaType = "pluginCreator___parent___internal___mediaType",
    pluginCreator___parent___internal___owner = "pluginCreator___parent___internal___owner",
    pluginCreator___parent___internal___type = "pluginCreator___parent___internal___type",
    pluginCreator___children = "pluginCreator___children",
    pluginCreator___children___id = "pluginCreator___children___id",
    pluginCreator___children___parent___id = "pluginCreator___children___parent___id",
    pluginCreator___children___parent___children = "pluginCreator___children___parent___children",
    pluginCreator___children___children = "pluginCreator___children___children",
    pluginCreator___children___children___id = "pluginCreator___children___children___id",
    pluginCreator___children___children___children = "pluginCreator___children___children___children",
    pluginCreator___children___internal___content = "pluginCreator___children___internal___content",
    pluginCreator___children___internal___contentDigest = "pluginCreator___children___internal___contentDigest",
    pluginCreator___children___internal___description = "pluginCreator___children___internal___description",
    pluginCreator___children___internal___fieldOwners = "pluginCreator___children___internal___fieldOwners",
    pluginCreator___children___internal___ignoreType = "pluginCreator___children___internal___ignoreType",
    pluginCreator___children___internal___mediaType = "pluginCreator___children___internal___mediaType",
    pluginCreator___children___internal___owner = "pluginCreator___children___internal___owner",
    pluginCreator___children___internal___type = "pluginCreator___children___internal___type",
    pluginCreator___internal___content = "pluginCreator___internal___content",
    pluginCreator___internal___contentDigest = "pluginCreator___internal___contentDigest",
    pluginCreator___internal___description = "pluginCreator___internal___description",
    pluginCreator___internal___fieldOwners = "pluginCreator___internal___fieldOwners",
    pluginCreator___internal___ignoreType = "pluginCreator___internal___ignoreType",
    pluginCreator___internal___mediaType = "pluginCreator___internal___mediaType",
    pluginCreator___internal___owner = "pluginCreator___internal___owner",
    pluginCreator___internal___type = "pluginCreator___internal___type",
    pluginCreator___resolve = "pluginCreator___resolve",
    pluginCreator___name = "pluginCreator___name",
    pluginCreator___version = "pluginCreator___version",
    pluginCreator___pluginOptions___name = "pluginCreator___pluginOptions___name",
    pluginCreator___pluginOptions___path = "pluginCreator___pluginOptions___path",
    pluginCreator___pluginOptions___short_name = "pluginCreator___pluginOptions___short_name",
    pluginCreator___pluginOptions___start_url = "pluginCreator___pluginOptions___start_url",
    pluginCreator___pluginOptions___background_color = "pluginCreator___pluginOptions___background_color",
    pluginCreator___pluginOptions___theme_color = "pluginCreator___pluginOptions___theme_color",
    pluginCreator___pluginOptions___display = "pluginCreator___pluginOptions___display",
    pluginCreator___pluginOptions___icon = "pluginCreator___pluginOptions___icon",
    pluginCreator___pluginOptions___spreadsheetId = "pluginCreator___pluginOptions___spreadsheetId",
    pluginCreator___pluginOptions___worksheetTitle = "pluginCreator___pluginOptions___worksheetTitle",
    pluginCreator___pluginOptions___credentials___type = "pluginCreator___pluginOptions___credentials___type",
    pluginCreator___pluginOptions___credentials___project_id = "pluginCreator___pluginOptions___credentials___project_id",
    pluginCreator___pluginOptions___credentials___private_key_id = "pluginCreator___pluginOptions___credentials___private_key_id",
    pluginCreator___pluginOptions___credentials___private_key = "pluginCreator___pluginOptions___credentials___private_key",
    pluginCreator___pluginOptions___credentials___client_email = "pluginCreator___pluginOptions___credentials___client_email",
    pluginCreator___pluginOptions___credentials___client_id = "pluginCreator___pluginOptions___credentials___client_id",
    pluginCreator___pluginOptions___credentials___auth_uri = "pluginCreator___pluginOptions___credentials___auth_uri",
    pluginCreator___pluginOptions___credentials___token_uri = "pluginCreator___pluginOptions___credentials___token_uri",
    pluginCreator___pluginOptions___credentials___auth_provider_x509_cert_url = "pluginCreator___pluginOptions___credentials___auth_provider_x509_cert_url",
    pluginCreator___pluginOptions___credentials___client_x509_cert_url = "pluginCreator___pluginOptions___credentials___client_x509_cert_url",
    pluginCreator___pluginOptions___trackingId = "pluginCreator___pluginOptions___trackingId",
    pluginCreator___pluginOptions___logo = "pluginCreator___pluginOptions___logo",
    pluginCreator___pluginOptions___appName = "pluginCreator___pluginOptions___appName",
    pluginCreator___pluginOptions___icons___android = "pluginCreator___pluginOptions___icons___android",
    pluginCreator___pluginOptions___icons___appleIcon = "pluginCreator___pluginOptions___icons___appleIcon",
    pluginCreator___pluginOptions___icons___appleStartup = "pluginCreator___pluginOptions___icons___appleStartup",
    pluginCreator___pluginOptions___icons___coast = "pluginCreator___pluginOptions___icons___coast",
    pluginCreator___pluginOptions___icons___favicons = "pluginCreator___pluginOptions___icons___favicons",
    pluginCreator___pluginOptions___icons___firefox = "pluginCreator___pluginOptions___icons___firefox",
    pluginCreator___pluginOptions___icons___yandex = "pluginCreator___pluginOptions___icons___yandex",
    pluginCreator___pluginOptions___icons___windows = "pluginCreator___pluginOptions___icons___windows",
    pluginCreator___pluginOptions___pathCheck = "pluginCreator___pluginOptions___pathCheck",
    pluginCreator___nodeAPIs = "pluginCreator___nodeAPIs",
    pluginCreator___browserAPIs = "pluginCreator___browserAPIs",
    pluginCreator___ssrAPIs = "pluginCreator___ssrAPIs",
    pluginCreator___pluginFilepath = "pluginCreator___pluginFilepath",
    pluginCreator___packageJson___name = "pluginCreator___packageJson___name",
    pluginCreator___packageJson___description = "pluginCreator___packageJson___description",
    pluginCreator___packageJson___version = "pluginCreator___packageJson___version",
    pluginCreator___packageJson___main = "pluginCreator___packageJson___main",
    pluginCreator___packageJson___author = "pluginCreator___packageJson___author",
    pluginCreator___packageJson___license = "pluginCreator___packageJson___license",
    pluginCreator___packageJson___dependencies = "pluginCreator___packageJson___dependencies",
    pluginCreator___packageJson___dependencies___name = "pluginCreator___packageJson___dependencies___name",
    pluginCreator___packageJson___dependencies___version = "pluginCreator___packageJson___dependencies___version",
    pluginCreator___packageJson___devDependencies = "pluginCreator___packageJson___devDependencies",
    pluginCreator___packageJson___devDependencies___name = "pluginCreator___packageJson___devDependencies___name",
    pluginCreator___packageJson___devDependencies___version = "pluginCreator___packageJson___devDependencies___version",
    pluginCreator___packageJson___peerDependencies = "pluginCreator___packageJson___peerDependencies",
    pluginCreator___packageJson___peerDependencies___name = "pluginCreator___packageJson___peerDependencies___name",
    pluginCreator___packageJson___peerDependencies___version = "pluginCreator___packageJson___peerDependencies___version",
    pluginCreator___packageJson___keywords = "pluginCreator___packageJson___keywords",
    pluginCreatorId = "pluginCreatorId",
    componentPath = "componentPath",
}

export type SitePageFilterInput = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    path: Maybe<StringQueryOperatorInput>;
    internalComponentName: Maybe<StringQueryOperatorInput>;
    component: Maybe<StringQueryOperatorInput>;
    componentChunkName: Maybe<StringQueryOperatorInput>;
    isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
    context: Maybe<SitePageContextFilterInput>;
    pluginCreator: Maybe<SitePluginFilterInput>;
    pluginCreatorId: Maybe<StringQueryOperatorInput>;
    componentPath: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
    __typename?: "SitePageGroupConnection";
    totalCount: Scalars["Int"];
    edges: Array<SitePageEdge>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    field: Scalars["String"];
    fieldValue: Maybe<Scalars["String"]>;
};

export type SitePageSortInput = {
    fields: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
    order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
    __typename?: "SitePlugin";
    id: Scalars["ID"];
    parent: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    resolve: Maybe<Scalars["String"]>;
    name: Maybe<Scalars["String"]>;
    version: Maybe<Scalars["String"]>;
    pluginOptions: Maybe<SitePluginPluginOptions>;
    nodeAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
    browserAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
    ssrAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
    pluginFilepath: Maybe<Scalars["String"]>;
    packageJson: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
    __typename?: "SitePluginConnection";
    totalCount: Scalars["Int"];
    edges: Array<SitePluginEdge>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
    field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
    __typename?: "SitePluginEdge";
    next: Maybe<SitePlugin>;
    node: SitePlugin;
    previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
    id = "id",
    parent___id = "parent___id",
    parent___parent___id = "parent___parent___id",
    parent___parent___parent___id = "parent___parent___parent___id",
    parent___parent___parent___children = "parent___parent___parent___children",
    parent___parent___children = "parent___parent___children",
    parent___parent___children___id = "parent___parent___children___id",
    parent___parent___children___children = "parent___parent___children___children",
    parent___parent___internal___content = "parent___parent___internal___content",
    parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
    parent___parent___internal___description = "parent___parent___internal___description",
    parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
    parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
    parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
    parent___parent___internal___owner = "parent___parent___internal___owner",
    parent___parent___internal___type = "parent___parent___internal___type",
    parent___children = "parent___children",
    parent___children___id = "parent___children___id",
    parent___children___parent___id = "parent___children___parent___id",
    parent___children___parent___children = "parent___children___parent___children",
    parent___children___children = "parent___children___children",
    parent___children___children___id = "parent___children___children___id",
    parent___children___children___children = "parent___children___children___children",
    parent___children___internal___content = "parent___children___internal___content",
    parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
    parent___children___internal___description = "parent___children___internal___description",
    parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
    parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
    parent___children___internal___mediaType = "parent___children___internal___mediaType",
    parent___children___internal___owner = "parent___children___internal___owner",
    parent___children___internal___type = "parent___children___internal___type",
    parent___internal___content = "parent___internal___content",
    parent___internal___contentDigest = "parent___internal___contentDigest",
    parent___internal___description = "parent___internal___description",
    parent___internal___fieldOwners = "parent___internal___fieldOwners",
    parent___internal___ignoreType = "parent___internal___ignoreType",
    parent___internal___mediaType = "parent___internal___mediaType",
    parent___internal___owner = "parent___internal___owner",
    parent___internal___type = "parent___internal___type",
    children = "children",
    children___id = "children___id",
    children___parent___id = "children___parent___id",
    children___parent___parent___id = "children___parent___parent___id",
    children___parent___parent___children = "children___parent___parent___children",
    children___parent___children = "children___parent___children",
    children___parent___children___id = "children___parent___children___id",
    children___parent___children___children = "children___parent___children___children",
    children___parent___internal___content = "children___parent___internal___content",
    children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
    children___parent___internal___description = "children___parent___internal___description",
    children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
    children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
    children___parent___internal___mediaType = "children___parent___internal___mediaType",
    children___parent___internal___owner = "children___parent___internal___owner",
    children___parent___internal___type = "children___parent___internal___type",
    children___children = "children___children",
    children___children___id = "children___children___id",
    children___children___parent___id = "children___children___parent___id",
    children___children___parent___children = "children___children___parent___children",
    children___children___children = "children___children___children",
    children___children___children___id = "children___children___children___id",
    children___children___children___children = "children___children___children___children",
    children___children___internal___content = "children___children___internal___content",
    children___children___internal___contentDigest = "children___children___internal___contentDigest",
    children___children___internal___description = "children___children___internal___description",
    children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
    children___children___internal___ignoreType = "children___children___internal___ignoreType",
    children___children___internal___mediaType = "children___children___internal___mediaType",
    children___children___internal___owner = "children___children___internal___owner",
    children___children___internal___type = "children___children___internal___type",
    children___internal___content = "children___internal___content",
    children___internal___contentDigest = "children___internal___contentDigest",
    children___internal___description = "children___internal___description",
    children___internal___fieldOwners = "children___internal___fieldOwners",
    children___internal___ignoreType = "children___internal___ignoreType",
    children___internal___mediaType = "children___internal___mediaType",
    children___internal___owner = "children___internal___owner",
    children___internal___type = "children___internal___type",
    internal___content = "internal___content",
    internal___contentDigest = "internal___contentDigest",
    internal___description = "internal___description",
    internal___fieldOwners = "internal___fieldOwners",
    internal___ignoreType = "internal___ignoreType",
    internal___mediaType = "internal___mediaType",
    internal___owner = "internal___owner",
    internal___type = "internal___type",
    resolve = "resolve",
    name = "name",
    version = "version",
    pluginOptions___name = "pluginOptions___name",
    pluginOptions___path = "pluginOptions___path",
    pluginOptions___short_name = "pluginOptions___short_name",
    pluginOptions___start_url = "pluginOptions___start_url",
    pluginOptions___background_color = "pluginOptions___background_color",
    pluginOptions___theme_color = "pluginOptions___theme_color",
    pluginOptions___display = "pluginOptions___display",
    pluginOptions___icon = "pluginOptions___icon",
    pluginOptions___spreadsheetId = "pluginOptions___spreadsheetId",
    pluginOptions___worksheetTitle = "pluginOptions___worksheetTitle",
    pluginOptions___credentials___type = "pluginOptions___credentials___type",
    pluginOptions___credentials___project_id = "pluginOptions___credentials___project_id",
    pluginOptions___credentials___private_key_id = "pluginOptions___credentials___private_key_id",
    pluginOptions___credentials___private_key = "pluginOptions___credentials___private_key",
    pluginOptions___credentials___client_email = "pluginOptions___credentials___client_email",
    pluginOptions___credentials___client_id = "pluginOptions___credentials___client_id",
    pluginOptions___credentials___auth_uri = "pluginOptions___credentials___auth_uri",
    pluginOptions___credentials___token_uri = "pluginOptions___credentials___token_uri",
    pluginOptions___credentials___auth_provider_x509_cert_url = "pluginOptions___credentials___auth_provider_x509_cert_url",
    pluginOptions___credentials___client_x509_cert_url = "pluginOptions___credentials___client_x509_cert_url",
    pluginOptions___trackingId = "pluginOptions___trackingId",
    pluginOptions___logo = "pluginOptions___logo",
    pluginOptions___appName = "pluginOptions___appName",
    pluginOptions___icons___android = "pluginOptions___icons___android",
    pluginOptions___icons___appleIcon = "pluginOptions___icons___appleIcon",
    pluginOptions___icons___appleStartup = "pluginOptions___icons___appleStartup",
    pluginOptions___icons___coast = "pluginOptions___icons___coast",
    pluginOptions___icons___favicons = "pluginOptions___icons___favicons",
    pluginOptions___icons___firefox = "pluginOptions___icons___firefox",
    pluginOptions___icons___yandex = "pluginOptions___icons___yandex",
    pluginOptions___icons___windows = "pluginOptions___icons___windows",
    pluginOptions___pathCheck = "pluginOptions___pathCheck",
    nodeAPIs = "nodeAPIs",
    browserAPIs = "browserAPIs",
    ssrAPIs = "ssrAPIs",
    pluginFilepath = "pluginFilepath",
    packageJson___name = "packageJson___name",
    packageJson___description = "packageJson___description",
    packageJson___version = "packageJson___version",
    packageJson___main = "packageJson___main",
    packageJson___author = "packageJson___author",
    packageJson___license = "packageJson___license",
    packageJson___dependencies = "packageJson___dependencies",
    packageJson___dependencies___name = "packageJson___dependencies___name",
    packageJson___dependencies___version = "packageJson___dependencies___version",
    packageJson___devDependencies = "packageJson___devDependencies",
    packageJson___devDependencies___name = "packageJson___devDependencies___name",
    packageJson___devDependencies___version = "packageJson___devDependencies___version",
    packageJson___peerDependencies = "packageJson___peerDependencies",
    packageJson___peerDependencies___name = "packageJson___peerDependencies___name",
    packageJson___peerDependencies___version = "packageJson___peerDependencies___version",
    packageJson___keywords = "packageJson___keywords",
}

export type SitePluginFilterInput = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    resolve: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    version: Maybe<StringQueryOperatorInput>;
    pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs: Maybe<StringQueryOperatorInput>;
    browserAPIs: Maybe<StringQueryOperatorInput>;
    ssrAPIs: Maybe<StringQueryOperatorInput>;
    pluginFilepath: Maybe<StringQueryOperatorInput>;
    packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
    __typename?: "SitePluginGroupConnection";
    totalCount: Scalars["Int"];
    edges: Array<SitePluginEdge>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    field: Scalars["String"];
    fieldValue: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJson = {
    __typename?: "SitePluginPackageJson";
    name: Maybe<Scalars["String"]>;
    description: Maybe<Scalars["String"]>;
    version: Maybe<Scalars["String"]>;
    main: Maybe<Scalars["String"]>;
    author: Maybe<Scalars["String"]>;
    license: Maybe<Scalars["String"]>;
    dependencies: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
    devDependencies: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
    peerDependencies: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
    keywords: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPackageJsonDependencies = {
    __typename?: "SitePluginPackageJsonDependencies";
    name: Maybe<Scalars["String"]>;
    version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
    name: Maybe<StringQueryOperatorInput>;
    version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
    elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
    __typename?: "SitePluginPackageJsonDevDependencies";
    name: Maybe<Scalars["String"]>;
    version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
    name: Maybe<StringQueryOperatorInput>;
    version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
    elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
    name: Maybe<StringQueryOperatorInput>;
    description: Maybe<StringQueryOperatorInput>;
    version: Maybe<StringQueryOperatorInput>;
    main: Maybe<StringQueryOperatorInput>;
    author: Maybe<StringQueryOperatorInput>;
    license: Maybe<StringQueryOperatorInput>;
    dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
    devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
    peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
    keywords: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
    __typename?: "SitePluginPackageJsonPeerDependencies";
    name: Maybe<Scalars["String"]>;
    version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
    name: Maybe<StringQueryOperatorInput>;
    version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
    elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
    __typename?: "SitePluginPluginOptions";
    name: Maybe<Scalars["String"]>;
    path: Maybe<Scalars["String"]>;
    short_name: Maybe<Scalars["String"]>;
    start_url: Maybe<Scalars["String"]>;
    background_color: Maybe<Scalars["String"]>;
    theme_color: Maybe<Scalars["String"]>;
    display: Maybe<Scalars["String"]>;
    icon: Maybe<Scalars["String"]>;
    spreadsheetId: Maybe<Scalars["String"]>;
    worksheetTitle: Maybe<Scalars["String"]>;
    credentials: Maybe<SitePluginPluginOptionsCredentials>;
    trackingId: Maybe<Scalars["String"]>;
    logo: Maybe<Scalars["String"]>;
    appName: Maybe<Scalars["String"]>;
    icons: Maybe<SitePluginPluginOptionsIcons>;
    pathCheck: Maybe<Scalars["Boolean"]>;
};

export type SitePluginPluginOptionsCredentials = {
    __typename?: "SitePluginPluginOptionsCredentials";
    type: Maybe<Scalars["String"]>;
    project_id: Maybe<Scalars["String"]>;
    private_key_id: Maybe<Scalars["String"]>;
    private_key: Maybe<Scalars["String"]>;
    client_email: Maybe<Scalars["String"]>;
    client_id: Maybe<Scalars["String"]>;
    auth_uri: Maybe<Scalars["String"]>;
    token_uri: Maybe<Scalars["String"]>;
    auth_provider_x509_cert_url: Maybe<Scalars["String"]>;
    client_x509_cert_url: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsCredentialsFilterInput = {
    type: Maybe<StringQueryOperatorInput>;
    project_id: Maybe<StringQueryOperatorInput>;
    private_key_id: Maybe<StringQueryOperatorInput>;
    private_key: Maybe<StringQueryOperatorInput>;
    client_email: Maybe<StringQueryOperatorInput>;
    client_id: Maybe<StringQueryOperatorInput>;
    auth_uri: Maybe<StringQueryOperatorInput>;
    token_uri: Maybe<StringQueryOperatorInput>;
    auth_provider_x509_cert_url: Maybe<StringQueryOperatorInput>;
    client_x509_cert_url: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
    name: Maybe<StringQueryOperatorInput>;
    path: Maybe<StringQueryOperatorInput>;
    short_name: Maybe<StringQueryOperatorInput>;
    start_url: Maybe<StringQueryOperatorInput>;
    background_color: Maybe<StringQueryOperatorInput>;
    theme_color: Maybe<StringQueryOperatorInput>;
    display: Maybe<StringQueryOperatorInput>;
    icon: Maybe<StringQueryOperatorInput>;
    spreadsheetId: Maybe<StringQueryOperatorInput>;
    worksheetTitle: Maybe<StringQueryOperatorInput>;
    credentials: Maybe<SitePluginPluginOptionsCredentialsFilterInput>;
    trackingId: Maybe<StringQueryOperatorInput>;
    logo: Maybe<StringQueryOperatorInput>;
    appName: Maybe<StringQueryOperatorInput>;
    icons: Maybe<SitePluginPluginOptionsIconsFilterInput>;
    pathCheck: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsIcons = {
    __typename?: "SitePluginPluginOptionsIcons";
    android: Maybe<Scalars["Boolean"]>;
    appleIcon: Maybe<Scalars["Boolean"]>;
    appleStartup: Maybe<Scalars["Boolean"]>;
    coast: Maybe<Scalars["Boolean"]>;
    favicons: Maybe<Scalars["Boolean"]>;
    firefox: Maybe<Scalars["Boolean"]>;
    yandex: Maybe<Scalars["Boolean"]>;
    windows: Maybe<Scalars["Boolean"]>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
    android: Maybe<BooleanQueryOperatorInput>;
    appleIcon: Maybe<BooleanQueryOperatorInput>;
    appleStartup: Maybe<BooleanQueryOperatorInput>;
    coast: Maybe<BooleanQueryOperatorInput>;
    favicons: Maybe<BooleanQueryOperatorInput>;
    firefox: Maybe<BooleanQueryOperatorInput>;
    yandex: Maybe<BooleanQueryOperatorInput>;
    windows: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
    fields: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
    order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
    __typename?: "SiteSiteMetadata";
    title: Maybe<Scalars["String"]>;
    description: Maybe<Scalars["String"]>;
    author: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
    title: Maybe<StringQueryOperatorInput>;
    description: Maybe<StringQueryOperatorInput>;
    author: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
    fields: Maybe<Array<Maybe<SiteFieldsEnum>>>;
    order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
    ASC = "ASC",
    DESC = "DESC",
}

export type StringQueryOperatorInput = {
    eq: Maybe<Scalars["String"]>;
    ne: Maybe<Scalars["String"]>;
    in: Maybe<Array<Maybe<Scalars["String"]>>>;
    nin: Maybe<Array<Maybe<Scalars["String"]>>>;
    regex: Maybe<Scalars["String"]>;
    glob: Maybe<Scalars["String"]>;
};
export type BackgroundTemplateQueryVariables = {
    currentId: Scalars["Int"];
    prevId: Scalars["Int"];
    nextId: Scalars["Int"];
    mainImageRelativePath: Scalars["String"];
    mainImageRegex: Scalars["String"];
    bgImageRelativePath: Scalars["String"];
};

export type BackgroundTemplateQuery = { __typename?: "Query" } & {
    currentLevel: Maybe<
        { __typename?: "googleSheetLeveldataRow" } & Pick<
            GoogleSheetLeveldataRow,
            "levelName" | "gameNameUsa" | "developer" | "system" | "year" | "series"
        >
    >;
    prevLevel: Maybe<
        { __typename?: "googleSheetLeveldataRow" } & Pick<GoogleSheetLeveldataRow, "levelName" | "gameNameUsa">
    >;
    nextLevel: Maybe<
        { __typename?: "googleSheetLeveldataRow" } & Pick<GoogleSheetLeveldataRow, "levelName" | "gameNameUsa">
    >;
    mainImg: Maybe<{ __typename?: "File" } & Pick<File, "publicURL">>;
    bgImg: Maybe<
        { __typename?: "File" } & {
            childImageSharp: Maybe<
                { __typename?: "ImageSharp" } & {
                    resize: Maybe<{ __typename?: "ImageSharpResize" } & Pick<ImageSharpResize, "src">>;
                }
            >;
        }
    >;
    twitterImg: Maybe<
        { __typename?: "File" } & {
            childImageSharp: Maybe<
                { __typename?: "ImageSharp" } & {
                    resize: Maybe<{ __typename?: "ImageSharpResize" } & Pick<ImageSharpResize, "src">>;
                }
            >;
        }
    >;
    dimensions: Maybe<{ __typename?: "BgsizesCsv" } & Pick<BgsizesCsv, "width" | "height">>;
};

export type ListTemplateQueryVariables = {
    filter: GoogleSheetLeveldataRowFilterInput;
};

export type ListTemplateQuery = { __typename?: "Query" } & {
    levels: Maybe<
        { __typename?: "googleSheetLeveldataRowConnection" } & {
            edges: Array<
                { __typename?: "googleSheetLeveldataRowEdge" } & {
                    node: { __typename?: "googleSheetLeveldataRow" } & Pick<
                        GoogleSheetLeveldataRow,
                        "developer" | "gameNameUsa" | "levelName" | "system" | "imageFileName"
                    >;
                }
            >;
        }
    >;
};

export type Unnamed_1_QueryVariables = {};

export type Unnamed_1_Query = { __typename?: "Query" } & {
    site: Maybe<
        { __typename?: "Site" } & {
            siteMetadata: Maybe<
                { __typename?: "SiteSiteMetadata" } & Pick<SiteSiteMetadata, "title" | "description" | "author">
            >;
        }
    >;
};

export type AboutPageQueryVariables = {};

export type AboutPageQuery = { __typename?: "Query" } & {
    twitterImg: Maybe<
        { __typename?: "FileConnection" } & {
            edges: Array<
                { __typename?: "FileEdge" } & {
                    node: { __typename?: "File" } & {
                        childImageSharp: Maybe<
                            { __typename?: "ImageSharp" } & {
                                fixed: Maybe<{ __typename?: "ImageSharpFixed" } & Pick<ImageSharpFixed, "src">>;
                            }
                        >;
                    };
                }
            >;
        }
    >;
    bgImg: Maybe<
        { __typename?: "FileConnection" } & {
            edges: Array<
                { __typename?: "FileEdge" } & {
                    node: { __typename?: "File" } & {
                        childImageSharp: Maybe<
                            { __typename?: "ImageSharp" } & {
                                fixed: Maybe<{ __typename?: "ImageSharpFixed" } & Pick<ImageSharpFixed, "src">>;
                            }
                        >;
                    };
                }
            >;
        }
    >;
};

export type IdentifyBackgroundsPageQueryVariables = {};

export type IdentifyBackgroundsPageQuery = { __typename?: "Query" } & {
    unknowns: Maybe<
        { __typename?: "FileConnection" } & {
            edges: Array<
                { __typename?: "FileEdge" } & {
                    node: { __typename?: "File" } & Pick<File, "relativePath" | "publicURL"> & {
                            childImageSharp: Maybe<
                                { __typename?: "ImageSharp" } & {
                                    original: Maybe<
                                        { __typename?: "ImageSharpOriginal" } & Pick<
                                            ImageSharpOriginal,
                                            "width" | "height"
                                        >
                                    >;
                                    fixed: Maybe<{ __typename?: "ImageSharpFixed" } & Pick<ImageSharpFixed, "src">>;
                                }
                            >;
                        };
                }
            >;
        }
    >;
};

export type IndexPageQueryVariables = {};

export type IndexPageQuery = { __typename?: "Query" } & {
    searchData: Maybe<
        { __typename?: "googleSheetLeveldataRowConnection" } & Pick<GoogleSheetLeveldataRowConnection, "totalCount"> & {
                edges: Array<
                    { __typename?: "googleSheetLeveldataRowEdge" } & {
                        node: { __typename?: "googleSheetLeveldataRow" } & Pick<
                            GoogleSheetLeveldataRow,
                            | "levelId"
                            | "levelName"
                            | "gameNameUsa"
                            | "system"
                            | "developer"
                            | "year"
                            | "series"
                            | "imageFileName"
                        >;
                    }
                >;
            }
    >;
    developers: Maybe<
        { __typename?: "googleSheetLeveldataRowConnection" } & Pick<GoogleSheetLeveldataRowConnection, "distinct">
    >;
    years: Maybe<
        { __typename?: "googleSheetLeveldataRowConnection" } & Pick<GoogleSheetLeveldataRowConnection, "distinct">
    >;
    systems: Maybe<
        { __typename?: "googleSheetLeveldataRowConnection" } & Pick<GoogleSheetLeveldataRowConnection, "distinct">
    >;
    series: Maybe<
        { __typename?: "googleSheetLeveldataRowConnection" } & Pick<GoogleSheetLeveldataRowConnection, "distinct">
    >;
    thumbnails: Maybe<
        { __typename?: "FileConnection" } & {
            edges: Array<
                { __typename?: "FileEdge" } & {
                    node: { __typename?: "File" } & Pick<File, "relativePath" | "publicURL"> & {
                            childImageSharp: Maybe<
                                { __typename?: "ImageSharp" } & {
                                    original: Maybe<
                                        { __typename?: "ImageSharpOriginal" } & Pick<
                                            ImageSharpOriginal,
                                            "width" | "height"
                                        >
                                    >;
                                    fixed: Maybe<{ __typename?: "ImageSharpFixed" } & Pick<ImageSharpFixed, "base64">>;
                                }
                            >;
                        };
                }
            >;
        }
    >;
    twitterImg: Maybe<
        { __typename?: "FileConnection" } & {
            edges: Array<
                { __typename?: "FileEdge" } & {
                    node: { __typename?: "File" } & {
                        childImageSharp: Maybe<
                            { __typename?: "ImageSharp" } & {
                                fixed: Maybe<{ __typename?: "ImageSharpFixed" } & Pick<ImageSharpFixed, "src">>;
                            }
                        >;
                    };
                }
            >;
        }
    >;
};

export type NewPageQueryVariables = {};

export type NewPageQuery = { __typename?: "Query" } & {
    newLevelData: Maybe<
        { __typename?: "googleSheetLeveldataRowConnection" } & Pick<GoogleSheetLeveldataRowConnection, "totalCount"> & {
                edges: Array<
                    { __typename?: "googleSheetLeveldataRowEdge" } & {
                        node: { __typename?: "googleSheetLeveldataRow" } & Pick<
                            GoogleSheetLeveldataRow,
                            | "levelId"
                            | "levelName"
                            | "gameNameUsa"
                            | "system"
                            | "developer"
                            | "year"
                            | "series"
                            | "imageFileName"
                        >;
                    }
                >;
            }
    >;
    thumbnails: Maybe<
        { __typename?: "FileConnection" } & {
            edges: Array<
                { __typename?: "FileEdge" } & {
                    node: { __typename?: "File" } & Pick<File, "relativePath" | "publicURL"> & {
                            childImageSharp: Maybe<
                                { __typename?: "ImageSharp" } & {
                                    original: Maybe<
                                        { __typename?: "ImageSharpOriginal" } & Pick<
                                            ImageSharpOriginal,
                                            "width" | "height"
                                        >
                                    >;
                                    fixed: Maybe<{ __typename?: "ImageSharpFixed" } & Pick<ImageSharpFixed, "base64">>;
                                }
                            >;
                        };
                }
            >;
        }
    >;
};

export type NewestPageQueryVariables = {};

export type NewestPageQuery = { __typename?: "Query" } & {
    latestLevels: Maybe<
        { __typename?: "googleSheetLeveldataRowConnection" } & {
            edges: Array<
                { __typename?: "googleSheetLeveldataRowEdge" } & {
                    node: { __typename?: "googleSheetLeveldataRow" } & Pick<
                        GoogleSheetLeveldataRow,
                        | "levelId"
                        | "levelName"
                        | "gameNameUsa"
                        | "system"
                        | "developer"
                        | "year"
                        | "series"
                        | "imageFileName"
                    >;
                }
            >;
        }
    >;
    thumbnails: Maybe<
        { __typename?: "FileConnection" } & {
            edges: Array<
                { __typename?: "FileEdge" } & {
                    node: { __typename?: "File" } & Pick<File, "relativePath" | "publicURL"> & {
                            childImageSharp: Maybe<
                                { __typename?: "ImageSharp" } & {
                                    original: Maybe<
                                        { __typename?: "ImageSharpOriginal" } & Pick<
                                            ImageSharpOriginal,
                                            "width" | "height"
                                        >
                                    >;
                                    fixed: Maybe<{ __typename?: "ImageSharpFixed" } & Pick<ImageSharpFixed, "base64">>;
                                }
                            >;
                        };
                }
            >;
        }
    >;
};
