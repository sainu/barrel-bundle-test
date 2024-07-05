const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (mode) => ({
  mode,
  entry: {
    'no-barrel': './src/no-barrel/index.js',
    'use-barrel': './src/use-barrel/index.js',
    'use-barrel-with-as': './src/use-barrel-with-as/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${mode}-[name].js`
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})
