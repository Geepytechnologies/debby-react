const productionlogger = require("./productionlogger");

let logger = null;

if (process.env.NODE_ENV !== "production") {
  logger = productionlogger();
}

module.exports = logger;
