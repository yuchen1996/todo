var path = require('path');
var webpack = require('webpack');  //加载webpack依赖包
module.exports = {
    devtool: 'source-map',
    entry: path.resolve(__dirname, './src/App.js'),

    output: {
        path: path.resolve(__dirname, './../static'),
        filename: 'todolist.js'
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
