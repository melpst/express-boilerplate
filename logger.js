import log4js from 'log4js'
import { finalConfig } from './config'

const Log_config = log4js.configure({
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

const logger = log4js.getLogger(finalConfig.logger);

export { logger, Log_config }