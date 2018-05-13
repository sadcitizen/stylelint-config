/**
 * https://stylelint.io/user-guide/rules/
 */
module.exports = {
    plugins: [
        'stylelint-order'
    ],
    rules: Object.assign({},
        require('./rules/at-rule'),
        require('./rules/block'),
        require('./rules/color'),
        require('./rules/comment'),
        require('./rules/declaration'),
        require('./rules/font'),
        require('./rules/function'),
        require('./rules/general'),
        require('./rules/media'),
        require('./rules/number'),
        require('./rules/order'),
        require('./rules/property'),
        require('./rules/rule'),
        require('./rules/selector'),
        require('./rules/string'),
        require('./rules/unit'),
        require('./rules/value')
    )
};
