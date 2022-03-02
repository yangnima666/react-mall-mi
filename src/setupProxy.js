const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://mall-pre.springboot.cn',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }))
}