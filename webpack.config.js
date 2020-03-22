const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack/webpack.base');

module.exports = (env) => {
  let envConfig;
  !env.mode
    ? (envConfig = require('./webpack/webpack.development'))
    : (envConfig = require(`./webpack/webpack.${env.mode}`));

  return webpackMerge({ mode: env.mode }, commonConfig, envConfig);
};
