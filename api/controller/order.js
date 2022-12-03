const router = require('express')()
const { Item } = require('../model/item');
const orderModel = require('../model/order');
const { Order } = require('../model/order')

// CONTROLLER
// base url here is api/order 
router.post('/', async (req, res) => {    
    // ADAPTER DESIGN PATTERN
    
    // there are two interfaces
    // FROM: API
    // TO: itemModel

    data = req.body
    let items = []
    for(const [k, o] of Object.entries(data)) {
        items.push(Item.buildFromObject(o))
    }

    try {
        items = await orderModel.createOrder(items)
        res.send(items)
    } catch (e) {
        console.error(e)
        res.status(500).end('error occured')
    }

    res.end()
})

module.exports = router;