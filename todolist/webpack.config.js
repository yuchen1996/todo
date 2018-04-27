var path = require('path');
var webpack = require('webpack');  //加载webpack依赖包
module.exports = {
    entry: path.resolve(__dirname, './src/App.js'),
    //入口文件并添加了热加载
    output: {
        path: path.resolve(__dirname, './../static'),
        filename: 'todolist.js'  //输出文件
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname)
                ],
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        //自动扩展文件后缀名
        extensions: ['.js', '.json', '.scss', '.ts']
    }
};
