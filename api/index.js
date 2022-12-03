const express = require('express')
const api = express()
const cors = require("cors");
api.use(cors());
api.use(express.json())

api.use((req, res, next) => {
    let x = Math.random() * 1000
    setTimeout(() => next() , x)
})
api.use('/item', require('./controller/item'))
api.use('/order', require('./controller/order'))
api.use('/user', require('./controller/user'))

module.exports = api