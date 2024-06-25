
const express = require("express")

const { add_user, get_users, get_user, delete_user, update_user, login } = require("../controllers/userController")
const isAuth = require("../middlewares/isAuth")

const router = express.Router()



router.post("/" ,login)

router.post("/user", add_user)


router.get('/user',isAuth,get_users)

router.get('/user/:id' ,get_user)


router.delete("/user/:id",delete_user)


router.put('/user/:id' ,update_user)




module.exports = router