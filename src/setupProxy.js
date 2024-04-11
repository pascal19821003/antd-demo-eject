const { createProxyMiddleware } = require('http-proxy-middleware');
// const createProxyMiddleware = require('http-proxy-middleware');
 
console.log( "---------createProxyMiddleware----------" );
module.exports = function (app) {
    // 开发阶段使用
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://127.0.0.1:8081/', 
            changeOrigin: true,
            pathRewrite: {
                "^/api": "/"
            }
        }
        )
    );
        
}