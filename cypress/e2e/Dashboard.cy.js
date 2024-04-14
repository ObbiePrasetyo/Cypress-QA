describe("Login Scenarios", () => {
  beforeEach(() => {
    cy.visit(
      "https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/"
    );
  });

  // Melihat dashboard HC
  it("Melihat dashboard HC - charles.estevez", () => {
    cy.get("#Input_UsernameVal").type("charles.estevez");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();

    cy.url().should("include", "/Dashboard");
  });

  // Melihat dashboard Staff 1
  it("Melihat dashboard Staff 1 - nancy.martin", () => {
    cy.get("#Input_UsernameVal").type("nancy.martin");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();

    cy.url().should("include", "/Dashboard");
  });

  // Melihat dashboard Staff 2
  it("Melihat dashboard Staff 2 - cecil.anderson", () => {
    cy.get("#Input_UsernameVal").type("cecil.anderson");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();

    cy.url().should("include", "/Dashboard");
  });

  // Melihat dashboard Superadmin
  it("Melihat dashboard Superadmin - Superadmin.company", () => {
    cy.get("#Input_UsernameVal").type("Superadmin.company");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();

    cy.url().should("include", "/Dashboard");
  });

  // Melihat dashboard  Finance
  it("Melihat dashboard  Finance - angela.garcia", () => {
    cy.get("#Input_UsernameVal").type("angela.garcia");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();

    cy.url().should("include", "/Dashboard");
  });
});
