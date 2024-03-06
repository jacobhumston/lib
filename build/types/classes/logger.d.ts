/**
 * Class used to log information to the console.
 */
export declare class Logger {
    #private;
    /**
     * The source from which these logs come from.
     */
    source: string;
    /**
     * The console which all the logger methods rely on.
     */
    console: Console;
    /**
     * If logger messages should be colorless or not.
     */
    noColor: boolean;
    /**
     * @param sourceName The name of the source from which the logs come from.
     */
    constructor(sourceName: string, noColor?: boolean);
    /**
     * Log an info message to the console.
     * @param message The message to log.
     */
    info(...message: string[]): void;
    /**
     * Log a success message to the console.
     * @param message The message to log.
     */
    success(...message: string[]): void;
    /**
     * Log a warning message to the console.
     * @param message The message to log.
     */
    warn(...message: string[]): void;
    /**
     * Clears the console.
     */
    clear(): void;
}
//# sourceMappingURL=logger.d.ts.map
