const mongoose=require("mongoose")
// const { findByIdAndUpdate } = require("../models/recipe")
const Recipe=require("../models/recipe")
const addRecipe=async(req,res)=>{
    try{
        const newRecipe=new Recipe({
            name:req.body.name,
            cookTime:req.body.cookTime,
            servings:req.body.servings,
            image:req.body.image,
            instructions:req.body.instructions,
            ingredients:req.body.ingredients
        })
        await newRecipe.save()
        return res.status(201).json(newRecipe)
    }

    catch(error){
         res.json(error)

    }
}

const getRecipe=async(req,res)=>{
try{
const allRecipes=await Recipe.find()
return res.status(201).json(allRecipes)
}
catch(error){
res.json(error)

}
}

const editRecipe=async(req,res)=>{
    try{
const {id}=req.params
if (!mongoose.Types.ObjectId.isValid(id)){
    res.json({error:"This is not a valid recipe id"})
}
const editedRecipe=await Recipe.findOneAndUpdate(id, {...req.body})
if (!editedRecipe){
    res.json({error:"There is no such Recipe"})
}
res.status(201).json(editedRecipe)

} 
catch(error){
res.json(error)
}
}

const deleteRecipe=async()=>{
    try{
        const {id}=req.params
        if (!mongoose.Types.ObjectId.isValid(id)){
            res.json({error:"This is not a valid recipe id"})
        }
        const deletedRecipe=await Recipe.findOneAndDelete({_id:id}, {req,body})
        if (!deletedRecipe){
            res.json({Error:"This is not a recipe"})
        }
        res.status(200).json(deletedRecipe)

    }
    catch(error){
     res.json(error)
    }
}


module.exports={addRecipe, getRecipe, editRecipe, deleteRecipe}