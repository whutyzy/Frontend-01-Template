const css = require('css')

let rules = []
function computeCSS(text) {
    let ast = css.parse(text)

    rules.push(...ast.stylesheet.rules)
}
module.exports = computeCSS
