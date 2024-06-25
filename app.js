const express = require('express')
const app = express()


const connectdb = require('./connectdb')

const UserRoute = require('./routes/userRoute')


app.use(express.json())

connectdb()







app.listen(3000 , ()=>{
    console.log("Server is Running on http://localhost:3000 ")
})



app.use(UserRoute)