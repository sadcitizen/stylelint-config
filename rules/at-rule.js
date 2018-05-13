module.exports = {
    'at-rule-empty-line-before': [ // require an empty line before at-rules
        'always',
        {
            except: [
                'first-nested',
                'blockless-after-same-name-blockless'
            ],
            ignore: [
                'after-comment'
            ]
        }
    ],
    'at-rule-name-case': 'lower', // specify lowercase for at-rules names
    'at-rule-name-newline-after': 'always-multi-line', // require a newline after at-rule names in at-rules with multi-line parameters
    'at-rule-name-space-after': 'always-single-line', // require a single space after at-rule names
    'at-rule-no-unknown': true, // disallow unknown at-rules
    'at-rule-no-vendor-prefix': true, // disallow vendor prefixes for at-rules
    'at-rule-semicolon-newline-after': 'always', // require a newline after the semicolon of at-rules
    'at-rule-semicolon-space-before': 'never' // disallow whitespace before the semicolons at-rules
};
