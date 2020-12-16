const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mockend.com/RalfWeiss/ts-shared-mp/',
      changeOrigin: true,
    })
  );
};