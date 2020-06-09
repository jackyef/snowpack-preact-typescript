/**
 * 
 * @param {WebpackConfig} config Base webpack config from @snowpack/plugin-webpack 
 */
module.exports = (config) => ({
  ...config,
  output: {
    ...config.output,
    publicPath: 'https://jackyef.github.io/snowpack-preact-typescript/',
  },
  /**
   * Add custom webpack configurations here
   */
});