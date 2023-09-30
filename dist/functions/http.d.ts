/**
 * Create a quick http server that responds with a plain text message.
 * @param {number} port Port to listen to.
 * @param {string} message Message to send.
 * @returns {http.Server} The created server.
 */
export function quickServer(port: number, message: string): http.Server;
/**
 * Create a quick http server that redirects all requests to another location.
 * @param {number} port Port to listen to.
 * @param {string} location Location to redirect to.
 * @returns {http.Server} The created server.
 */
export function quickRedirectServer(port: number, location: string): http.Server;
//# sourceMappingURL=http.d.ts.map