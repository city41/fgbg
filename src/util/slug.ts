import slugify from "slugify";

export function slug(str: string): string {
    return slugify(str, { remove: /[*+~.()'"!:@]/g, lower: true });
}
