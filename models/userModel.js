
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({

    name:{
        type:String,
        required : [true,"name is required"],
    },

    age:{
        type:Number,
        required:[true , "age is required"]
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password :{
        type:String,
        required:true
    }

})


const User = mongoose.model("user" , userSchema )


module.exports = User