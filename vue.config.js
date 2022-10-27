const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "docs",
  devServer: {
    host: "127.0.0.1",
  },
});
