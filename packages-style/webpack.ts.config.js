const path = require("path");

module.exports = {

  // Target: 'web', // 或者 'browserslist: defaults'
  mode: "none", // 或 'production'，或 'none'
  devtool: "source-map",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "module"
  },
  experiments: {
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"] // 使用 style-loader 和 css-loader 处理 CSS 文件
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};
