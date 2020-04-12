const path = require('path');

const ENV = process.env.ENV || 'local';
const port = process.env.PORT || 5000;

const BASE_PATH = 'dist';
const getAbsolutePath = (...args) => path.resolve(BASE_PATH, ...args);
const config = {
  port,
  healthCheckMessage: 'Covid 19 UI is working',
  staticAssetsCachingAge: 0,
  routes: {
    healthCheck: '/healthcheck',
    static: '/static',
    all: '*',
  },
  paths: {
    main: getAbsolutePath('index.html'),
    static: getAbsolutePath('static'),
  },
};

console.log('LOG', JSON.stringify({ ENV, ...config }, null, 2));

module.exports = config;
