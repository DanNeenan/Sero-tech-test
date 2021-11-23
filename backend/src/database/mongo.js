import mongoose from "mongoose"

let database = null

export const startDatabase = () => {
  const connection = "mongodb://mongodb:27017/mongodb"

  database = mongoose.connect(connection, { useNewUrlParser: true })
  return database
}

export const getDatabase = async () => {
  if (!database) await startDatabase()
  return database
}
