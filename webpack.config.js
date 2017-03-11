module.exports = {
  entry: "./src/App.tsx",
  output: {
    filename: "./dist/bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  devServer: {
    inline: true,
    historyApiFallback: true
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
  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react/addons': true,
  }
}
