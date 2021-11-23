import axios from "axios"
import { useEffect, useState } from "react"
import { useMatch } from "react-router"
import { Recipe } from "../types"

const RecipeComponent = () => {
  const match = useMatch("/:id")
  const [recipe, setRecipe] = useState<Recipe>()
  useEffect(() => {
    if (match) {
      console.log(match.params.id)
      axios
        .get("http://localhost:3001/" + match.params.id)
        .then((res) => setRecipe(res.data))
    }
  }, [])

  return <div>Recipe</div>
}

export default RecipeComponent
