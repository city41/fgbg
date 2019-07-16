import { slug } from "./slug";

export function developerPath(developer: string) {
    return "/developer:" + slug(developer);
}
