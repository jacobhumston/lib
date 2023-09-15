/**
 * @file file.js
 * File based functions.
 */

// Imports
import * as fs from 'fs';
import * as path from 'path';
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
    /** @param {any[]} [array] */
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

/**
 * Duplicate a file.
 * The new file will be included with "(number)" in it's name if a file in the directory already exists.
 * @param {string} file Path of the file to duplicate.
 * @param {string} [outputPath] Path to place the new file. If undefined, the output path will be the file's path.
 * @returns {string} The path of the new file.
 */
export function duplicateFile(file, outputPath) {
    validate.param('string', file, 'file');
    validate.param('string', outputPath, 'outputPath', true);
    let newFile = path.basename(file);
    let newPath = outputPath ?? path.dirname(file);
    let lastNumber = 0;
    while (fs.existsSync(`${newPath}/${newFile}`)) {
        if (newFile.includes(`(${lastNumber})`)) {
            newFile = newFile.replace(`(${lastNumber})`, `(${lastNumber + 1})`);
            lastNumber++;
        } else {
            newFile = `(${lastNumber + 1})-${newFile}`;
            lastNumber++;
        }
    }
    fs.writeFileSync(`${newPath}/${newFile}`, fs.readFileSync(file));
    return newFile;
}
