const mongoose = require('mongoose')

const dbConfig = () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/ecomApp')
            .then((res) => {
                console.log('Database connnection successfully')
            })
            .catch((err) => {
                res.status(500).json({ success: false, message: 'Database not connected' })
            })
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = dbConfig