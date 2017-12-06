const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:__dirname + "/app/app.js",//已多次提及的唯一入口文件
    output: {
        path:__dirname +  '/build',//打包后的文件存放的地方
        filename: "[name]-[hash].js"//打包后输出文件的文件名
    },
    module: {
        rules: [
            {
                test:/(\.jsx|\.js)/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude:/node_modules/
            },
            {
                test:/(\.css)$/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules:true
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test:/(\.png)$/,
                use:[
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template:__dirname + "/app/app.tmp.html"}),
        new webpack.BannerPlugin('版权所有，翻版必究'),
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(), //js压缩插件
        new ExtractTextPlugin("style.css")
    ]
}