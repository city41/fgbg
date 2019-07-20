import { GatsbyCreatePages } from "./types";
import { createBackgroundPages } from "./createBackgroundPages";
import { createGamePages } from "./createGamePages";
import { createListPages } from "./createListPages";

export const createPages: GatsbyCreatePages = async fns => {
    await createBackgroundPages(fns);
    await createGamePages(fns);

    // year has to be treated differently since its a number instead of a string
    await createListPages({ ...fns, field: "year", fieldTransform: fieldValue => parseInt(fieldValue, 10) });
    await createListPages({ ...fns, field: "system" });
    await createListPages({ ...fns, field: "series" });
    await createListPages({ ...fns, field: "developer" });
};
