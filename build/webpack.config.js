const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, '../client/app.js')
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, '../dist'),//输出的目录
        publicPath: '/public',//静态资源前面的路径（例如cdn）
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                loder: 'bable-loader'
            },
        ]
    }
}