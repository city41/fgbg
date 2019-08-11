export interface Level {
    levelId: number;
    levelName: string;
    gameNameUsa: string;
    system: string;
    developer: string;
    year: number;
    series: string;
    thumbnailData: {
        width: number;
        height: number;
        dataUrl: string;
    };
}
