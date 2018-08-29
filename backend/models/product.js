const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    name: String,
    category: String,
    picture: {
        url: String,
        public_id: String
    },
    description: String,
    amenities: {
        food: Boolean,
        parking: Boolean,
        shower: Boolean,
        wifi: Boolean
    },
    price: Number,
    city: String,
    status: {
        type: String,
        default: 'Open'
    },
    address: String
})

module.exports = mongoose.model('Product', Product);