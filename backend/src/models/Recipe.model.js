import mongoose from "mongoose"

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  ingredients: {
    type: [{ name: String, measurement: String }],
  },
  method: {
    type: String,
  },
})
const Recipe = mongoose.model("Recipe", recipeSchema)
export default Recipe
