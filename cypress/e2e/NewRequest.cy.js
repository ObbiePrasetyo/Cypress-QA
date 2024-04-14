describe("New Request Scenarios", () => {
  beforeEach(() => {
    cy.visit(
      "https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/"
    );
    cy.get("#Input_UsernameVal").type("nancy.martin");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();

    cy.get(".menu-icon").click();
    cy.wait(2000);
    cy.get(".margin-left-m").click({ force: true });
  });
  // --------------Success Scenario--------------
  //Buat Request baru
  it("Success New Request", () => {
    cy.get("#ListInvoices_NewInvoice > .btn").click();
    cy.get("#Input_InvoiceNumber").type("Test01");
    cy.get("#Input_PeriodStartDate").click().type("2024-04-13T08:00");
    cy.get("#Input_PeriodEndDate").click().type("2024-04-20T17:00");
    cy.get("#Input_Amount").type("1000");
    cy.get(".btn").contains("Submit").click();
    cy.wait(1000);
    cy.get("#Input_SearchKeyword").type("Test01");
    cy.get("#ListInvoices_Wrapper")
      .find(":contains('Test01')")
      .should("be.visible");
  });

  //Buat Request baru dengan nilai desimal pada Field Amount
  it("Buat Request baru nilai desimal", () => {
    cy.get("#ListInvoices_NewInvoice > .btn").click();
    cy.get("#Input_InvoiceNumber").type("Test03");
    cy.get("#Input_PeriodStartDate").click().type("2024-04-13T08:00");
    cy.get("#Input_PeriodEndDate").click().type("2024-04-20T17:00");
    cy.get("#Input_Amount").type("1000,50");
    cy.get(".btn").contains("Submit").click();
    cy.get("#Input_SearchKeyword").type("Test03");
    cy.get("#ListInvoices_Wrapper")
      .find(":contains('Test03')")
      .should("be.visible");
  });

  // --------------Failed Scenario--------------
  //Buat invoice dengan nomor invoice kosong
  it("Buat Request - nomor invoice kosong", () => {
    cy.get("#ListInvoices_NewInvoice > .btn").click();
    cy.get("#Input_PeriodStartDate").click().type("2024-04-13T08:00");
    cy.get("#Input_PeriodEndDate").click().type("2024-04-20T17:00");
    cy.get("#Input_Amount").type("1000");
    cy.get(".btn").contains("Submit").click();
    cy.get("#Input_InvoiceNumber").should("be.empty");
  });

  //Buat Invoice dengan Period Start Date Kosong
  it("Buat Request - Period Start Date Kosong", () => {
    cy.get("#ListInvoices_NewInvoice > .btn").click();
    cy.get("#Input_InvoiceNumber").type("Test04");
    cy.get("#Input_PeriodEndDate").click().type("2024-04-20T17:00");
    cy.get("#Input_Amount").type("1000");
    cy.get(".btn").contains("Submit").click();
    cy.get("#Input_PeriodStartDate").should("be.empty");
  });

  //Buat Invoice dengan Period End Date Kosong
  it("Buat Request - Period End Date Kosong", () => {
    cy.get("#ListInvoices_NewInvoice > .btn").click();
    cy.get("#Input_InvoiceNumber").type("Test04");
    cy.get("#Input_PeriodStartDate").click().type("2024-04-13T08:00");
    cy.get("#Input_Amount").type("1000");
    cy.get(".btn").contains("Submit").click();
    cy.get("#Input_PeriodEndDate").should("be.empty");
  });

  //Buat Invoice dengan Amount Kosong
  it("Buat Request - Amount Kosong", () => {
    cy.get("#ListInvoices_NewInvoice > .btn").click();
    cy.get("#Input_InvoiceNumber").type("Test04");
    cy.get("#Input_PeriodStartDate").click().type("2024-04-13T08:00");
    cy.get("#Input_PeriodEndDate").click().type("2024-04-20T17:00");
    cy.get(".btn").contains("Submit").click();
    cy.get("#Input_Amount").should("be.empty");
  });

  //Request Invoice baru dengan period start date > end date
  it("Buat Request - period start date > end date", () => {
    cy.get("#ListInvoices_NewInvoice > .btn").click();
    cy.get("#Input_InvoiceNumber").type("Test05");
    cy.get("#Input_PeriodStartDate").click().type("2024-04-14T08:00");
    cy.get("#Input_PeriodEndDate").click().type("2024-04-01T17:00");
    cy.get("#Input_Amount").type("2000");
    cy.get(".btn").contains("Submit").click();
    cy.get("#Input_SearchKeyword").type("Test05");
    cy.get("#ListInvoices_Wrapper")
      .find(":contains('Test05')")
      .should("not.exist");
  });

  //Buat invoice dengan amount yang tidak valid
  it("Buat invoice dengan amount yang tidak valid", () => {
    cy.get("#ListInvoices_NewInvoice > .btn").click();
    cy.get("#Input_InvoiceNumber").type("Test02");
    cy.get("#Input_PeriodStartDate").click().type("2024-04-14T08:00");
    cy.get("#Input_PeriodEndDate").click().type("2024-04-01T17:00");
    cy.get("#Input_Amount").type("abc!@#");
    cy.get("#Input_Amount").should("be.empty");
    cy.get(".btn").contains("Submit").click();
  });
});
