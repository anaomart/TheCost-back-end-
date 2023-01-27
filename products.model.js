const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
    },
    products: []

}, { timestamp: true })


module.exports = mongoose.model('CalcProduct', productSchema)