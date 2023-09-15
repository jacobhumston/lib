// Imports
import * as lib from '../src/core.js';

// Tests

const time = new lib.TimeConversion({ minutes: 1321, months: 400, years: 2134 });
for (const name in time.roundedConvert()) {
    const value = time.roundedConvert()[name];
    lib.log('Debug', `${name}: ${value}`);
}
