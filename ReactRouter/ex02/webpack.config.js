const path = require('path');
module.exports = {
    //這個webpack打包的對象，這裡面加上剛剛建立的index.js
    entry: {
        index: ['./src/index.jsx']
    },
    output: {
        //這裡是打包後的檔案名稱
        filename: 'src/index_bundle.js',
        //打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
        path: path.resolve('./'),
    },
    module:{
        rules:[
            {test:/\.jsx$/,use:{loader:'babel-loader',options:{presets:['@babel/preset-react','@babel/preset-env']}}},
            {test:/\.js$/,use:{loader:'babel-loader',options:{presets:['@babel/preset-env']}}}
        ]
    }
};