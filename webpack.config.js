// webpack是基于node进行构建的，所以webpack中配置文件中，任何合法的代码都是支持的
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin');

// 当以命令行形式运行webpack或webpack-dev-server的时候，工具会发现，我们并没有提供要打包的文件入口和出口文件
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
            filename: 'index.html' // 设置生成的内存页面的名称
        }),
        new vueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: 'url-loader'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            }
        ]
        
    },
        
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"   // 设置 Vue 被导入时候包的路径
        }
    }
}