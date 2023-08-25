/**
 * @file validator.js
 * Functions used to validate things. (Such as function parameters.)
 */

/**
 * @typedef {"undefined" | "object" | "boolean" | "number" | "bigint" | "string" | "function"} stringType Possible results of *typeof*.
 */

/**
 * Check if a parameter is the correct type.
 * This function is not type checked on its own.
 * @param {stringType} type Type to check.
 * @param {any} value Value to check.
 * @param {string} name Name of the parameter.
 * @param {boolean} [optional] If the parameter is optional. (default: false)
 * @returns {void}
 */
export function param(type, value, name, optional) {
    if (optional) if (value === undefined) return;
    if (typeof value !== type) throw `Parameter "${name}" is not a ${type}.`;
}
