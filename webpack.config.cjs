const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/core.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'web'),
    },
    resolve: {
        fallback: {
            path: require.resolve('path-browserify'),
            http: require.resolve('stream-http'),
            buffer: require.resolve('buffer/'),
            url: require.resolve('url/'),
            fs: require.resolve('browserify-fs'),
            util: require.resolve('util/'),
            stream: require.resolve('stream-browserify'),
        },
    },
    plugins: [
        // fix "process is not defined" error:
        new webpack.ProvidePlugin({
            process: 'process/browser.js',
        }),
    ],
};
