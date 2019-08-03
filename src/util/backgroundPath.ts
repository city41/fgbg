import { slug } from "./slug";

export function backgroundPath({ gameNameUsa, levelName }: { gameNameUsa: string; levelName: string }, label?: string) {
    const base = "/game:" + [gameNameUsa, levelName].map(slug).join("/");

    if (label) {
        return [base, slug(label)].join("/");
    } else {
        return base;
    }
}
