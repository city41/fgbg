export function yearPath(year: number | null | undefined) {
    if (year) {
        return "/year:" + year;
    } else {
        return "/year:missing";
    }
}
