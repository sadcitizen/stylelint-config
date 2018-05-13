/**
 * http://stylelint.io/?/src/rules/rule-properties-order/README.md
 */
module.exports = {
    'order/properties-order': [
        'display',

        // Positioning
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',

        // Flexbox
        'flex',
        'flex-basis',
        'flex-grow',
        'flex-shrink',
        'flex-flow',
        'flex-wrap',
        'flex-direction',
        'justify-content',
        'align-self',
        'align-items',
        'align-content',
        'order',

        // Grid Layout
        'grid',
        'grid-area',
        'grid-auto-columns',
        'grid-auto-flow',
        'grid-auto-rows',
        'grid-gap',
        'grid-column',
        'grid-column-end',
        'grid-column-gap',
        'grid-column-start',
        'grid-row',
        'grid-row-end',
        'grid-row-gap',
        'grid-row-start',
        'grid-template',
        'grid-template-areas',
        'grid-template-columns',
        'grid-template-rows',

        // Columns
        'columns',
        'column-width',
        'column-count',
        'column-fill',
        'column-gap',
        'column-rule',
        'column-rule-color',
        'column-rule-style',
        'column-rule-width',
        'column-span',
        'break-after',
        'break-before',
        'break-inside',
        'orphans',
        'widows',

        'float',
        'clear',

        {
            order: 'flexible',
            properties: [
                'visibility',
                'opacity',
                'filter'
            ]
        },

        // Width
        'width',
        'min-width',
        'max-width',

        // Height
        'height',
        'min-height',
        'max-height',

        'overflow',
        'overflow-x',
        'overflow-y',

        // Margin
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',

        'outline',
        'outline-color',
        'outline-width',
        'outline-style',
        'outline-offset',

        // Border
        'border',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',

        'border-width',
        'border-top-width',
        'border-right-width',
        'border-bottom-width',
        'border-left-width',

        'border-style',
        'border-top-style',
        'border-right-style',
        'border-bottom-style',
        'border-left-style',

        'border-color',
        'border-top-color',
        'border-right-color',
        'border-bottom-color',
        'border-left-color',

        'border-radius',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-right-radius',
        'border-bottom-left-radius',

        'box-shadow',

        'background',
        {
            order: 'flexible',
            properties: [
                'background-color',
                'background-image',
                'background-repeat',
                'background-position'
            ]
        },
        'cursor',

        // Padding
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',

        'vertical-align',

        // Text
        'color',

        'font',
        'font-family',
        'font-size',
        'line-height',
        'font-weight',

        {
            order: 'flexible',
            properties: [
                'text-align',
                'text-indent',
                'text-transform',
                'text-decoration',
                'word-spacing',
                'letter-spacing',
                'white-space'
            ]
        },

        // Pseudos
        'content',
        'quotes',

        // Transitions
        'transition',
        'transition-property',
        'transition-duration',
        'transition-timing-function',
        'transition-delay'
    ]
};
