/**
 * Returns a promise that resolves after the time provided.
 * @param {number} time The amount of time (in milliseconds) to wait.
 * @returns {Promise<void>}
 */
export function wait(time: number): Promise<void>;
/**
 * Returns a promise that resolves once *callback* is called  *amount* of times.
 * @param {Function} callback Function to execute.
 * @param {number} amount Amount of times to execute the function.
 * @param {number} [time=0] Time (in milliseconds) to wait between each iteration. (default: 0ms)
 * @returns {Promise<any[]>} An array of results of each iteration.
 */
export function waitLoop(callback: Function, amount: number, time?: number | undefined): Promise<any[]>;
//# sourceMappingURL=promise.d.ts.map