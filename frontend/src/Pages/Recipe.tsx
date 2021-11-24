import axios from "axios"
import React, { useEffect, useState } from "react"
import { useMatch } from "react-router"
import { Recipe } from "../types"

const RecipeComponent = () => {
  const match = useMatch("/:id")
  const [recipe, setRecipe] = useState<Recipe>()
  useEffect(() => {
    if (match) {
      axios
        .get("http://localhost:3001/" + match.params.id)
        .then((res) => setRecipe(res.data))
    }
  }, [])

  if (recipe) {
    return (
      <div>
        <h2>{recipe.name}</h2>
        {recipe.ingredients.map((ingredient) => {
          return (
            <div>
              {ingredient.name}: {ingredient.measurement}
            </div>
          )
        })}
        <p>{recipe.method}</p>
      </div>
    )
  }

  return <React.Fragment />
}

export default RecipeComponent
