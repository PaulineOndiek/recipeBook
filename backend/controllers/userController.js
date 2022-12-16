const User=require("../models/user")
const bcrypt=require("bcrypt")
const validator=require("validator")
const jwt=require("jsonwebtoken")

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_PASSWORD, {expiresIn: "3d"})
}
const registerUser =async()=>{
    try{
        const {userName, email,password}=body.require
        const UserExists=await User.findOne({email:email})
        if(UserExists){
            return res.json("This User already exists")

        }
        if(!validator.isEmail(email)){
            return res.json("This is not a valid Password")
        }
        if(!validator.isStrongPassword(password)){
            return res.json("Please enter a strong password")
        }
        const salt=await bcrypt.genSalt(10)
        const hash=await bcrypt.hash(password, salt)
        const newMember=await new User({
            userName,
            email,
            password:hash
        })
        const savedMember=await newMember.save()
        return res.status(200).json(savedMember)
       

    }
    catch(error){
        res.json(error)
        
    }
}

const loginUser=async(req,res)=>{
try{

}
catch{
    
}
}

module.exports={registerUser,loginUser}