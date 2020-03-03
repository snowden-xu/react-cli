const { override, addLessLoader, fixBabelImports } = require("customize-cra");

module.exports = {
  webpack: override(
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {}
    }),
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true
    })
  )
};
