// Imports
import * as lib from '../src/core.js';

// Tests

const time = new lib.TimeConversion({ seconds: 5 });

const cache = new lib.Cache(time.roundedConvert().seconds);
cache.set('bob', 'bob');
await lib.wait(5000);
console.log(cache.get('bob'));
cache.set('tim', 'tim');
await lib.wait(1000);
console.log(cache.get('bob'), cache.get('tim'));
cache.stop();
