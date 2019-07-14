import { GatsbyCreatePages } from "./types";
import { createBackgroundPages } from "./createBackgroundPages";
import { createGamePages } from "./createGamePages";
import { createSystemPages } from "./createSystemPages";

export const createPages: GatsbyCreatePages = async fns => {
    await createBackgroundPages(fns);
    await createGamePages(fns);
    await createSystemPages(fns);
};
