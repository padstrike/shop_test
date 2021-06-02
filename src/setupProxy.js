const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/rest-api",{
            target: "http://localhost",
            secure: false,
            changeOrigin: true
        })
    )
    app.use(
        createProxyMiddleware("/item",{
            target: "http://localhost",
            secure: false,
            changeOrigin: true
        })
    )
}