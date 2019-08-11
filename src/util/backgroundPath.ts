import { slug } from "./slug";

export interface BackgroundPathProps {
    gameNameUsa: string;
    levelName: string;
}

export function backgroundPath({ gameNameUsa, levelName }: BackgroundPathProps, label?: string, fullscreen?: boolean) {
    let base = "/game:" + [gameNameUsa, levelName].map(slug).join("/");

    if (label) {
        base = [base, slug(label)].join("/");
    }

    if (fullscreen) {
        return [base, "fullscreen"].join("/");
    } else {
        return base;
    }
}
