const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: './js/main.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js'
    },
    module:{
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                exclude: /node__modules/,
                options: {
                    modules: true
                }
            }]
        }]
    }
};
