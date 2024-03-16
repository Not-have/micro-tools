const path = require('path');
const webpack = require('webpack');

module.exports = {
    // target: 'web', // 或者 'browserslist: defaults'
    mode: 'none', // 或 'production'，或 'none'
    devtool: 'source-map',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        library: 'microStyle',
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: 'umd'
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
    },
    // 解决环境配置
    plugins: [
        new webpack.DefinePlugin({
          'process.env': '{}'
        })
      ]
};