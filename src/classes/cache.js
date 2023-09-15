/**
 * @file cache.js
 * A simple class to keep cached items. (In memory.)
 */

// Imports
import * as validate from '../functions/validator.js';

/**
 * @typedef {object} cacheItem An item in the cache.
 * @property {any} item The cached item.
 * @property {number} stamp The timestamp of when this item was created.
 */

/**
 * A simple class to keep cached items. (In memory.)
 */
export class Cache {
    /**
     * Create an instance of *Cache*.
     * @param {number} itemExpire The amount of time (in seconds) that an item will be removed after it is added.
     * @constructor
     */
    constructor(itemExpire) {
        validate.param('number', itemExpire, 'itemExpire');
        this.#sweeper(itemExpire);
    }

    /**
     * Cached items.
     * @type {Object.<string, cacheItem>}
     */
    #items = {};

    /**
     * @type {number|null}
     */
    #intervalId = null;

    /**
     * Start the cache sweeper.
     * @param {number} itemExpire
     * @method sweeper
     * @private
     */
    #sweeper(itemExpire) {
        this.stop();
        this.#intervalId = setInterval(() => {
            const currentTime = new Date().getTime();
            for (const itemKey in this.#items) {
                const item = this.#items[itemKey];
                if (currentTime - item.stamp >= itemExpire * 1000) {
                    delete this.#items[itemKey];
                }
            }
        }, 1000);
    }

    /**
     * Stops the cache's sweeper.
     * @method
     */
    stop() {
        if (this.#intervalId) clearInterval(this.#intervalId);
    }

    /**
     * Start the cache's sweeper.
     * This will stop the sweeper and start it again if it's currently running.
     * @param {number} itemExpire The amount of time (in seconds) that an item will be removed after it is added.
     * @method start
     */
    start() {
        validate.param('number', itemExpire, 'itemExpire');
        this.#sweeper(itemExpire);
    }

    /**
     * Get an item from the cache.
     * @param {string} name The name of the item.
     * @returns {any|null} The item, or null if it doesn't exist.
     * @method get
     */
    get(name) {
        validate.param('string', name, 'name');
        return this.#items[name] ? this.#items[name].item : null;
    }

    /**
     * Set the value of an item in cache.
     * This *will* reset the item's expire time.
     * @param {string} name The name of the item to set the value of.
     * @param {any} item The item.
     * @returns {void}
     * @method set
     */
    set(name, item) {
        validate.param('string', name, 'name');
        this.#items[name] = {
            item: item,
            stamp: new Date().getTime(),
        };
    }

    /**
     * Delete an item in the cache.
     * @param {string} name The name of the item to delete.
     * @returns {void}
     * @method delete
     */
    delete(name) {
        delete this.#items[name];
    }

    /**
     * Delete all items in the cache.
     * @returns {void}
     * @method clear
     */
    clear() {
        for (const itemKey in this.#items) {
            delete this.#items[itemKey];
        }
    }
}
