// Imports
import * as lib from '../src/core.js';

// Tests
const time = new lib.TimeConversion({ years: 1 });
console.log(time.convert().days);
