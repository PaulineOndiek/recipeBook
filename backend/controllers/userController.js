
const bcrypt=require("bcrypt")
const User=require("../models/user")
const validator=require("validator")
const jwt=require("jsonwebtoken")

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET, {expiresIn: "3d"})
}

const registerUser=async(req,res)=>{
    try{
        const {userName, email,password}=req.body
        //to check whether or not the user exists
        const UserExists=await User.findOne({email:email})
        if(UserExists){
            return res.json({error:"This User already exists"})

        }
        if(!validator.isEmail(email)){
            return res.json({error:"This is not a valid Email Address"})
        }
        if(!validator.isStrongPassword(password)){
            return res.json({error:"Please enter a strong password"})
        }
        const salt=await bcrypt.genSalt(10)
        const hash=await bcrypt.hash(password, salt)

        const newMember= new User({
            userName,
            email,
            password:hash
        })

        const savedMember=await newMember.save()

        const token = createToken(savedMember._id)
        res.status(201).json({ savedMember, token })

        // return res.status(200).json(savedMember)
       

    }
    catch(error){
        res.json(error)
        
    }
}


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const userExists = await User.findOne({ email:email })
        if (!userExists) {
            return res.status(404).json({ error: "The user does not exist" })
        }
        const checkPassword = await bcrypt.compare(password, userExists.password)
        if (!checkPassword) {
            return res.status(404).json({ error: "Incorrect password" })
        }

        const loginToken = createToken(userExists._id)

        return res.status(200).json({ userExists, loginToken })

    } catch (error) {
        return res.json(error)
    }
}

module.exports={registerUser,loginUser}