import { slug } from "./slug";

export function gamePath(gameNameUsa: string) {
    return "/" + slug(gameNameUsa);
}
