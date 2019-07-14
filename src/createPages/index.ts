import { GatsbyCreatePages } from "./types";
import { createBackgroundPages } from "./createBackgroundPages";

export const createPages: GatsbyCreatePages = async fns => {
    return await createBackgroundPages(fns);
};
