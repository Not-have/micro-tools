const path = require('path');

module.exports = {
    // target: 'web', // 或者 'browserslist: defaults'
    mode: 'development', // 或 'production'，或 'none'
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    }
};