export function byLevelName(a: { levelName: string }, b: { levelName: string }): number {
    return a.levelName.localeCompare(b.levelName);
}

const thePrefix = /the /i;

export function byIgnoreThe(a: string, b: string): number {
    const aValue = a.replace(thePrefix, "");
    const bValue = b.replace(thePrefix, "");

    return aValue.localeCompare(bValue);
}
