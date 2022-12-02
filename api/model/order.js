const db = require('../db').getDb()

class Order {
    order_id
    user_id
    name
    price
    percent_discount
    kind
    item_ids
    amount 

    // BUILDER DESIGN PATTERN
    static buildOrderFromJson(json) {
        var order = new Order()

        for (let key of Object.keys(order)) {
            order[key] = json[key]
        }

        return order
    }
}

// MODEL
module.exports.createOrder = (items) => new Promise((resolve, reject) => {
    db.run("INSERT INTO bill(item_ids, user_id) VALUES (?, 1)", [JSON.stringify(items)], (err) => {
        if (err != null) return reject(err)
        resolve()
    })
})

module.exports.Order = Order;