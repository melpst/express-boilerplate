import mongoose from 'mongoose'
import { logger } from './logger'
import { finalConfig } from './config'

if(finalConfig.database.dialect === 'mongo'){
    mongoose.connect(finalConfig.database.url,  { useNewUrlParser: true , useFindAndModify: false, useUnifiedTopology: true })
    .then(() => {
        logger.info('connected to db')
    })
    .catch((err) => logger.error(err))
    module.exports = mongoose.connection
}
else if(finalConfig.database.dialect === 'mock'){
    const db = {
        url: finalConfig.database.url
    }
    module.exports = db
}