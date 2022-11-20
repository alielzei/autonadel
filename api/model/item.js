const db = require('../db').getDb() // our singleton

class Item {
    name
    description
    ingredients
    price
    kind

    // factory method
    static fromDbRow(row) {
        var item = new Item()

        for (const [column, value] of Object.entries(row)) {
            if (column in item) {
                item[column] = value
            }
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
