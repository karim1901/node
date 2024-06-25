const mongoose = require('mongoose')



const connectdb = ()=>{
    mongoose.connect('mongodb://localhost:27017/user')
    .then(()=>{
        console.log("connect db")
    })
    .catch((err)=>{
        console.log(err.message)
    })



}


module.exports = connectdb