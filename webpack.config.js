var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
var StylableWebpackPlugin = require('@stylable/webpack-plugin');

var browserConfig = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
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