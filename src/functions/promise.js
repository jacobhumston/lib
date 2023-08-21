/**
 * @file promise.js
 * Promise based functions.
 */

/**
 * Returns a promise that resolves after the time provided.
 * @param {number} time The amount of time (in milliseconds) to wait.
 * @returns {Promise<void>}
 */
export function wait(time) {
    if (typeof time !== 'number') throw 'Parameter "time" is not a number.';
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}
