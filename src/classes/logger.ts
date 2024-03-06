import { consoleColors } from '../index.js';

/**
 * Class used to log information to the console.
 */
export class Logger {
    /**
     * The source from which these logs come from.
     */
    source: string;

    /**
     * The console which all the logger methods rely on.
     */
    console: Console = console;

    /**
     * If logger messages should be colorless or not.
     */
    noColor: boolean = false;

    /**
     * @param sourceName The name of the source from which the logs come from.
     */
    constructor(sourceName: string, noColor?: boolean) {
        this.source = sourceName;
        if (noColor !== undefined) this.noColor = noColor;
    }

    /**
     * Private method to color a string, which respects `this.noColor`.
     * @param string The string to color.
     * @param color The color to use when coloring this string.
     * @returns The modified string.
     */
    #colorString(string: string, color: string): string {
        if (this.noColor == true) return string;
        return `${color}${string}${consoleColors.reset}`;
    }

    /**
     * Log an info message to the console.
     * @param message The message to log.
     */
    info(...message: string[]): void {
        this.console.log(`${this.#colorString(`[$${this.source}/info]:`, consoleColors.blue)} ${message.join(' ')}`);
    }

    /**
     * Log a success message to the console.
     * @param message The message to log.
     */
    success(...message: string[]): void {
        this.console.log(
            `${this.#colorString(`[$${this.source}/success]:`, consoleColors.green)} ${message.join(' ')}`
        );
    }

    /**
     * Log a warning message to the console.
     * @param message The message to log.
     */
    warn(...message: string[]): void {
        this.console.log(`${this.#colorString(`[$${this.source}/warn]:`, consoleColors.yellow)} ${message.join(' ')}`);
    }

    /**
     * Clears the console.
     */
    clear(): void {
        this.console.clear();
    }
}
