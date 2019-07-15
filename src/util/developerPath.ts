import { slug } from "./slug";

export function developerPath(developer: string) {
    return "/" + slug(developer);
}
