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
        'flex-direction',
        'flex-wrap',
        {
            order: 'flexible',
            properties: [
                'justify-content',
                'align-self',
                'align-items',
                'align-content'
            ]
        },
        {
            order: 'flexible',
            properties: [
                'flex-basis',
                'flex-grow',
                'flex-shrink',
                'flex-flow'
            ]
        },
        'order',

        // Grid Layout
        'grid',
        {
            order: 'flexible',
            properties: [
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
                'grid-template-rows'
            ]
        },

        // Columns
        'columns',
        {
            order: 'flexible',
            properties: [
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
                'widows'
            ]
        },

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
        {
            order: 'flexible',
            properties: [
                'min-width',
                'max-width'
            ]
        },

        // Height
        'height',
        {
            order: 'flexible',
            properties: [
                'min-height',
                'max-height'
            ]
        },

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

        // Tables
        'table-layout',
        'border-collapse',
        'border-spacing',
        'empty-cells',

        // Background
        'background',
        'background-color',
        'background-image',
        'background-repeat',
        'background-position',
        'cursor',

        // Padding
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',

        'vertical-align',

        'color',

        // Font
        'font',
        {
            order: 'flexible',
            properties: [
                'font-family',
                'font-weight',
                'font-style',
                'font-variant'
            ]
        },

        'font-size',
        'line-height',

        // Text
        {
            order: 'flexible',
            properties: [
                'text-align',
                'text-indent',
                'text-transform',
                'text-decoration',
                'text-decoration-line',
                'text-decoration-style',
                'text-decoration-color',
                'text-underline-position',
                'text-transform',
                'text-shadow',
                'text-overflow',
                'word-spacing',
                'letter-spacing',
                'white-space',
                'word-break',
                'line-break',
                'hyphens'
            ]
        },

        // Lists
        'list-style',
        {
            order: 'flexible',
            properties: [
                'list-style-image',
                'list-style-position',
                'list-style-type'
            ]
        },

        // Pseudos
        'content',
        'quotes',

        // Transforms
        'transform',
        {
            order: 'flexible',
            properties: [
                'transform-box',
                'transform-origin',
                'transform-style',
                'zoom'
            ]
        },

        // Transitions
        'transition',
        {
            order: 'flexible',
            properties: [
                'transition-delay',
                'transition-duration',
                'transition-property',
                'transition-timing-function'
            ]
        },

        // Animations
        'animation',
        {
            order: 'flexible',
            properties: [
                'animation-delay',
                'animation-direction',
                'animation-duration',
                'animation-fill-mode',
                'animation-name',
                'animation-iteration-count',
                'animation-play-state',
                'animation-timing-function'
            ]
        }
    ]
};
