const express = require('express')
const app = express()
var data = require('./public/data.json')  //本地json文件数据

var apiRoutes = express.Router();
app.use('/api', apiRoutes)


module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/beerstore/'
        : '/'
    ,
    devServer: {
        before(app) {
            app.get('/api/data', (req, res) => {
                res.json({
                    errno: 0,   // 这里是你的json内容
                    data: data
                })
            })
        },
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null  
    },
    // pwa: {
    //     iconPaths: {
    //         favicon32: './favicon.ico',
    //         favicon16: './favicon.ico',
    //         appleTouchIcon: './favicon.ico',
    //         maskIcon: './favicon.ico',
    //         msTileImage: './favicon.ico'
    //     }
    // }
}