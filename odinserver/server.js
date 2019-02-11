require("babel-register")({
  presets: ["env"]
});

module.exports = require("./app/index.js");
