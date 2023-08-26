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
 * @param {any} [value] Value to check.
 * @param {string} name Name of the parameter.
 * @param {boolean} [optional] If the parameter is optional. (default: false)
 * @returns {void}
 */
export function param(type, value, name, optional) {
    if (optional) if (value === undefined) return;
    if (typeof value !== type) throw `Parameter "${name}" is not a ${type}.`;
}

/**
 * Check if properties of an object are the correct type.
 * Object (value) should be type checked before using this function.
 * Not all params of this function are type checked.
 * @param {Object.<string, any>} [value] Value to check.
 * @param {Object.<string, { type: stringType, optional: [boolean] }>} object Object of types to check.
 * @param {string} name Name of the parameter.
 * @param {boolean} [optional] If the parameter is optional. (default: false)
 * @returns {void}
 */
export function paramObject(value, object, name, optional) {
    param('object', value, 'value', true);
    param('object', object, 'object');

    if (optional) if (value === undefined) return;

    for (const key in value) {
        if (object[key] === undefined) throw `Property "${key}" is not a valid property of "${name}".`;
        if (object[key].optional) if (value[key] === undefined) continue;
        if (typeof value[key] !== object[key].type)
            throw `Property "${key}" of "${name}" is not a ${object[key].type}.`;
    }
}
