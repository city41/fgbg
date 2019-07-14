import { slug } from "./slug";

export function systemPath(system: string) {
    return "/" + slug(system);
}
