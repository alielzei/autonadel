const router = require('express')()
const itemModel = require('../model/item');

// CONTROLLER
// base url here is api/item 
router.get('/', async (req, res) => {    
    try {
        items = await itemModel.getItems()
        res.send(items)
    } catch (e) {
        console.error(e)
        res.status(500).end('error occured')
    }
})

module.exports = router;