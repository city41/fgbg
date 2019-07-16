import { slug } from "./slug";

export function gamePath(gameNameUsa: string) {
    return "/game:" + slug(gameNameUsa);
}
