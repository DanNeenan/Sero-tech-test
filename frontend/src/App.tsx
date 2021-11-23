import React from "react"
import "./App.css"

import { useRoutes } from "react-router-dom"
import CreateRecipe from "./Pages/CreateRecipe"
import Search from "./Pages/Search"
import { Link } from "react-router-dom"
import Recipe from "./Pages/Recipe"

const App = () => {
  const elements = useRoutes([
    { path: "/:id", element: <Recipe /> },
    { path: "/create", element: <CreateRecipe /> },
    { path: "/", element: <Search /> },
  ])

  return (
    <div className="p-4">
      <div className="p-4">
        <Link className="pr-2" to="/">
          Home
        </Link>
        <Link className="pr-2" to="/create">
          Create recipe
        </Link>
      </div>
      {elements}
    </div>
  )
}

export default App
