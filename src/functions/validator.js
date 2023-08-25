/**
 * @file validator.js
 * Functions used to validate things. (Such as function parameters.)
 */

/**
 * Check if a parameter is the correct type.
 * This function is not type checked on its own.
 * @param {
 * "undefined"
 * | "object"
 * | "boolean"
 * | "number"
 * | "bigint"
 * | "string"
 * | "function"
 * } type Type to check.
 * @param {any} value Value to check.
 * @param {string} name Name of the parameter.
 * @returns {void}
 */
export function param(type, value, name) {
    if (typeof value !== type) throw `Parameter "${name}" is not a ${type}.`;
}
