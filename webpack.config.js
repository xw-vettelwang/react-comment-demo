const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry:__dirname + "/app/index.js",//已多次提及的唯一入口文件
    output: {
        path:__dirname +  '/build',//打包后的文件存放的地方
        filename: "[name].js"//打包后输出文件的文件名
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot:true //热更新
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
        new HtmlWebpackPlugin({template:__dirname + "/app/index.tpl.html"}),
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new webpack.HotModuleReplacementPlugin()
    ]
}