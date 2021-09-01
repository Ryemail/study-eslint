const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        compress: true,
    },
    plugins: [
        new ESLintPlugin(),

        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
