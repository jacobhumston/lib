// Imports
import * as lib from '../src/core.js';

// Tests

const time = new lib.TimeConversion({ minutes: .5 });
lib.log("Success", JSON.stringify(time.roundedConvert()))
