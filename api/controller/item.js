const router = require('express')()
const itemModel = require('../model/item');


// base url here is api/item 
router.get('/', async (req, res) => {
    items = await itemModel.getItems()

    try {
        res.send(items)
    } catch (e) {
        console.error(e)
        res.status(500).end('error occured')
    }
})

module.exports = router;