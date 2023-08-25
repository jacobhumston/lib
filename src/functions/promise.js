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
    if (0 > time) throw 'Parameter "time" is not greater then or equal to 0.';
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}

/**
 * Returns a promise that resolves once *callback* is called  *amount* of times.
 * @param {Function} callback Function to execute.
 * @param {number} amount Amount of times to execute the function.
 * @param {number} [time] Time (in milliseconds) to wait between each iteration. (default: 0ms)
 * @returns {Promise<any[]>} An array of results of each iteration.
 */
export function waitLoop(callback, amount, time) {
    if (typeof callback !== 'function') throw 'Parameter "callback" is not a function.';
    if (typeof amount !== 'number') throw 'Parameter "amount" is not a number.';
    if (1 > amount) throw 'Parameter "amount" is not greater then or equal to 1.';
    if (time !== undefined) if (typeof time !== 'number') throw 'Parameter "time" is not a number.';
    if (0 > time) throw 'Parameter "time" is not greater then or equal to 0.';
    const results = [];
    return new Promise(async function (resolve) {
        for (let i = 0; i < amount; i++) {
            results[i] = callback();
            if (time) await wait(time);
        }
        resolve(results);
    });
}
