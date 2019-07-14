import { slug } from "./slug";

export function yearPath(year: number | null | undefined) {
    if (year) {
        return "/" + year;
    } else {
        return "/missing-release-year";
    }
}
