// Imports
import * as lib from '../src/core.js';

// Tests
const server = lib.quickServer(1002, 'pong');
lib.wait(2000).then(() => server.close());
