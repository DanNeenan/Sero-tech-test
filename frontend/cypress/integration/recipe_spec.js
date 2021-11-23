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
    cy.get("textarea").type("Beef wellington")

    cy.get("#save").click()

    cy.contains("Beef wellington")
  })
})
