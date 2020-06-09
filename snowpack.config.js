module.exports = {
  extends: '@snowpack/app-scripts-preact',
  scripts: {},
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: require('./webpack.config.extend'),
        sourceMap: true,
        outputPattern: {
          js: './snowpack-preact-typescript/bundle-[hash].js',
          css: './snowpack-preact-typescript/style-[hash].css',
          assets: '[name]-[hash].[ext]',
        }
      },
    ],
  ],
};
