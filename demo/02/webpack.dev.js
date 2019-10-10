const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "eval-cheap-module-source-map",
  entry: {
    index: "./src/pages/home/index.js",
    about: "./src/pages/about/index.js"
    // contacts: "./src/page-contacts/main.js"
  },
  devServer: {
    port: 8080,
    writeToDisk: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
            // options: {
            //   modules: {
            //     localIdentName: "[name]__[local]___[hash:base64:5]"
            //   }
            // }
          },
          {
            loader: "less-loader",
            options: {
              strictMath: true,
              noIeCompat: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[path][name].[ext]?hash=[hash:20]",
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/home/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/about/index.html",
      inject: true,
      chunks: ["about"],
      filename: "about.html"
    })
    // new HtmlWebpackPlugin({
    //   template: "./src/page-contacts/tmpl.html",
    //   inject: true,
    //   chunks: ["contacts"],
    //   filename: "contacts.html"
    // })
  ]
};
