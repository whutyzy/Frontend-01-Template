const css = require('css')

let rules = []
function addCSSRules(text) {
    let ast = css.parse(text)
    
    rules.push(...ast.stylesheet.rules)
}
module.exports = addCSSRules