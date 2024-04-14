describe("Set Unpaid Scenarios", () => {
  beforeEach(() => {
    cy.visit(
      "https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/"
    );
    cy.get("#Input_UsernameVal").type("charles.estevez");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();

    cy.get(".menu-icon").click();
    cy.wait(2000);
    cy.get(".margin-left-m").click({ force: true });
    cy.wait(1000);
  });

  //Melakukan Set Unpaid pada invoice dengan status "Submit"
  it("Set Unpaid pada invoice dengan status Submit", () => {
    cy.get("#ListInvoicesPhone_FiltersButton > .btn").click();
    cy.get(".dropdown-display").click();
    cy.get(".scrollable-list > :nth-child(4) > span").click();
    cy.wait(1000);
    cy.get("#ListInvoices_PopupActions")
      .find("#ListInvoices_ApplyButton")
      .click();
    cy.get(':nth-child(1) > [data-header="Invoice"] > a > span').click();
    cy.wait(1000);
    cy.get(".btn").click();
    cy.contains("Update Successfully!").should("be.visible");
  });

  //Melakukan Set Unpaid pada invoice dengan status "Unpaid"
  it("Set Unpaid pada invoice dengan status Unpaid", () => {
    cy.wait(1000);
    cy.get("#ListInvoicesPhone_FiltersButton > .btn").click();
    cy.get(".dropdown-display").click();
    cy.get(".scrollable-list > :nth-child(3) > span").click();
    cy.wait(1000);
    cy.get("#ListInvoices_PopupActions")
      .find("#ListInvoices_ApplyButton")
      .click();
    cy.get(':nth-child(1) > [data-header="Invoice"] > a > span').click();
    cy.wait(1000);
    cy.get(".btn").click();
    cy.wait(1000);
    cy.contains("Update Successfully!").should("not.exist");
  });

  //Melakukan Set Unpaid pada invoice dengan status "Paid"
  it("Set Unpaid pada invoice dengan status Paid", () => {
    cy.wait(1000);
    cy.get("#ListInvoicesPhone_FiltersButton > .btn").click();
    cy.get(".dropdown-display").click();
    cy.get(".scrollable-list > :nth-child(2) > span").click();
    cy.wait(1000);
    cy.get("#ListInvoices_PopupActions")
      .find("#ListInvoices_ApplyButton")
      .click();
    cy.get(':nth-child(1) > [data-header="Invoice"] > a > span').click();
    cy.wait(1000);
    cy.get(".btn").click();
    cy.wait(1000);
    cy.contains("Update Successfully!").should("not.exist");
  });

  //Login dengan role yang tidak sesuai
  it("Login dengan role yang tidak sesuai", () => {
    cy.get(".menu-icon").click();
    cy.wait(2000);
    cy.get("#b2-b3-User_Username").click({ force: true });
    cy.get(".ThemeGrid_MarginGutter").click({ force: true });

    cy.get("#Input_UsernameVal").type("angela.garcia");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();

    cy.get(".menu-icon").click();
    cy.wait(2000);
    cy.get(".margin-left-m").click({ force: true });
    cy.wait(1000);

    cy.get("#ListInvoicesPhone_FiltersButton > .btn").click();
    cy.get(".dropdown-display").click();
    cy.get(".scrollable-list > :nth-child(4) > span").click();
    cy.wait(1000);
    cy.get("#ListInvoices_PopupActions")
      .find("#ListInvoices_ApplyButton")
      .click();
    cy.get(':nth-child(1) > [data-header="Invoice"] > a > span').click();
    cy.get(".btn").should("be.enabled");
  });
});
