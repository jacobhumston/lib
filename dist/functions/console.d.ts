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
export function getColor(name: ANSIColorCode): string;
/**
 * Log to the console in a neat format.
 * @param {"Log"|"Success"|"Error"|"Warn"|"Debug"} type Type of log.
 * @param {string} message Message to log.
 * @param {boolean} [noColor=false] If true, no color will be used. (default: false)
 * @returns {void}
 */
export function log(type: "Log" | "Success" | "Error" | "Warn" | "Debug", message: string, noColor?: boolean | undefined): void;
export type ANSIColorCode = "Black" | "Red" | "Green" | "Yellow" | "Blue" | "Purple" | "Cyan" | "White" | "BackgroundBlack" | "BackgroundRed" | "BackgroundGreen" | "BackgroundYellow" | "BackgroundBlue" | "BackgroundPurple" | "BackgroundCyan" | "BackgroundWhite" | "Reset";
//# sourceMappingURL=console.d.ts.map