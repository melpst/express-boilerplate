import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

import { router } from './routes'
import database from './database'
import { logger } from './logger'
import { finalConfig } from './config'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', router)

app.listen(finalConfig.port, () => {
    logger.info(`server is running on port ${finalConfig.port} and in ${finalConfig.name} mode`)
})