
const User = require('../models/userModel')

const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const add_user = async(req,res)=>{

    if(req.body.password.length >= 8 && req.body.name!="" && req.body.age!="" && req.body.email!=""){
        
        req.body.password = await bcrypt.hash(req.body.password , 12)

        User.create(req.body).then(()=>{
            res.json({message:"created user"})
        }).catch((err)=>{
            res.json({message:err.message})
        })
    
    }else{
        res.json({error:"error in your informations"})
    }


}



const get_users =  (req,res)=>{


    User.find().then((users)=>{
        res.json(users)
    }).catch((err)=>{
        res.json({message:err.message})
    })


}



const get_user = (req,res)=>{
    const id = req.params.id
    User.findById(id).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        res.json({message:err.message})
    })
}


const delete_user = (req,res)=>{
    const id = req.params.id
    User.deleteOne({_id:id}).then(()=>{
        res.json({message:"deleted user"})
    }).catch((err)=>{
        res.json({message:err.message})
    })
}



const update_user = (req,res)=>{
    const id = req.params.id

    User.updateOne({_id:id},req.body).then(()=>{
        res.json({message:"updated user"})
    }).catch((err)=>{
        res.json({message:err.message})
    })

}



const login = async (req,res)=>{

    try {

        const user = await User.findOne({email:req.body.email})

        if(!user){
            return res.json({message:"email not found!"})
        }

        const verifyPassword = await bcrypt.compare(req.body.password,user.password)

        if(!verifyPassword){
            return res.json({message:"Invalide password!"})
        }


        const token = jwt.sign({user:user},"secret_key",{expiresIn:"7d"})


        res.json({user:user , token:token})


        
    } catch (error) {
        res.json(error.message)
    }



}

module.exports = {
    add_user,
    get_users,
    get_user,
    delete_user,
    update_user,
    login
}