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
export function param(type: stringType, value?: any, name: string, optional?: boolean | undefined): void;
/**
 * @typedef {object} typeObject
 * @property {stringType} type
 * @property {boolean} [optional]
 */
/**
 * Check if properties of an object are the correct type.
 * Object (value) should be type checked before using this function.
 * Not all params of this function are type checked.
 * @param {Object.<string, any>} [value] Value to check.
 * @param {Object.<string, typeObject>} object Object of types to check.
 * @param {string} name Name of the parameter.
 * @param {boolean} [optional] If the parameter is optional. (default: false)
 * @returns {void}
 */
export function paramObject(value?: {
    [x: string]: any;
} | undefined, object: {
    [x: string]: typeObject;
}, name: string, optional?: boolean | undefined): void;
/**
 * Possible results of *typeof*.
 */
export type stringType = "undefined" | "object" | "boolean" | "number" | "bigint" | "string" | "function";
export type typeObject = {
    type: stringType;
    optional?: boolean | undefined;
};
//# sourceMappingURL=validator.d.ts.map