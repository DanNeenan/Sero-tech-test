import axios from "axios"
import { useEffect, useState } from "react"
import { Recipe } from "../types"
import { Link } from "react-router-dom"

const Search = () => {
  const [search, setSearch] = useState("")
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    axios.get("http://localhost:3001").then((res) => {
      setRecipes(res.data)
    })
  }, [])

  const triggerSearch = () => {
    axios
      .get("http://localhost:3001", {
        params: {
          search,
        },
      })
      .then((res) => {
        setRecipes(res.data)
      })
  }

  return (
    <div>
      <div className="input-container">
        <label>Find a recipe</label>
        <input
          value={search}
          className="w-50"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <button onClick={triggerSearch}>Search</button>
      <ul>
        {recipes.map((recipe) => {
          return (
            <li key={recipe._id}>
              <Link to={recipe._id}>{recipe.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Search
