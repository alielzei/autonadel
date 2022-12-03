const Factory = require('./factory')
const db = require('../db').getDb()

class Item extends Factory {
    name
    description
    ingredients
    price
    kind
    item_id
    amount
}

// MODEL
module.exports.getItems = () => new Promise((resolve, reject) => {
    var items = []
    db.each("SELECT * FROM item", (err, row) => {
        if (err != null) return reject(err)
        items.push(Item.buildFromObject(row))

    }, (err) => {
        if (err != null) return reject(err)
        resolve(items)

    })
})

module.exports.Item = Item;