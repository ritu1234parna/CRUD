const mongoose= require('mongoose')
const ProductSChema= mongoose.Schema({
    name: String,
    description: String,
    brand:String,
    seller:String,
    price:String
})

const ProductModel=mongoose.model("products", ProductSChema)

module.exports= ProductModel