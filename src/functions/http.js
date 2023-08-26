/**
 * @file http.js
 * Http based functions.
 */

// Imports
import * as http from 'http';
import * as validate from './validator.js';

/**
 * Create a quick http server that responds with a plain text message.
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

/**
 * Create a quick http server that redirects all requests to another location.
 * @param {number} port Port to listen to.
 * @param {string} location Location to redirect to.
 * @returns {http.Server} The created server.
 */
export function quickRedirectServer(port, location) {
    validate.param('number', port, 'port');
    validate.param('string', location, 'location');
    return http
        .createServer(function (_, response) {
            response.writeHead(301, { Location: location });
            response.end();
        })
        .listen(port);
}
