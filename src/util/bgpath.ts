import { slug } from "./slug";

export function bgpath({
    gameNameUsa,
    levelName,
}: {
    gameNameUsa: string;
    levelName: string;
}) {
    return [gameNameUsa, levelName].map(slug).join("/");
}
