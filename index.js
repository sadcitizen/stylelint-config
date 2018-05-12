/**
 * https://stylelint.io/user-guide/rules/
 */
module.exports = {
    plugins: [
        'stylelint-order'
    ],
    rules: Object.assign({},
        require('./rules/general'),
        require('./rules/block'),
        require('./rules/color'),
        require('./rules/comment'),
        require('./rules/declaration'),
        require('./rules/media-query'),
        require('./rules/number'),
        require('./rules/property'),
        require('./rules/selector'),
        require('./rules/string'),
        require('./rules/unit'),
        require('./rules/value')
    )
};
