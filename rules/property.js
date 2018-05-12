module.exports = {
    'custom-property-empty-line-before': [ // require or disallow an empty line before custom properties
        'always',
        {
            except: [
                'after-custom-property',
                'first-nested',
            ],
            ignore: [
                'after-comment',
                'inside-single-line-block',
            ],
        }
    ],
    'property-case': 'lower', // specify lowercase for properties
    'property-no-unknown': [ // disallow unknown properties
        true,
        {
            'ignoreProperties': [
                'composes'
            ]
        }
    ],
    'shorthand-property-no-redundant-values': true // disallow redundant values in shorthand properties
};
