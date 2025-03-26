import { EventEmitter } from 'node:events';

/** Log levels. */
export type LogLevel = 'info' | 'warn' | 'error' | 'debug' | 'success';

/** Logger options that can be used to modify a Logger's behavior. */
export type LoggerOptions = {
    /**
     * The default log level.
     * * Default: `'info'`
     */
    defaultLogLevel?: LogLevel;
    /**
     * Log prefix which will be at the start of every log message.
     * - If a string is provided, it will be used as the prefix.
     * - If a function is provided, it will be called with the log level and the options, and the return value will be used as the prefix.
     * - If null is provided, no prefix will be used.
     * * Default: `'[LEVEL]:'`
     */
    prefix?: string | ((level: LogLevel, options: Required<LoggerOptions>) => string) | null;
    /**
     * If true, the logger method's will call without error, however they won't output nor do anything.
     * This is useful for disabling logging in production.
     * * Default: `false`
     */
    disabled?: boolean;
    /**
     * The name of the logger. You can pass `null` to not save the logger.
     * This can be used to retrieve the logger from `getLoggerByName`.
     * - **Note:** Creating a logger with the same name as an existing logger will overwrite the existing logger in the map. However, "unsaved" loggers will still function as expected.
     * - This is the only logger option that should not be modified after the logger is created.
     * * Default: `'DefaultLogger'`
     */
    name?: string | null;
    /**
     * If true, the prefix will be spaced from the message.
     * * Default: `true`
     */
    includePrefixSpacing?: boolean;
};

/** Logger events. */
export interface LoggerEvents {
    /** Emitted when a log message is created. */
    log: [message: string, level: LogLevel];
}

/** Map of saved loggers. */
export const savedLoggers = new Map<string, Logger>();

/** An array of log levels ordered by smallest in length to greatest. */
export const logLevels: Array<LogLevel> = ['info', 'warn', 'debug', 'error', 'success'];

/** The default logger options. */
export const defaultLoggerOptions: Required<LoggerOptions> = {
    defaultLogLevel: 'info',
    prefix: (level) => `[${level.toUpperCase()}]:`,
    disabled: false,
    name: 'Logger',
    includePrefixSpacing: true,
};

/** Logger class with a lot of utility packed in.*/
export class Logger {
    /** This logger's options. */
    options: Required<LoggerOptions>;

    /** Events for this logger. */
    events: EventEmitter<LoggerEvents>;

    /**
     * Creates a new Logger.
     * @param options The options for this Logger.
     */
    constructor(options: LoggerOptions = {}) {
        this.options = { ...defaultLoggerOptions, ...options };
        this.events = new EventEmitter<LoggerEvents>();

        if (this.options.name) savedLoggers.set(this.options.name, this);
    }

    /**
     * Get the current prefix for this logger.
     * @returns Logger prefix.
     */
    getPrefix(logLevel: LogLevel): string {
        return (
            (typeof this.options.prefix === 'function'
                ? this.options.prefix(logLevel, this.options)
                : typeof this.options.prefix === 'string'
                  ? this.options.prefix
                  : '') + (this.options.includePrefixSpacing ? ' ' : '')
        );
    }
}

/**
 * Get a logger by name. If the logger does not exist, a new logger will be created.
 * @param name The name of the logger, defaults to `'DefaultLogger'`.
 * @returns The logger with the given name.
 */
export function getLoggerByName(name: string = 'DefaultLogger'): Logger {
    return savedLoggers.get(name) ?? new Logger({ name });
}

/**
 * Get the space padding for a log level.
 * This padding can be used to match log levels in length.
 * @param level The log level.
 * @returns The padding for the log level.
 */
export function getLogLevelPadding(level: LogLevel): string {
    // We can use the last index since they are ordered by length.
    return ' '.repeat((logLevels.at(-1) as string).length - level.length);
}
