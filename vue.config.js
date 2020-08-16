// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "~@/assets/common/css/theme.scss";`
            }
        }
    },
    devServer: {
        proxy: { //配置多个跨域
            "/api": {
                target: "http://g278828097.picp.vip",
                changeOrigin: true,
                // ws: true,//websocket支持
                secure: false,
                pathRewrite: {
                    "^/api": "/"
                }
            },
            // "/api2": {
            //     target: "http://172.12.12.12:2018",
            //     changeOrigin: true,
            //     //ws: true,//websocket支持
            //     secure: false,
            //     pathRewrite: {
            //         "^/api2": "/"
            //     }
            // },
        }
    }
}