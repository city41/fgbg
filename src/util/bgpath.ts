import { slug } from "./slug";

export function bgpath({
    system,
    gameNameUsa,
    levelName,
}: {
    system: string;
    gameNameUsa: string;
    levelName: string;
}) {
    return [system, gameNameUsa, levelName].map(slug).join("/");
}
