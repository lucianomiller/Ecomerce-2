const mongoose= require ("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        requiered: true
    },
    description: {
        type: String,
        requiered: true
    },
    imageUrl: {
        type: String,
        requiered: true
    },
    price: {
        type: Number,
        requiered: true
    },
    countInStuck: {
        type: Number,
        requiered: true
    }
})

const Product = mongoose.model("product", productSchema);

module.exports = Product;