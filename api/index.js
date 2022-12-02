const express = require('express')
const api = express()
const cors = require("cors");
api.use(cors());
api.use(express.json())

api.use('/item', require('./controller/item'))
api.use('/order', require('./controller/order'))
api.use('/user', require('./controller/user'))

module.exports = api