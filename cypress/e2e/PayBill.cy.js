describe("Paybill Scenarios", () => {
  beforeEach(() => {
    cy.visit(
      "https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/"
    );
    cy.get("#Input_UsernameVal").type("angela.garcia");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();

    cy.get(".menu-icon").click();
    cy.wait(2000);
    cy.get(".margin-left-m").click({ force: true });
    cy.wait(1000);

    //filter
    cy.get("#ListInvoicesPhone_FiltersButton > .btn").click();
    cy.get(".dropdown-display").click();
    cy.get(".scrollable-list > :nth-child(3) > span").click();
    cy.wait(1000);
    cy.get("#ListInvoices_PopupActions")
      .find("#ListInvoices_ApplyButton")
      .click();
    cy.wait(1000);

    //pay
    cy.get(':nth-child(1) > [data-header="Invoice"] > a > span').click();
    cy.wait(2000);
    cy.get(".btn").click();
  });

  //Melakukan pembayaran pada invoice dengan status "Unpaid"
  it("pembayaran invoice dengan status Unpaid", () => {
    cy.url().should("include", "/InvoicePayBill");
  });

  //Isi semua data dengan sesuai dan Pay Invoice
  it("Fill data dan paid", () => {
    cy.get("#Input_HolderName").type("Test 02");
    cy.get("#Input_CardNumber").type("12345");
    cy.get("#Input_ExpMonth > .dropdown-display").click();
    cy.get(".dropdown-list").contains("12").click();
    cy.get("#Input_ExpYear > .dropdown-display").click();
    cy.get(".dropdown-list").contains("2030").click();
    cy.get("#Input_CVV").type("1234");
    cy.get("#CreditCard_PayBillBtn").contains("Pay").click();
    cy.wait(1000);
    cy.contains("The invoice was paid successfully").should("be.visible");
    cy.get("#GoBack_IconMobile").click();
  });
  // -------------- Failed Scenario --------------

  //Mengisi Field "Name of card" tidak sesuai
  it("Mengisi Field Name of card tidak sesuai", () => {
    cy.get("#Input_HolderName").type("Test02"); //tanpa spasi
    cy.get("#Input_CardNumber").type("12345");
    cy.get("#Input_ExpMonth > .dropdown-display").click();
    cy.get(".dropdown-list").contains("12").click();
    cy.get("#Input_ExpYear > .dropdown-display").click();
    cy.get(".dropdown-list").contains("2030").click();
    cy.get("#Input_CVV").type("1234");
    cy.get("#CreditCard_PayBillBtn").contains("Pay").click();
    cy.get("#CreditCard_HolderSection_Name")
      .contains("You must type first and last name.")
      .should("be.visible");
  });

  //Mengosongkan Salah Satu Field Credit Card Details *Mandatory* - tombol pay disabled
  it("Mengosongkan Field Card Number", () => {
    cy.get("#Input_HolderName").type("Test 02");
    cy.get("#Input_ExpMonth > .dropdown-display").click();
    cy.get(".dropdown-list").contains("12").click();
    cy.get("#Input_ExpYear > .dropdown-display").click();
    cy.get(".dropdown-list").contains("2030").click();
    cy.get("#Input_CVV").type("1234");
    cy.get("#CreditCard_PayBillBtn").contains("Pay").should("be.disabled");
  });

  //Mengisi Card Number dengan huruf / simbol - tidak ada karakter yg berhasil terinput
  it("Mengisi Card Number dengan huruf / simbol", () => {
    cy.get("#Input_CardNumber").type("asd!@#$");
    cy.get("#Input_CardNumber").should("be.empty");
  });

  // Tidak mengisi Seluruh Field Credit Card Details
  it("Tidak mengisi Seluruh Field Credit Card Details", () => {
    cy.get("#CreditCard_PayBillBtn").contains("Pay").should("be.disabled");
  });

  //Mengisi CVV dengan huruf / simbol
  it("Mengisi CVV dengan huruf / simbol", () => {
    cy.get("#Input_CVV").type("asd!@#$");
    cy.get("#Input_CVV").should("be.empty");
  });
});

describe("Paybill Different Status Scenarios", () => {
  beforeEach(() => {
    cy.visit(
      "https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/"
    );
    cy.get("#Input_UsernameVal").type("angela.garcia");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();

    cy.get(".menu-icon").click();
    cy.wait(2000);
    cy.get(".margin-left-m").click({ force: true });
    cy.wait(1000);
  });

  //Melakukan pembayaran pada invoice dengan status "Submit"
  it("Melakukan pembayaran pada invoice dengan status Submit", () => {
    cy.get("#ListInvoicesPhone_FiltersButton > .btn").click();
    cy.get(".dropdown-display").click();
    cy.get(".scrollable-list > :nth-child(4) > span").click();
    cy.wait(1000);
    cy.get("#ListInvoices_PopupActions")
      .find("#ListInvoices_ApplyButton")
      .click();
    cy.wait(2000);
    cy.get(':nth-child(1) > [data-header="Invoice"] > a > span').click();
    cy.contains(".btn").should("not.exist");
  });

  //Melakukan pembayaran pada invoice dengan status "Paid"
  it("Mengisi CVV dengan huruf / simbol", () => {
    cy.get("#ListInvoicesPhone_FiltersButton > .btn").click();
    cy.get(".dropdown-display").click();
    cy.get(".scrollable-list > :nth-child(2) > span").click();
    cy.wait(1000);
    cy.get("#ListInvoices_PopupActions")
      .find("#ListInvoices_ApplyButton")
      .click();
    cy.wait(2000);
    cy.get(':nth-child(1) > [data-header="Invoice"] > a > span').click();
    cy.contains(".btn").should("not.exist");
  });
});
