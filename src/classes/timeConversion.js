/**
 * @file timeConversion.js
 * Class to convert time.
 */

// Imports
import * as validate from '../functions/validator.js';

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
    #ms = 0;

    /**
     * Create an instance of *TimeConversion*.
     * @param {timeObject} time Time object to create this class with.
     * @returns {TimeConversion}
     */
    constructor(time) {
        validate.param('object', time, 'time');
        validate.paramObject(
            time,
            {
                milliseconds: { type: 'number', optional: true },
                seconds: { type: 'number', optional: true },
                minutes: { type: 'number', optional: true },
                hours: { type: 'number', optional: true },
                days: { type: 'number', optional: true },
                weeks: { type: 'number', optional: true },
                months: { type: 'number', optional: true },
                years: { type: 'number', optional: true },
            },
            'time'
        );

        if (time.milliseconds) this.#ms = time.milliseconds;
        if (time.seconds) this.#ms = this.#ms + time.seconds * 1000;
        if (time.minutes) this.#ms = this.#ms + time.minutes * 60000;
        if (time.hours) this.#ms = this.#ms + time.hours * 3.6e6;
        if (time.days) this.#ms = this.#ms + time.days * 8.64e7;
        if (time.weeks) this.#ms = this.#ms + time.weeks * 6.048e8;
        if (time.months) this.#ms = this.#ms + time.months * 2.628e9;
        if (time.years) this.#ms = this.#ms + time.years * 3.154e10;
    }

    /**
     * Add time.
     * @param {timeObject} time Time object to add.
     * @returns {void}
     */
    add(time) {
        validate.param('object', time, 'time');
        validate.paramObject(
            time,
            {
                milliseconds: { type: 'number', optional: true },
                seconds: { type: 'number', optional: true },
                minutes: { type: 'number', optional: true },
                hours: { type: 'number', optional: true },
                days: { type: 'number', optional: true },
                weeks: { type: 'number', optional: true },
                months: { type: 'number', optional: true },
                years: { type: 'number', optional: true },
            },
            'time'
        );

        if (time.milliseconds) this.#ms = this.#ms + time.milliseconds;
        if (time.seconds) this.#ms = this.#ms + time.seconds * 1000;
        if (time.minutes) this.#ms = this.#ms + time.minutes * 60000;
        if (time.hours) this.#ms = this.#ms + time.hours * 3.6e6;
        if (time.days) this.#ms = this.#ms + time.days * 8.64e7;
        if (time.weeks) this.#ms = this.#ms + time.weeks * 6.048e8;
        if (time.months) this.#ms = this.#ms + time.months * 2.628e9;
        if (time.years) this.#ms = this.#ms + time.years * 3.154e10;

        return;
    }

    /**
     * Subtract time.
     * @param {timeObject} time Time object to subtract.
     * @returns {void}
     */
    subtract(time) {
        validate.param('object', time, 'time');
        validate.paramObject(
            time,
            {
                milliseconds: { type: 'number', optional: true },
                seconds: { type: 'number', optional: true },
                minutes: { type: 'number', optional: true },
                hours: { type: 'number', optional: true },
                days: { type: 'number', optional: true },
                weeks: { type: 'number', optional: true },
                months: { type: 'number', optional: true },
                years: { type: 'number', optional: true },
            },
            'time'
        );

        if (time.milliseconds) this.#ms = this.#ms - time.milliseconds;
        if (time.seconds) this.#ms = this.#ms - time.seconds * 1000;
        if (time.minutes) this.#ms = this.#ms - time.minutes * 60000;
        if (time.hours) this.#ms = this.#ms - time.hours * 3.6e6;
        if (time.days) this.#ms = this.#ms - time.days * 8.64e7;
        if (time.weeks) this.#ms = this.#ms - time.weeks * 6.048e8;
        if (time.months) this.#ms = this.#ms - time.months * 2.628e9;
        if (time.years) this.#ms = this.#ms - time.years * 3.154e10;

        this.#ms = Math.max(this.#ms, 0);

        return;
    }

    /**
     * Create a timeObject.
     * @returns {timeObjectNormal}
     */
    convert() {
        return {
            milliseconds: this.#ms,
            seconds: Math.max(this.#ms / 1000, 0),
            minutes: Math.max(this.#ms / 60000, 0),
            hours: Math.max(this.#ms / 3.6e6, 0),
            days: Math.max(this.#ms / 8.64e7, 0),
            weeks: Math.max(this.#ms / 6.048e8, 0),
            months: Math.max(this.#ms / 2.628e9, 0),
            years: Math.max(this.#ms / 3.154e10, 0),
        };
    }
}
