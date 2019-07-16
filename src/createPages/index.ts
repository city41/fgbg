import { GatsbyCreatePages } from "./types";
import { createBackgroundPages } from "./createBackgroundPages";
import { createGamePages } from "./createGamePages";
import { createSystemPages } from "./createSystemPages";
import { createSeriesPages } from "./createSeriesPages";
import { createDeveloperPages } from "./createDeveloperPages";
import { createYearPages } from "./createYearPages";

export const createPages: GatsbyCreatePages = async fns => {
    await createBackgroundPages(fns);
    await createGamePages(fns);
    await createSystemPages(fns);
    await createSeriesPages(fns);
    await createDeveloperPages(fns);
    await createYearPages(fns);
};
