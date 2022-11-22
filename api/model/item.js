const db = require('../db').getDb() // our singleton

class Item {
    name
    description
    ingredients
    price
    kind
    item_id

    // factory method
    static fromDbRow(row) {
        var item = new Item()

        console.log(row)
        for (let key of Object.keys(item)) {
            item[key] = row[key]
        }

        return item
    }
}

module.exports.getItems = () => new Promise((res, rej) => {
    var items = []
    db.each("SELECT * FROM item", (err, row) => {
        if (err != null) return rej(err)
        items.push(Item.fromDbRow(row))
    }, (err) => {
        if (err != null) return rej(err)
        res(items)
    })
})
