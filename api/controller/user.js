const router = require('express')()
userModel = require('../model/user')

// CONTROLLER
// base url here is api/user 
router.post('/login', async (req, res) => {
    // ADAPTER DESIGN PATTERN
    
    // there are two interfaces
    // FROM: API
    // TO: itemModel

    data = req.body
    console.log(data)

    let users
    try {
        users = await userModel.getUsers(data.email)
    } catch (e) {
        console.error(e)
        res.status(500).end('error occured')
    }

    res.send(users[0])
})

module.exports = router;