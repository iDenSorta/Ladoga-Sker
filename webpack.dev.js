const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",

  devServer: {
    hot: true,
    liveReload: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],

  devtool: "eval-source-map",
  output: {
    filename: "[name].main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[name][ext]",
  },

  module: {
    rules: [
      {
        test: /\.(less)$/i,

        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS

            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },

      {
        test: /\.(css)$/i,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              import: true,
            },
          },
        ],
      },
    ],
  },

  optimization: {
    // don't minimize so we can debug
    minimize: false,
    /*
          The value 'single' instead creates a runtime file to be shared for all generated chunks.
          https://github.com/webpack/webpack-dev-server/issues/2792
        */
    runtimeChunk: "single",
  },
});
