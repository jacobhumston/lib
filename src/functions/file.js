/**
 * @file file.js
 * File based functions.
 */

// Imports
import * as fs from 'fs';
import * as validate from './validator.js';

/**
 * @typedef {Object} fileTreeObject
 * @property {string} name Name of the file.
 * @property {string} path Path of the file.
 * @property {boolean} isDirectory If the file is a directory or not.
 * @property {fileTreeObject[] | null} files Files of this directory. (Null if not a directory.)
 */

/**
 * @typedef {Object} fileTreeResult
 * @property {fileTreeObject[]} result The resulting file tree object.
 * @property {number} failed Number of files which were not added due to an error. (Likely permission error, or private files.)
 * @property {number} fileCount Number of files in this tree. (Does NOT include directories.)
 */

/**
 * Create a file tree array from a directory.
 * @param {string} path Path to the directory to create a file tree array from.
 * @returns {fileTreeResult}
 */
export function createFileTree(path) {
    validate.param('string', path, 'path');
    if (!fs.existsSync(path)) throw 'Path does not exist.';
    if (!fs.lstatSync(path).isDirectory()) throw 'Path is not a directory.';

    const result = [];
    let failed = 0;
    let fileCount = 0;
    /** @param {string} path */
    /** @param {[]} [array] */
    function dir(path, array) {
        const obj = {};
        obj.name = path.split('/').pop() ?? path;
        obj.path = path;
        obj.isDirectory = true;
        obj.files = [];
        for (const file of fs.readdirSync(path)) {
            try {
                if (fs.lstatSync(`${path}/${file}`).isDirectory()) {
                    try {
                        dir(`${path}/${file}`, obj.files);
                    } catch {
                        failed++;
                    }
                } else {
                    const fileObj = {};
                    fileObj.name = file;
                    fileObj.path = `${path}/${file}`;
                    fileObj.isDirectory = false;
                    fileObj.files = null;
                    obj.files.push(fileObj);
                    fileCount++;
                }
            } catch {
                failed++;
            }
        }
        if (array) {
            array.push(obj);
        } else {
            result.push(obj);
        }
    }
    dir(path);
    return {
        result: result,
        failed: failed,
        fileCount: fileCount,
    };
}
