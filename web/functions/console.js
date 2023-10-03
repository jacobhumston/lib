/**
 * @file console.js
 * Console based functions.
 */

// Imports
import * as validate from './validator.js';

/**
 * @typedef {"Black"
 * | "Red"
 * | "Green"
 * | "Yellow"
 * | "Blue"
 * | "Purple"
 * | "Cyan"
 * | "White"
 * | "BackgroundBlack"
 * | "BackgroundRed"
 * | "BackgroundGreen"
 * | "BackgroundYellow"
 * | "BackgroundBlue"
 * | "BackgroundPurple"
 * | "BackgroundCyan"
 * | "BackgroundWhite"
 * | "Reset"
 * } ANSIColorCode
 */

/**
 * Returns an ANSI Color Escape Sequence.
 * It's important to note that colors can be visually different per terminal.
 * @param {ANSIColorCode} name Of the ANSI Color Escape Sequence.
 * @returns {string} ANSI Color Escape Sequence
 */
export function getColor(name) {
    validate.param('string', name, 'name');

    // Source: https://gist.github.com/JBlond/2fea43a3049b38287e5e9cefc87b2124
    const codes = {
        Black: '\u001b[0;30m',
        Red: '\u001b[0;31m',
        Green: '\u001b[0;32m',
        Yellow: '\u001b[0;33m',
        Blue: '\u001b[0;34m',
        Purple: '\u001b[0;35m',
        Cyan: '\u001b[0;36m',
        White: '\u001b[0;37m',

        BackgroundBlack: '\u001b[40m',
        BackgroundRed: '\u001b[41m',
        BackgroundGreen: '\u001b[42m',
        BackgroundYellow: '\u001b[43m',
        BackgroundBlue: '\u001b[44m',
        BackgroundPurple: '\u001b[45m',
        BackgroundCyan: '\u001b[46m',
        BackgroundWhite: '\u001b[47m',

        Reset: '\u001b[0m',
    };
    return `${codes[name]}`;
}

/**
 * Log to the console in a neat format.
 * @param {"Log"|"Success"|"Error"|"Warn"|"Debug"} type Type of log.
 * @param {string} message Message to log.
 * @param {boolean} [noColor=false] If true, no color will be used. (default: false)
 * @returns {void}
 */
export function log(type, message, noColor) {
    validate.param('string', type, 'type');
    validate.param('string', message, 'message');
    validate.param('boolean', noColor, 'noColor', true);

    const typeColors = {
        Success: 'Green',
        Error: 'Red',
        Warn: 'Yellow',
        Debug: 'Purple',
    };

    /**
     * Adds spaces to the end of a sting to make it match a certain length.
     * @param {string} string
     * @param {number} length
     * @returns {string}
     */
    function fixStringLength(string, length) {
        if (string.length >= length) return string;
        let newString = string;
        while (newString.length !== length) {
            newString = newString + ' ';
        }
        return newString;
    }

    const stringLength = `[Success]${getColor('Reset')}`.length;

    if (type === 'Log' || noColor == true) {
        console.log(`${fixStringLength(`[${type.toUpperCase()}]${getColor('Reset')}`, stringLength)} | ${message}`);
        return;
    }

    console.log(
        `${getColor('Background' + typeColors[type])}${fixStringLength(
            `[${type.toUpperCase()}]${getColor('Reset')}`,
            stringLength
        )}`,
        `${getColor(typeColors[type])}| ${message}${getColor('Reset')}`
    );
}
