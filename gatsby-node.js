// const path = require("path");
// const { bgpath } = require("./src/util/bgpath");

"use strict";

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require("source-map-support").install();

require("ts-node").register({
    compilerOptions: {
        module: "commonjs",
        target: "es2017",
    },
});

exports.createPages = require("./src/createPages").createPages;
