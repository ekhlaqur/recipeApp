const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    RecipeTitle:{
        type:String, required:true
    },
    Author:{type:String, required:true},
    uploadurimage:{
        type:String
    },
    Ingredients:{
        type:String
    },
    RecipeDirections:{
        type:String
    }


})

const RecipeModel = mongoose.model("Recipe", RecipeSchema);
module.exports = RecipeModel;