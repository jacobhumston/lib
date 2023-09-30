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
export function createFileTree(path: string): fileTreeResult;
/**
 * Duplicate a file.
 * The new file will be included with "(number)" in it's name if a file in the directory already exists.
 * @param {string} file Path of the file to duplicate.
 * @param {string} [outputPath] Path to place the new file. If undefined, the output path will be the file's path.
 * @param {string} [newName] New name for the file. If undefined, the file's name will be the same.
 * @returns {string} The path of the new file.
 */
export function duplicateFile(file: string, outputPath?: string | undefined, newName?: string | undefined): string;
/**
 * @typedef {object} filePermissions
 * @property {boolean} visible If this file is visible.
 * @property {boolean} read If this file can be read.
 * @property {boolean} write If this file can be written to.
 * @property {boolean} execute If this file can be executed.
 */
/**
 * Get the permissions of a file.
 * @param {string} file Path to file to get the permissions of.
 * @returns {filePermissions}
 */
export function getFilePermissions(file: string): filePermissions;
export type fileTreeObject = {
    /**
     * Name of the file.
     */
    name: string;
    /**
     * Path of the file.
     */
    path: string;
    /**
     * If the file is a directory or not.
     */
    isDirectory: boolean;
    /**
     * Files of this directory. (Null if not a directory.)
     */
    files: fileTreeObject[] | null;
};
export type fileTreeResult = {
    /**
     * The resulting file tree object.
     */
    result: fileTreeObject[];
    /**
     * Number of files which were not added due to an error. (Likely permission error, or private files.)
     */
    failed: number;
    /**
     * Number of files in this tree. (Does NOT include directories.)
     */
    fileCount: number;
};
export type filePermissions = {
    /**
     * If this file is visible.
     */
    visible: boolean;
    /**
     * If this file can be read.
     */
    read: boolean;
    /**
     * If this file can be written to.
     */
    write: boolean;
    /**
     * If this file can be executed.
     */
    execute: boolean;
};
//# sourceMappingURL=file.d.ts.map