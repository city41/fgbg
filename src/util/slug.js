const slugify = require("slugify")

exports.slug = function slug(str) {
    return slugify(str, { remove: /[*+~.()'"!:@]/g, lower: true })
}
