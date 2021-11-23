export enum IngredientKeys {
  "name" = "name",
  "measurement" = "measurement",
  "volume" = "volume",
}

export type Ingredient = {
  [key in IngredientKeys]: string
}

export type Recipe = {
  _id: string
  name: string
  ingredients: { name: string; measurment: string }[]
  method: string
}
