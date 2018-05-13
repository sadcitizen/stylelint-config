module.exports = {
    'rule-empty-line-before': [ // require an empty line before rules
        'always',
        {
            except: [
                'first-nested'
            ],
            ignore: [
                'after-comment'
            ]
        }
    ]
};
