const mongoose=require("mongoose");

const recipeSchema=new mongoose.Schema({
name:{type:String, required:true},
cookTime:{type:String, required:true},
servings:{type:String, required:true},
image:{type:String, required:true},
instructions:{type:String, required:true},
ingredients:{type:String, required:true}

})

module.exports=mongoose.model("Recipe", recipeSchema);