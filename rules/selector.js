module.exports = {
    'selector-attribute-brackets-space-inside': 'never', // disallow whitespace on the inside of the brackets within attribute selectors
    'selector-attribute-operator-space-after': 'never', // disallow whitespace after operators within attribute selectors
    'selector-attribute-operator-space-before': 'never', // disallow whitespace before operators within attribute selectors
    'selector-attribute-quotes': 'always', // require quotes for attribute values
    'selector-class-pattern': /^[a-zA-Z][a-zA-Z0-9]+$/, // specify a pattern for class selectors
    'selector-combinator-space-after': 'always', // require a single space after the combinators of selectors
    'selector-combinator-space-before': 'always', // require a single space before the combinators of selectors
    'selector-descendant-combinator-no-non-space': true, // disallow non-space characters for descendant combinators of selectors
    'selector-list-comma-newline-after': 'always', // require a newline after the commas of selector lists
    'selector-list-comma-newline-before': 'never-multi-line', // disallow whitespace before the commas of selector lists
    'selector-list-comma-space-after': 'always-single-line', // require a single space after the commas of selector lists
    'selector-list-comma-space-before': 'never', // disallow whitespace before the commas of selector lists
    'selector-max-attribute': 1, // limit the number of attribute selectors in a selector
    'selector-max-class': 2, // limit the number of classes in a selector
    'selector-max-combinators': 1, // limit the number of combinators in a selector
    'selector-max-compound-selectors': 2, // limit the number of compound selectors in a selector
    'selector-max-empty-lines': 0, // limit the number of adjacent empty lines within selectors
    'selector-max-id': 0, // limit the number of id selectors in a selector
    'selector-max-pseudo-class': 2, // limit the number of pseudo-classes in a selector
    'selector-max-specificity': '0,3,0', // limit the specificity of selectors
    'selector-max-type': [ // limit the number of type selectors in a selector
        1,
        {
            ignore: ['child']
        }
    ],
    'selector-max-universal': 1, // limit the number of universal selectors in a selector
    'selector-no-qualifying-type': true, // disallow qualifying a selector by type
    'selector-pseudo-class-case': 'lower', // specify lowercase for pseudo-class selectors
    'selector-pseudo-class-no-unknown': true, // disallow unknown pseudo-class selectors
    'selector-pseudo-class-parentheses-space-inside': 'never', // disallow whitespace on the inside of the parentheses within pseudo-class selectors
    'selector-pseudo-element-case': 'lower', // specify lowercase for pseudo-element selectors
    'selector-pseudo-element-colon-notation': 'double', // specify double colon notation for applicable pseudo-elements
    'selector-pseudo-element-no-unknown': true, // disallow unknown pseudo-element selectors
    'selector-type-case': 'lower', // specify lowercase for type selectors
    'selector-type-no-unknown': true // disallow unknown type selectors
};
