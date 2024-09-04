// webpack.config.js
const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: { 
    clientChatWidget: './src/components/ClientChatWidget/index.tsx',
    loader: './src/loader.ts',

  },
  output: {
    // filename: 'chat-widget.[contenthash].js',
    filename: (pathData) => {
      if(pathData.runtime === 'loader') {
        return 'loader.js';
      } else {
        return 'chat-widget.[contenthash].js';
      }
    },
    path: path.resolve(__dirname, 'public/dist'),
    library: 'ChatWidget', // This is the name of the global variable
    libraryTarget: 'umd',  // Ensure this is set to 'umd' or 'window'
    globalObject: 'this',  // Necessary for UMD builds on Node.js
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/i, // Add a rule for .css files
        use: ['style-loader', 'css-loader', 'postcss-loader'], // Use style-loader and css-loader
      },
    ],
  },
  plugins: [
    new WebpackManifestPlugin({
      fileName: 'manifest.json',
      publicPath: '',
    }),
    new Dotenv(),
  ],
};
