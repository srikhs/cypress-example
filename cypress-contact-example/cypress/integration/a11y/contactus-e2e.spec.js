const axe = require("axe-core");

const API_URL = Cypress.env("api_server"); // this is how we use the variables from cypress commandline

describe("Contact Us Tests", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.injectAxe(); // make sure axe is available on the page
  });

  it("Has no detectable a11y violations on load", () => {
    cy.url().should("eq", "http://localhost:3000/");

    cy.get("section#contactus-page");

    cy.checkA11y("section#contactus-page");
  });

  it("typing invalid email should load Invalid email message", () => {
    cy.wait(1000);
    cy.get('section[id="contactus-dropdown-section"]');
    cy.get("#Dropdown1-option").click();
    cy.wait(1000);
    cy.get("#Dropdown1-list2").click();
    cy.wait(1000);

    cy.get('input[id="userFirstName"]').type("Test");
    cy.get('input[id="userLastName"]').type("User");
    cy.get('input[id="userEmail"]').type("test@mm");
    cy.get('input[id="phoneNumber"]').type("3021124132");

    // check for error messages with the required text.
    cy.get("div.error").should("be.visible");
    cy.get("div.error").contains("Invalid email");

    cy.checkA11y("div.error");
  });

  it("Validate ALL Accessibility and inputs lead to success response from API", () => {
    cy.wait(1000);
    cy.get('section[id="contactus-dropdown-section"]');
    cy.get("#Dropdown1-option").click();
    cy.wait(1000);

    cy.get("#Dropdown1-list2").click();
    cy.wait(1000);

    cy.get("input#userFirstName").type("Test");
    cy.get("input#userLastName").type("User");
    cy.get("input#userEmail").type("test@test.com");
    cy.get("input#phoneNumber").type("3021124132");
    cy.get("input#orgName").type("Nonprofit for Accessibility");
    cy.get("textarea#issue").type("I am not able to access the offers from Microsoft");

    // check accessibility controls on the form.
    cy.checkA11y("section#contactus-page");
    // submit button action
    cy.get("button#submitSupportRequest").click();

    // success message with request id
    cy.get("section#contactusSuccess").should("be.visible");
    cy.get("section#contactusSuccess").contains("Thanks for your submission. Your ticket id is");

    cy.checkA11y("section#contactusSuccess");
  });
});
