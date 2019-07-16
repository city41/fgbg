import { slug } from "./slug";

export function seriesPath(series: string) {
    return "/series:" + slug(series);
}
