
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productCode: { type: String },
    productTitle: { type: String },
    productShortDescription: { type: String },
    productDescription: { type: String },
    productCategory: { type: String },
    productRate: { type: Number },
    productImage: { type: String },
    productGallery: { type: [String] },
    isDeleted: { type: Boolean, default: false },
    createdDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Products', productSchema)