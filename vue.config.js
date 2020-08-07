module.exports = {
    lintOnSave: false, 
    devServer: {
        proxy: {
            '/touch': {
               
                target: 'https://mock.yonyoucloud.com/',
        
                changeOrigin: true,
                ws:true,
                pathRewrite: {
                    '^/touch': ''
                }
            }
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {

        } else {

        }
    },

}