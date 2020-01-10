/* eslint-disable global-require */

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  const proxy = require('http-proxy-middleware');
  const apiProxy = proxy('/reddit', {
    target: 'https://api.reddit.com/',
    changeOrigin: true,
    pathRewrite: { '^/reddit-api': '/' },
  });
  app.use('/reddit-api', apiProxy);

  if (isProd) {
    const addProdMiddlewares = require('./addProdMiddlewares');
    addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('../../config/webpack.dev.babel');
    const addDevMiddlewares = require('./addDevMiddlewares');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
