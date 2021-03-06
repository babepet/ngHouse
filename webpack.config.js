const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {app:'./src/app/app.js', vendor: ['jquery']},
    stats: { children: false },//Entrypoint undefined = index.html
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].bundle.js'    //"bundle-[name]-[hash:8].js",
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader:[MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    devServer:{
        contentBase:'/build/',
        host: 'localhost',//服务主机
        historyApiFallback: false,
        hot:true,
        inline:true,
        progress:true,
        port:8087 //端口你可以自定义
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '首页',  //生成的页面标题<head><title>首页</title></head>
            filename: 'index.html', // dist目录下生成的文件名
            template: './src/index.html' // 我们原来的index.html，作为模板
        }),
        new CopyWebpackPlugin([ 
        // 复制插件
        {   from: path.join(__dirname,'src/app/pages'), 
            to: path.join(__dirname,'build/pages') }
        ]),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        //自动启动浏览器
        new OpenBrowserPlugin({ url: 'http://localhost:8087' })
    ]
};