const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|svg|jpe?g|gif)$/, use: ['file-loader?name=./assets/images/[name].[ext]'] },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'dist/assets' }
        ])
    ]
};