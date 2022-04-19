const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/**@var {WebpackConfig} */
const config = {
  entry: [path.resolve("./app/index.tsx")],
  output: {
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".scss", ".css", ".json"],
  },
  target: "web",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-syntax-import-meta",
            ["@babel/plugin-proposal-class-properties", { loose: false }],
            "@babel/plugin-proposal-json-strings",
          ],
          presets: [
            ["@babel/preset-env", { modules: false }],
            "@babel/preset-react",
          ],
        },
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-syntax-import-meta",
            ["@babel/plugin-proposal-class-properties", { loose: false }],
            "@babel/plugin-proposal-json-strings",
          ],
          presets: [
            ["@babel/preset-env", { modules: false }],
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
        },
      },
      {
        test: /\.s?css$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "sass-loader",
            options: {
              implementation: require.resolve("sass"),
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: { name: "img/[hash].[ext]" },
          },
        ],
        type: "javascript/auto",
      },
      {
        test: /\.(ttf|woff2?|eof|eot)$/i,
        use: [
          {
            loader: "file-loader",
            options: { name: "font/[hash].[ext]" },
          },
        ],
        type: "javascript/auto",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "sutom-resolver",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 25000,
      maxSize: 250000,
      cacheGroups: {
        vendor: {
          name: "node_vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
        },
      },
    },
  },
};

module.exports = config;
