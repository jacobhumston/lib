/**
 * @file http.js
 * Http based functions.
 */

// Imports
import * as http from 'http';
import * as validate from './validator.js';

/**
 * Create a quick http server that responses with plain text.
 * @param {number} port Port to listen to.
 * @param {string} message Message to send.
 * @returns {http.Server} The created server.
 */
export function quickServer(port, message) {
    validate.param('number', port, 'port');
    validate.param('string', message, 'message');
    return http
        .createServer(function (_, response) {
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.write(message);
            response.end();
        })
        .listen(port);
}
