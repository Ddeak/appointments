require("@babel/register")({
  presets: ["@babel/preset-env"],
  extensions: [".js", ".jsx", ".ts", ".tsx"]
});

module.exports = require("./src/server.ts");
