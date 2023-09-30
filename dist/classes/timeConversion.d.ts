/**
 * @typedef {object} timeObject Time object.
 * @property {number} [milliseconds] Number of milliseconds.
 * @property {number} [seconds] Number of seconds.
 * @property {number} [minutes] Number of minutes.
 * @property {number} [hours] Number of hours.
 * @property {number} [days] Number of days.
 * @property {number} [weeks] Number of weeks.
 * @property {number} [months] Number of months.
 * @property {number} [years] Number of years.
 */
/**
 * @typedef {object} timeObjectNormal Time object.
 * @property {number} milliseconds Number of milliseconds.
 * @property {number} seconds Number of seconds.
 * @property {number} minutes Number of minutes.
 * @property {number} hours Number of hours.
 * @property {number} days Number of days.
 * @property {number} weeks Number of weeks.
 * @property {number} months Number of months.
 * @property {number} years Number of years.
 */
/**
 * Class to convert time. (Seconds to Hours for example.)
 */
export class TimeConversion {
    /**
     * Create an instance of *TimeConversion*.
     * @param {timeObject} time Time object to create this class with.
     * @returns {TimeConversion}
     */
    constructor(time: timeObject);
    /**
     * Add time.
     * @param {timeObject} time Time object to add.
     * @returns {void}
     */
    add(time: timeObject): void;
    /**
     * Subtract time.
     * @param {timeObject} time Time object to subtract.
     * @returns {void}
     */
    subtract(time: timeObject): void;
    /**
     * Create a timeObject.
     * @returns {timeObjectNormal}
     */
    convert(): timeObjectNormal;
    /**
     * Create a timeObject with a rounded result.
     * @returns {timeObjectNormal}
     */
    roundedConvert(): timeObjectNormal;
    #private;
}
/**
 * Time object.
 */
export type timeObject = {
    /**
     * Number of milliseconds.
     */
    milliseconds?: number | undefined;
    /**
     * Number of seconds.
     */
    seconds?: number | undefined;
    /**
     * Number of minutes.
     */
    minutes?: number | undefined;
    /**
     * Number of hours.
     */
    hours?: number | undefined;
    /**
     * Number of days.
     */
    days?: number | undefined;
    /**
     * Number of weeks.
     */
    weeks?: number | undefined;
    /**
     * Number of months.
     */
    months?: number | undefined;
    /**
     * Number of years.
     */
    years?: number | undefined;
};
/**
 * Time object.
 */
export type timeObjectNormal = {
    /**
     * Number of milliseconds.
     */
    milliseconds: number;
    /**
     * Number of seconds.
     */
    seconds: number;
    /**
     * Number of minutes.
     */
    minutes: number;
    /**
     * Number of hours.
     */
    hours: number;
    /**
     * Number of days.
     */
    days: number;
    /**
     * Number of weeks.
     */
    weeks: number;
    /**
     * Number of months.
     */
    months: number;
    /**
     * Number of years.
     */
    years: number;
};
//# sourceMappingURL=timeConversion.d.ts.map