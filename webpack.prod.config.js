var webpack = require("webpack");
const path = require('path');

module.exports = {
  entry: "./src/App.tsx",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: ["source-map-loader"]
      },
      {
        test: /\.html$/,
        use: [
          "raw-loader"
        ]
      },
      {
        test: /\.tsx$/,
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"},
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]__[hash:base64:3]"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function () {
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          },
          {loader: "sass-loader"}
        ]
      }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react/addons': true,
  }
}
