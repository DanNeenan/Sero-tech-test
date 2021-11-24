import faker from "faker"

// recipe.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Creating a recipe", () => {
  it("creates a recipe and is visible on the home page", () => {
    cy.visit("http://localhost:3000/create")

    cy.get("#recipe-name").type("Beef wellington")
    cy.get("#ingredient-name").type("Beef")
    cy.get("#ingredient-volume").type("100")
    cy.get("select").select("kg")
    cy.get("#add-ingredient").click()
    cy.get("textarea").type("Beef wellington")

    cy.get("#save").click()

    cy.contains("Beef wellington")
  })

  it("can search for a recipe by name and view it", () => {
    cy.visit("http://localhost:3000/create")

    const recipeName = faker.lorem.word() + " " + faker.lorem.word()
    const ingredientName = faker.lorem.word()
    const method = "Really simple to make"

    cy.get("#recipe-name").type(recipeName)
    cy.get("#ingredient-name").type(ingredientName)
    cy.get("#ingredient-volume").type("100")
    cy.get("select").select("kg")
    cy.get("#add-ingredient").click()
    cy.get("textarea").type(method)

    cy.get("#save").click()

    cy.contains(recipeName)
    cy.get("input").type(recipeName)
    cy.get("button").click()

    cy.contains(recipeName)
    cy.get("a").contains(recipeName).click()

    cy.contains(recipeName)
    cy.contains(ingredientName)
    cy.contains("100 kg")
    cy.contains(method)
  })

  it("can search for a recipe by ingredient name and view it", () => {
    cy.visit("http://localhost:3000/create")

    const recipeName = faker.lorem.word() + " " + faker.lorem.word()
    const ingredientName = faker.lorem.word()
    const method = "Really simple to make"

    cy.get("#recipe-name").type(recipeName)
    cy.get("#ingredient-name").type(ingredientName)
    cy.get("#ingredient-volume").type("100")
    cy.get("select").select("kg")
    cy.get("#add-ingredient").click()
    cy.get("textarea").type(method)

    cy.get("#save").click()

    cy.contains(recipeName)
    cy.get("input").type(ingredientName)
    cy.get("button").click()

    cy.contains(recipeName)
    cy.get("a").contains(recipeName).click()

    cy.contains(recipeName)
    cy.contains(ingredientName)
    cy.contains("100 kg")
    cy.contains(method)
  })
})
