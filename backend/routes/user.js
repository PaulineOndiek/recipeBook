const express=require("express")
const mongoose=require("mongoose");
const {loginUser,registerUser}=require("../controllers/userController")

const router=express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)

module.exports=router