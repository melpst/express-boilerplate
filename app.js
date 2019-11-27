const express = require('express')
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
import { logger } from './logger'
const routes = require('./routes')
// const configDB = require('./credentials/mongolab.js')
const port = process.env.PORT || 8080

const app = express()

// mongoose.Promise = require('bluebird')
// mongoose.connect(configDB.url)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', routes)

app.listen(port, () => logger.info(`server is running on port ${port}`))