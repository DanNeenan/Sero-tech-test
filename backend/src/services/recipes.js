import { getDatabase } from "../database/mongo"

import Recipe from "../models/Recipe.model"

const collectionName = "Recipes"

export const insertRecipe = async (recipe) => {
  const database = await getDatabase()
  console.log(database.connection)
  const { insertedId } = await database.connection
    .collection(collectionName)
    .insertOne(recipe)
  return insertedId
}

export const getRecipes = async (name) => {
  const database = await getDatabase()
  return await database.connection
    .collection(collectionName)
    .find({ name })
    .toArray()
}

export const getRecipe = async (id) => {
  const database = await getDatabase()
  const recip = await database.connection
    .collection(collectionName)
    .find({ id: id })
    .toArray()

  return recip[0]
}
