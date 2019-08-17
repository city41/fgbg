import { GatsbyCreatePages } from "./types";
import { createBackgroundPages } from "./createBackgroundPages";
import { createListPages } from "./createListPages";
import { createMultipartPage } from "./createMultipartPage";

export const createPages: GatsbyCreatePages = async fns => {
    try {
        await createBackgroundPages(fns);

        // year has to be treated differently since its a number instead of a string
        await createListPages({
            ...fns,
            field: "year",
            fieldTransform: (fieldValue: string) => parseInt(fieldValue, 10),
        });

        await createListPages({ ...fns, field: "system" });
        await createListPages({ ...fns, field: "series" });
        await createListPages({ ...fns, field: "developer" });
        await createListPages({ ...fns, field: "gameNameUsa" });

        await createMultipartPage({ ...fns });
    } catch (e) {
        console.log("createPages caught error", e);
        process.exit(1);
    }
};
