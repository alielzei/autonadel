const Factory = require('./factory')

const db = require('../db').getDb()

class User extends Factory {
    user_id
    email
    full_name
}

// MODEL
module.exports.getUsers = (email) => new Promise((resolve, reject) => {
    var items = []
    db.each("SELECT * FROM user WHERE email = ?", [email], (err, row) => {
        if (err != null) return reject(err)
        items.push(User.buildFromObject(row))

    }, (err) => {
        if (err != null) return reject(err)
        resolve(items)

    })
})


module.exports.User = User;