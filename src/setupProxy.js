const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/token',
    createProxyMiddleware({
      target: 'http://api.ps-demo.net:8010',
      changeOrigin: true,
    })
  );

  app.use(
    '/batch',
    createProxyMiddleware({
      target: 'http://api.ps-demo.net:8010',
      changeOrigin: true,
    })
  );
};
