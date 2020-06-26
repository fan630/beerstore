module.exports = {
    // lintOnSave: true,
    // chainWebpack: config => {
    //     config.plugin('html').tap(args => {
    //         args[0].chunksSortMode = 'none'
    //         return args
    //     })
    // },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/beerstore/'
        : '/'
    ,
}