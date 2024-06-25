
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const isAuth = async (req,res,next)=>{

    try {


        const token = req.headers.auth

        if(!token){
            return res.json({message:"token not found"})
        }


        const decoded = jwt.verify(token,"secret_key")

        const user = await User.findById(decoded.user._id)


        if(!user){
            return res.json({message:"Invalide token"})
        }



        next()



        
    } catch (error) {
        res.json(error)
    }
    

}


module.exports = isAuth