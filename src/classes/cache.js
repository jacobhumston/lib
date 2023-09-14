/**
 * @file cache.js
 * A simple class to keep cache items. (In memory.)
 */

// Imports
import * as validate from '../functions/validator.js';

export class Cache {
    /**
     * Create an instance of *Cache*.
     * @param {number} itemExpire The amount of time (in milliseconds) that an item will be removed after it is added.
     */
    constructor(itemExpire) {
        validate.param('number', itemExpire, 'itemExpire');
        this.#sweeper(itemExpire);
    }

    /**
     * Start the cache sweeper.
     * @param {number} itemExpire
     */
    #sweeper = function (itemExpire) {};
}
