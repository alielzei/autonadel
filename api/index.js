const api = require('express')()
const cors = require("cors");
api.use(cors());

//controller
api.use('/item', require('./controller/item'))

module.exports = api