import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"

import { insertRecipe, getRecipes, getRecipe } from "./services/recipes"
import { startDatabase } from "./database/mongo"

const app = express()

app.use(helmet())

app.use(bodyParser.json())

app.use(cors())

app.use(morgan("combined"))

app.get("/", async (req, res) => {
  const recipes = await getRecipes(req.query.search)
  res.send(recipes)
})

app.get("/:id", async (req, res) => {
  const recipe = await getRecipe(req.params.id)
  console.log(recipe)
  res.send(recipe)
})

app.post("/", async (req, res) => {
  const newRecipe = req.body
  await insertRecipe(newRecipe)
  res.send({ message: "New recipe inserted." })
})

startDatabase().then(async (conn) => {
  console.log("Database connected")
  app.listen(3001, async () => {
    console.log("listening on port 3001")
  })
})
