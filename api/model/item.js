const db = require('../db').getDb()

class Item {
    name
    description
    ingredients
    price
    kind
    item_id
    amount

    // BUILDER DESIGN PATTERN
    static buildItemFromJson(json) {
        var item = new Item()

        for (let key of Object.keys(item)) {
            item[key] = json[key]   
        }

        return item
    }
}

// MODEL
module.exports.getItems = () => new Promise((resolve, reject) => {
    var items = []
    db.each("SELECT * FROM item", (err, row) => {
        if (err != null) return reject(err)
        items.push(Item.buildItemFromJson(row))

    }, (err) => {
        if (err != null) return reject(err)
        resolve(items)

    })
})


module.exports.Item = Item;