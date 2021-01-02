// vue.config.js
module.exports = 
{
  pages: {
    index: {
      // entry for the page
      entry: "./src/main.js",
      // the source template
      template: "./public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "QA Coach",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  devServer: {
    // allow all hosts
    host: "0.0.0.0",
    disableHostCheck: true, // TODO: insecure, but probably fine for dev environment
    contentBase: "./www/public",
    index: "./www"
  }
};