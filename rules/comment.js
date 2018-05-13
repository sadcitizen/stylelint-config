module.exports = {
    'comment-empty-line-before': [ // require an empty line before comments
        'always', {
            except: [
                'first-nested'
            ],
            ignore: [
                'stylelint-commands'
            ]
        }
    ],
    'comment-no-empty': true, // disallow empty comments
    'comment-whitespace-inside': 'always', // require whitespace on the inside of comment markers
    'no-invalid-double-slash-comments': true // disallow double-slash comments (//...) which are not supported by CSS
};
