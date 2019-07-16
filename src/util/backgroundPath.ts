import { slug } from "./slug";

export function backgroundPath({ gameNameUsa, levelName }: { gameNameUsa: string; levelName: string }) {
    return "/bg:" + [gameNameUsa, levelName].map(slug).join("/");
}
