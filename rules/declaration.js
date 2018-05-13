module.exports = {
    'declaration-block-no-duplicate-properties': [ // disallow duplicate properties within declaration blocks
        true,
        {
            ignore: [
                'consecutive-duplicates-with-different-values'
            ]
        }
    ],
    'declaration-block-no-redundant-longhand-properties': [ // disallow longhand properties that can be combined into one shorthand property
        true,
        {
            ignoreShorthands: [
                '/^grid.*/'
            ]
        }
    ],
    'declaration-block-no-shorthand-property-overrides': true, // disallow shorthand properties that override related longhand properties
    'declaration-block-semicolon-newline-after': 'always-multi-line', // require a newline after the semicolons of declaration blocks
    'declaration-block-semicolon-newline-before': 'never-multi-line', // disallow whitespace before the semicolons of declaration blocks
    'declaration-block-semicolon-space-after': 'always-single-line', // require a single space after the semicolons of declaration blocks
    'declaration-block-semicolon-space-before': 'never', // disallow whitespace before the semicolons of declaration blocks
    'declaration-block-single-line-max-declarations': 1, // limit the number of declaration within a single line declaration block
    'declaration-block-trailing-semicolon': 'always', // require a trailing semicolon within declaration blocks
    'declaration-bang-space-after': 'never', // disallow whitespace after the bang of declarations
    'declaration-bang-space-before': 'always', // require a single space before the bang of declarations
    'declaration-colon-newline-after': 'always-multi-line', // require a newline after the colon of declarations
    'declaration-colon-space-after': 'always-single-line', // require a single space after the colon of declarations
    'declaration-colon-space-before': 'never', // disallow whitespace before the colon of declarations
    'declaration-empty-line-before': [ // disallow an empty line before declarations
        'never',
        {
            ignore: [
                'after-declaration',
                'inside-single-line-block'
            ]
        }
    ],
    'declaration-no-important': true, // disallow !important within declarations
    'keyframe-declaration-no-important': true // disallow !important within keyframe declarations
};
