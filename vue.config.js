const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "react-in-vue",
  outputDir: "docs",
  devServer: {
    host: "127.0.0.1",
  },
});
