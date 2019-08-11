import { promises as fs } from "fs";
import * as path from "path";
// @ts-ignore
import glob from "glob";
// @ts-ignore
import md5 from "md5";

const publicPath = path.resolve(__dirname, "../../public");

async function hashPageDataJsonFiles() {
    const hash = md5(Date.now().toString());

    const jsonFiles = glob.sync(`${publicPath}/page-data/**/page-data.json`);
    console.log("[onPostBuild] Renaming the following files:");
    for (let f = 0; f < jsonFiles.length; ++f) {
        const file = jsonFiles[f];

        console.log(file);
        const newFilename = file.replace(`page-data.json`, `page-data.${hash}.json`);
        await fs.rename(file, newFilename);
    }

    const htmlAndJSFiles = glob.sync(`${publicPath}/**/*.{html,js}`);
    console.log("[onPostBuild] Replacing page-data.json references in the following files:");

    for (let f = 0; f < htmlAndJSFiles.length; ++f) {
        const file = htmlAndJSFiles[f];

        const stats = await fs.stat(file);
        if (!stats.isFile()) continue;
        console.log(file);
        var content = await fs.readFile(file, "utf8");
        var result = content.replace(/page-data.json/g, `page-data.${hash}.json`);
        await fs.writeFile(file, result, "utf8");
    }
}

async function hashAppJsFile() {
    const hash = md5(Date.now().toString());

    const appJsFiles = glob.sync(`${publicPath}/app-*.js*`);

    const appJsFile = appJsFiles.find(f => f.endsWith(".js"));

    if (!appJsFile) {
        throw new Error("onPostBuild: failed to find the app-*.js file");
    }

    const appJsMapFile = appJsFiles.find(f => f.endsWith(".map"));

    if (!appJsMapFile) {
        throw new Error("onPostBuild: failed to find the app-*.js.map file");
    }

    const appJsFileRoot = path.basename(appJsFile, ".js");

    const appJsFileName = path.basename(appJsFile);
    const newAppJsFile = path.resolve(`${publicPath}/${appJsFileRoot}.${hash}.js`);
    const newAppJsMapFile = path.resolve(`${publicPath}/${appJsFileRoot}.${hash}.js.map`);
    const newAppJsFileName = path.basename(newAppJsFile);

    await fs.rename(appJsFile, newAppJsFile);
    await fs.rename(appJsMapFile, newAppJsMapFile);

    const htmlAndJSFiles = glob.sync(`${publicPath}/**/*.{html,js,json,map}`);

    console.log("[onPostBuild] Replacing app-sha.js references in the following files:");

    for (let f = 0; f < htmlAndJSFiles.length; ++f) {
        const file = htmlAndJSFiles[f];

        console.log(file);
        const stats = await fs.stat(file);

        if (!stats.isFile()) {
            continue;
        }

        var content = await fs.readFile(file, "utf8");

        if (content.indexOf(appJsFileName) > -1) {
            var result = content.replace(new RegExp(appJsFileName, "g"), newAppJsFileName);
            await fs.writeFile(file, result, "utf8");
        }
    }
}

exports.onPostBuild = async () => {
    try {
        await hashPageDataJsonFiles();
        await hashAppJsFile();
    } catch (e) {
        console.error(e);
    }
};
