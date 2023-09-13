// Imports
import * as lib from '../src/core.js';

// Tests
await lib.waitLoop(
    function () {
        lib.duplicateFile('test/run.js', 'test/h');
    },
    100,
    0
);
