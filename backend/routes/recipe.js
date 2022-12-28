const express=require("express");
const mongoose=require("mongoose");
const {addRecipe,getRecipe,editRecipe,deleteRecipe, singleRecipe}=require ("../controllers/recipeControllers")
const router=express.Router();
                            
router.post("/new", addRecipe)
router.get("/", getRecipe)
router.get("/:id", singleRecipe)
router.patch("/:id", editRecipe)
router.delete("/:id", deleteRecipe)


module.exports=router;