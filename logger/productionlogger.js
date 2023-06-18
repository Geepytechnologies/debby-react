const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const productionlogger = () => {
  const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  });
  return createLogger({
    level: "debug",
    format: combine(
      format.colorize(),
      format.json(),
      timestamp({ format: "HH:mm:ss" }),
      myFormat
    ),
    // defaultMeta: { service: "user-service" },
    transports: [
      new transports.File({ filename: "error.log", level: "error" }),
      new transports.File({ filename: "combined.log" }),
      new transports.Console(),
    ],
  });
};

module.exports = productionlogger;
