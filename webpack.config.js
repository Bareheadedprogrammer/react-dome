var path = require('path');
module.exports = {
    entry: './src/app.js',//入口文件
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'index.js'
    },//出口文件
    module: {
        rules: [
            {
                test:/\.js$/,//解析的文件是谁
                exclude:/node-modules/, //不解析的文件
                use:{
                    loader:"babel-loader",  //用什么转换器
                    options:{
                        presets:['es2015','stage-0','react']//安装了那些转换器
                    }
                }   
            },{
                test:/\.css$/,
                use:["style-loader","css-loader"]
            }]
    }
}