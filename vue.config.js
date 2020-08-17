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
				target: "http://39.97.171.32:8089",
				changeOrigin: true,
				//ws: true,//websocket支持
				secure: false,
				pathRewrite: {
					"^/api": "/"
				}
			},
            "/api2": {
                target: "http://g278828097.picp.vip",
                changeOrigin: true,
                // ws: true,//websocket支持
                secure: false,
                pathRewrite: {
                    "^/api2": "/"
                }
            },
            
        }
    }
}