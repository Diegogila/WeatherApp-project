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
            test: /\.js?$/,
            exclude: /node__modules/,
            use: [{
                loader: 'babel-loader',
            }]
        },
        {
            test:/\.css$/i,
            use: [{loader: "style-loader", options: {injectType:"styleTag"}},"css-loader"]
        },
    ]
    },
    plugins:[
    new HtmlWebpackPlugin({
        inject: true,
        template: './public/index.html',
        filename: 'index.html'
    }),
    new CopyWebpackPlugin({
        patterns: [
            {from: "./assets/images", to: "./assets/images"}
        ]
    })
    ]
}