const mongoose=require("mongoose");
const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const recipeRoute=require("./routes/recipe");
const userRoute=require("./routes/user");
const recipe=require("./models/recipe");
const user=require("./models/user");

const app=express();

dotenv.config();
const port=process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("This is a recipe site")
 })

app.use(cors())

mongoose.connect (process.env.MONGO_URI)

.then(()=>{app.listen(port, ()=>{
    console.log(`The Database is successfully connected and server running at port: ${port}`)
})})

.catch (err =>{
    console.log(err)
})

app.use(express.json())

app.use("/api/recipes", recipeRoute)
// app.use("/api/user", userRoute)






