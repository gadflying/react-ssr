const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const StylableWebpackPlugin = require('@stylable/webpack-plugin');

// output: {
//   filename: "bundle.js",
//   path: __dirname + "/dist"
// },

var browserConfig = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  // Add '.ts' and '.tsx' as resolvable extensions.
  module: {
    rules: [

// // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
// { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }

      { test: /\.(js)$/, use: 'babel-loader' },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
            {
                loader: "url-loader",
                options: {
                    limit: 8192
                }
            }
            ]
        }
        ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    }),
    new StylableWebpackPlugin()
  ]
}

var serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
        {
            loader: "url-loader",
            options: {
                limit: 8192
            }
        }
        ]
    }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    }),
    new StylableWebpackPlugin()
  ]
}

module.exports = [browserConfig, serverConfig]