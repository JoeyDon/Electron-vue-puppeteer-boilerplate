module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devtool: "source-map"
  },
  // Uncaught ReferenceError: __dirname is not defined
  // https://stackoverflow.com/questions/62777834/how-fix-dirname-not-defined-when-using-electron-events-with-vue
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  }
};
