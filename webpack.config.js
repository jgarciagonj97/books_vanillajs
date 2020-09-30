const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: './Front/app.js',
    output: {
        path: path.join(__dirname, 'back/public'),
        filename: 'js/bundle.js'
    },
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './Front/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ],

    devtool: 'source-map'

};