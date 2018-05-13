module.exports = {
    'length-zero-no-unit': true, // disallow units for zero lengths
    'unit-case': 'lower', // specify lowercase or uppercase for units
    'unit-no-unknown': true, // disallow unknown units
    'unit-whitelist': [ // specify a whitelist of allowed units
        'em',
        'rem',
        'px',
        '%',
        's',
        'vh',
        'vw',
        'vmin',
        'vmax'
    ]
};
