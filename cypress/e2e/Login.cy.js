describe("Login Scenarios", () => {
  beforeEach(() => {
    cy.visit(
      "https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/"
    );
  });

  // --------------Login Success--------------
  // Login Sebagai HC dengan Username dan password yang benar.
  it("Login as HC - charles.estevez", () => {
    cy.get("#Input_UsernameVal").type("charles.estevez");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();

    cy.url().should("include", "/Dashboard");
  });

  // Login Sebagai Staff 1 dengan Username dan password yang benar.
  it("Login as Staff 1 - nancy.martin", () => {
    cy.get("#Input_UsernameVal").type("nancy.martin");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();

    cy.url().should("include", "/Dashboard");
  });

  // Login Sebagai Staff 2 dengan Username dan password yang benar.
  it("Login as Staff 2 - cecil.anderson", () => {
    cy.get("#Input_UsernameVal").type("cecil.anderson");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();

    cy.url().should("include", "/Dashboard");
  });

  // Login Sebagai Superadmin dengan Username dan password yang benar.
  it("Login as Superadmin - Superadmin.company", () => {
    cy.get("#Input_UsernameVal").type("Superadmin.company");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();

    cy.url().should("include", "/Dashboard");
  });

  // Login Sebagai Finance dengan Username dan password yang benar.
  it("Login as Finance - angela.garcia", () => {
    cy.get("#Input_UsernameVal").type("angela.garcia");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();

    cy.url().should("include", "/Dashboard");
  });

  // --------------Login Failed--------------
  // Login Sebagai HC dengan Username yang salah.
  it("Username Salah - charles.estevez", () => {
    cy.get("#Input_UsernameVal").type("charles.estevez1");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();
    cy.contains("Invalid username or password.").should("be.visible");
  });
  //Login Sebagai HC dengan Password yang salah.
  it("Password Salah - charles.estevez", () => {
    cy.get("#Input_UsernameVal").type("charles.estevez");
    cy.get("#Input_PasswordVal").type("12345678");
    cy.get(".btn").click();
    cy.contains("Invalid username or password.").should("be.visible");
  });

  // Login Sebagai Staff 1 dengan Username yang salah.
  it("Username Salah - nancy.martin", () => {
    cy.get("#Input_UsernameVal").type("nancy.martin1");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();
    cy.contains("Invalid username or password.").should("be.visible");
  });

  //Login Sebagai Staff 1 dengan Password yang salah.
  it("Password Salah - nancy.martin", () => {
    cy.get("#Input_UsernameVal").type("nancy.martin");
    cy.get("#Input_PasswordVal").type("12345678");
    cy.get(".btn").click();
    cy.contains("Invalid username or password.").should("be.visible");
  });

  // Login Sebagai Staff 2 dengan Username yang salah.
  it("Username Salah - cecil.anderson", () => {
    cy.get("#Input_UsernameVal").type("cecil.anderson1");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();
    cy.contains("Invalid username or password.").should("be.visible");
  });

  //Login Sebagai Staff 2 dengan Password yang salah.
  it("Password Salah - cecil.anderson", () => {
    cy.get("#Input_UsernameVal").type("cecil.anderson");
    cy.get("#Input_PasswordVal").type("12345678");
    cy.get(".btn").click();
    cy.contains("Invalid username or password.").should("be.visible");
  });

  // Login Sebagai Superadmin dengan Username yang salah.
  it("Username Salah - Superadmin.company", () => {
    cy.get("#Input_UsernameVal").type("Superadmin.company1");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();
    cy.contains("Invalid username or password.").should("be.visible");
  });

  //Login Sebagai Superadmin dengan Password yang salah.
  it("Password Salah - Superadmin.company", () => {
    cy.get("#Input_UsernameVal").type("Superadmin.company");
    cy.get("#Input_PasswordVal").type("12345678");
    cy.get(".btn").click();
    cy.contains("Invalid username or password.").should("be.visible");
  });

  // Login Sebagai Finance dengan Username yang salah.
  it("Username Salah - angela.garcia", () => {
    cy.get("#Input_UsernameVal").type("angela.garcia1");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();
    cy.contains("Invalid username or password.").should("be.visible");
  });

  //Login Sebagai Finance dengan Password yang salah.
  it("Password Salah - angela.garcia", () => {
    cy.get("#Input_UsernameVal").type("angela.garcia");
    cy.get("#Input_PasswordVal").type("12345678");
    cy.get(".btn").click();
    cy.contains("Invalid username or password.").should("be.visible");
  });

  // Tidak mengisi Field Username
  it("Tidak isi Username", () => {
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();
    cy.get("#b3-Input")
      .contains("This field is required.")
      .should("be.visible");
  });

  //Tidak mengisi Field Password
  it("Tidak isi Password", () => {
    cy.get("#Input_UsernameVal").type("angela.garcia");
    cy.get(".btn").click();
    cy.get("#b4-Input")
      .contains("This field is required.")
      .should("be.visible");
  });

  //Tidak Mengisi Field Username dan Password
  it("Tidak isi Username dan Password", () => {
    cy.get(".btn").click();
    cy.get("#b3-Input")
      .contains("This field is required.")
      .should("be.visible");
    cy.get("#b4-Input")
      .contains("This field is required.")
      .should("be.visible");
    cy.contains("Invalid username or password.").should("be.visible");
  });

  //Melakukan percobaan login 3x atau lebih
  it("Login Salah 5x - charles.estevez", () => {
    const maxLoginAttempts = 5;

    for (let i = 0; i < maxLoginAttempts; i++) {
      cy.get("#Input_UsernameVal").type("cecil.anderson2");
      cy.get("#Input_PasswordVal").type("123456");
      cy.get(".btn").click();
      cy.get("#Input_UsernameVal").clear();
      cy.get("#Input_PasswordVal").clear();
    }
    cy.contains(
      "Too many failed login attemps. Please try again in a 60 minutes"
    ).should("be.visible");
  });
});
