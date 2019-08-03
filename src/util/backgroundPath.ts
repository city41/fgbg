import { slug } from "./slug";

export function backgroundPath(
    { gameNameUsa, levelName }: { gameNameUsa: string; levelName: string },
    label?: string,
    fullscreen?: boolean
) {
    let base = "/game:" + [gameNameUsa, levelName].map(slug).join("/");

    if (label) {
        base = [base, slug(label)].join("/");
    }

    if (fullscreen) {
        return base + "?fullscreen";
    } else {
        return base;
    }
}
