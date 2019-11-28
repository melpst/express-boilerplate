import log4js from 'log4js'
const current_datetime = new Date();
var Log_config = log4js.configure({
  appenders: {
    work: {
      type: "dateFile",
      filename: "./logs/app.log",
      keepFileExt: true
    },
    test: {
      type: "dateFile",
      filename: "./logs/test/app.log",
      keepFileExt: true
    },
    console:{
      type: "console"
    }
  },
  categories: {
    prod: { "appenders": ["work","console"] , "level": "INFO" },
    default: { "appenders": ["work","console"] , "level": "DEBUG" },
    test: { "appenders": ["test"] , "level": "TRACE" }
  }
});

const logger = log4js.getLogger();

export {
  logger,Log_config
}