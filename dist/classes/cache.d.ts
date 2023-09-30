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
     */
    constructor(itemExpire: number);
    /**
     * Stops the cache's sweeper.
     */
    stop(): void;
    /**
     * Start the cache's sweeper.
     * This will stop the sweeper and start it again if it's currently running.
     * @param {number} itemExpire The amount of time (in seconds) that an item will be removed after it is added.
     */
    start(): void;
    /**
     * Get an item from the cache.
     * @param {string} name The name of the item.
     * @returns {any|null} The item, or null if it doesn't exist.
     */
    get(name: string): any | null;
    /**
     * Set the value of an item in cache.
     * This *will* reset the item's expire time.
     * @param {string} name The name of the item to set the value of.
     * @param {any} item The item.
     * @returns {void}
     */
    set(name: string, item: any): void;
    /**
     * Delete an item in the cache.
     * @param {string} name The name of the item to delete.
     * @returns {void}
     */
    delete(name: string): void;
    /**
     * Delete all items in the cache.
     * @returns {void}
     */
    clear(): void;
    #private;
}
/**
 * An item in the cache.
 */
export type cacheItem = {
    /**
     * The cached item.
     */
    item: any;
    /**
     * The timestamp of when this item was created.
     */
    stamp: number;
};
//# sourceMappingURL=cache.d.ts.map