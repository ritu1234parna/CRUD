const mongoose= require('mongoose')

//defining the schema type 
const UserSchema=mongoose.Schema({
    name:String,
    email: String,
    age: Number
})

//in mongodb collection name for user
const UserModel=mongoose.model("users",UserSchema)
module.exports=UserModel