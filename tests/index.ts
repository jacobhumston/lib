import * as lib from '../';

const logger = new lib.Logger({ name: 'TestLogger', defaultLogLevel: 'debug' });

logger.events.on('log', (message, level) => {
    console.log(message, level);
});

console.log(lib.getLoggerByName('TestLogger'));
