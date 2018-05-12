module.exports = {
    'indentation': 4, // specify indentation: 4 spaces
    'max-empty-lines': [ // limit the number of adjacent empty lines
        1,
        {
            ignore: ['comments']
        }
    ],
    'max-line-length': [ // limit the length of a line
        120,
        {
            ignorePattern: '/^@import\\s+/' // allow long paths in imports
        }
    ],
    'max-nesting-depth': 3, // limit the depth of nesting
    'no-descending-specificity': true, // disallow selectors of lower specificity from coming after overriding selectors of higher specificity
    'no-duplicate-at-import-rules': true, // disallow duplicate @import rules within a stylesheet
    'no-duplicate-selectors': true, // disallow duplicate selectors
    'no-empty-source': true, // disallow empty sources
    'no-eol-whitespace': true, // disallow end-of-line whitespace
    'no-extra-semicolons': true, // disallow extra semicolons
    'no-unknown-animations': true // disallow unknown animations
};
