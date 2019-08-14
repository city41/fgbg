import { slug } from "./slug";

export function otherPath(other: string) {
    return "/other:" + slug(other);
}
