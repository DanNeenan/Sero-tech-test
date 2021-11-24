import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router"
import { measurements } from "../lib/measurements"

import { Ingredient } from "../types"

const CreateRecipe = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [ingredientName, setIngredientName] = useState("")
  const [ingredientVolume, setIngredientVolume] = useState("")
  const [ingredientMeasurement, setIngredientMeasurement] = useState("")
  const [method, setMethod] = useState("")

  const handleAddingIngredient = () => {
    if (ingredientName && ingredientVolume && ingredientMeasurement) {
      setIngredients((current) => {
        return current.concat([
          {
            name: ingredientName,
            volume: ingredientVolume,
            measurement: ingredientMeasurement,
          },
        ])
      })
      setIngredientName("")
      setIngredientVolume("")
      setIngredientMeasurement("")
    }
  }

  const submitRecipe = () => {
    axios
      .post("http://localhost:3001/", {
        name: name,
        ingredients: ingredients.map((ing) => {
          return {
            name: ing.name,
            measurement: `${ing.volume} ${ing.measurement}`,
          }
        }),
        method: method,
      })
      .then(() => {
        navigate("/")
      })
  }

  return (
    <div>
      <h2>Create Recipe</h2>
      <div className="input-container">
        <label>Recipe name</label>
        <input
          id="recipe-name"
          value={name}
          className="w-50"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      {ingredients.map((ingredient) => {
        return (
          <div>
            {ingredient.name}: {ingredient.volume} {ingredient.measurement}
          </div>
        )
      })}
      <div className="ingredient-container">
        <div className="input-container pr-2">
          <label className="pr-2">Name</label>
          <input
            id="ingredient-name"
            name="name"
            value={ingredientName}
            onChange={(event) => setIngredientName(event.target.value)}
          />
        </div>
        <div className="input-container pr-2">
          <label className="pr-2">Volume</label>
          <input
            id="ingredient-volume"
            name="volume"
            value={ingredientVolume}
            onChange={(event) => setIngredientVolume(event.target.value)}
          />
        </div>
        <div className="input-container pr-2">
          <label className="pr-2">Measurement</label>
          <select
            name="measurement"
            onChange={(event) => setIngredientMeasurement(event.target.value)}
          >
            <option value="">Select a measurement</option>
            {measurements.map((value) => {
              return (
                <option key={value} id={value} value={value}>
                  {value}
                </option>
              )
            })}
          </select>
        </div>
      </div>
      <button id="add-ingredient" onClick={handleAddingIngredient}>
        Add ingredient
      </button>
      <div className="input-container">
        <label>Method</label>
        <textarea
          rows={10}
          value={method}
          className="w-50"
          onChange={(event) => setMethod(event.target.value)}
        />
      </div>
      <button id="save" onClick={submitRecipe}>
        Save recipe
      </button>
    </div>
  )
}

export default CreateRecipe
