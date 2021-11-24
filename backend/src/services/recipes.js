import { ObjectID } from "mongodb"
import { getDatabase } from "../database/mongo"

import Recipe from "../models/Recipe.model"

const collectionName = "Recipes"

export const insertRecipe = async (recipe) => {
  const database = await getDatabase()
  console.log(database.connection)
  const data = new Recipe(recipe)
  await database.connection.collection(collectionName).insertOne(data)

  return data
}

export const getRecipes = async (name) => {
  let query = {}

  if (name) {
    query = {
      $or: [
        {
          name,
        },
        {
          ingredients: {
            $elemMatch: { name },
          },
        },
      ],
    }
  }

  const database = await getDatabase()
  return await database.connection
    .collection(collectionName)
    .find(query)
    .toArray()
}

export const getRecipe = async (id) => {
  console.log(id)
  const database = await getDatabase()
  const recipe = await database.connection.collection(collectionName).findOne({
    _id: new ObjectID(id),
  })

  return recipe
}
