const db = require('../db').getDb()

class Item {
    name
    description
    ingredients
    price
    kind
    item_id

    // BUILDER DESIGN PATTERN
    static buildItemFromRow(row) {
        var item = new Item()

        for (let key of Object.keys(item)) {
            item[key] = row[key]
        }

        return item
    }
}

// MODEL
module.exports.getItems = () => new Promise((resolve, reject) => {
    var items = []
    db.each("SELECT * FROM item", (err, row) => {
        if (err != null) return reject(err)
        items.push(Item.buildItemFromRow(row))

    }, (err) => {
        if (err != null) return reject(err)
        resolve(items)

    })
})
