import { slug } from "./slug";

export function backgroundPath({ gameNameUsa, levelName }: { gameNameUsa: string; levelName: string }) {
    return "/game:" + [gameNameUsa, levelName].map(slug).join("/");
}
