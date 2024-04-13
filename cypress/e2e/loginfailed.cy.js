describe("Login Failed Scenarios", () => {
  beforeEach(() => {
    cy.visit(
      "https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/"
    );
  });

  // Login as HC
  it("Username Salah - charles.estevez", () => {
    cy.get("#Input_UsernameVal").type("charles.estevez1");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();
  });

  it("Password Salah - charles.estevez", () => {
    cy.get("#Input_UsernameVal").type("charles.estevez");
    cy.get("#Input_PasswordVal").type("12345678");
    cy.get(".btn").click();
  });

  // Login as Staff 1
  it("Username Salah - nancy.martin", () => {
    cy.get("#Input_UsernameVal").type("nancy.martin1");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();
  });

  it("Password Salah - nancy.martin", () => {
    cy.get("#Input_UsernameVal").type("nancy.martin");
    cy.get("#Input_PasswordVal").type("12345678");
    cy.get(".btn").click();
  });

  // Login as Staff 2
  it("Username Salah - cecil.anderson", () => {
    cy.get("#Input_UsernameVal").type("cecil.anderson1");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();
  });

  it("Password Salah - cecil.anderson", () => {
    cy.get("#Input_UsernameVal").type("cecil.anderson");
    cy.get("#Input_PasswordVal").type("12345678");
    cy.get(".btn").click();
  });

  // Login as Superadmin
  it("Username Salah - Superadmin.company", () => {
    cy.get("#Input_UsernameVal").type("Superadmin.company1");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();
  });

  it("Password Salah - Superadmin.company", () => {
    cy.get("#Input_UsernameVal").type("Superadmin.company");
    cy.get("#Input_PasswordVal").type("12345678");
    cy.get(".btn").click();
  });

  // Login as Finance
  it("Username Salah - angela.garcia", () => {
    cy.get("#Input_UsernameVal").type("angela.garcia1");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();
  });

  it("Password Salah - angela.garcia", () => {
    cy.get("#Input_UsernameVal").type("angela.garcia");
    cy.get("#Input_PasswordVal").type("12345678");
    cy.get(".btn").click();
  });

  // Login without fill field
  it("Tidak isi Username", () => {
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();
  });

  it("Tidak isi Password", () => {
    cy.get("#Input_UsernameVal").type("angela.garcia");
    cy.get(".btn").click();
  });

  it("Tidak isi Username dan Password", () => {
    cy.get(".btn").click();
  });

  //Percobaan Login 3x atau lebih
  it("Login Salah 3x - charles.estevez", () => {
    const maxLoginAttempts = 3;

    for (let i = 0; i < maxLoginAttempts; i++) {
      cy.get("#Input_UsernameVal").type("charles.estevez1");
      cy.get("#Input_PasswordVal").type("123456");
      cy.get(".btn").click();
      cy.get("#Input_UsernameVal").clear();
      cy.get("#Input_PasswordVal").clear();
    }
  });
});
