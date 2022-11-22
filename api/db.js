const sqlite3 = require('sqlite3').verbose();
const path = require('path')
let db

// SINGLETON DESIGN PATTERN
module.exports.getDb = () => {
    if (!db) {
        db = new sqlite3.Database(path.resolve(__dirname, '../database/data.db'))
    }
    return db
}