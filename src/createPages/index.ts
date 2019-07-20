import { GatsbyCreatePages } from "./types";
import { createBackgroundPages } from "./createBackgroundPages";
import { createGamePages } from "./createGamePages";
import { createListPages } from "./createListPages";

const listPageFields = ["system", "series", "developer"];

export const createPages: GatsbyCreatePages = async fns => {
    await createBackgroundPages(fns);
    await createGamePages(fns);

    listPageFields.forEach(async field => {
        await createListPages({ ...fns, field });
    });

    // year has to be treated differently since its a number instead of a string
    await createListPages({ ...fns, field: "year", fieldTransform: fieldValue => parseInt(fieldValue, 10) });
};
