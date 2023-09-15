// Imports
import { wait, waitLoop } from './functions/promise.js';
import { createFileTree, duplicateFile } from './functions/file.js';
import { param, paramObject } from './functions/validator.js';
import { quickServer, quickRedirectServer } from './functions/http.js';
import { getColor, log } from './functions/console.js';
import { TimeConversion } from './classes/timeConversion.js';
import { Cache } from './classes/cache.js';

// Exports
export {
    wait,
    waitLoop,
    createFileTree,
    duplicateFile,
    param,
    paramObject,
    quickServer,
    quickRedirectServer,
    getColor,
    log,
    TimeConversion,
    Cache,
};
