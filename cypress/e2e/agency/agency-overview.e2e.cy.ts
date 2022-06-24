describe("Agency Overview", () => {
  beforeEach(() => {
    cy.visit("/#/agency");
  });
  it("should have a title", () => {
    cy.get("#title").contains("Agencies");
  });
  describe("Filter", () => {
    it("should have a filter button", () => {
      cy.get("#filter").should("exist");
    });
    it("should not show the filter when the button is not clicked", () => {
      cy.get(":nth-child(1) > ion-toolbar").should("have.length", 1);
    });
    it("should show the filter when the button is clicked", () => {
      cy.get("#filter").click();
      cy.get(":nth-child(1) > ion-toolbar").should("have.length", 5);
    });
    it("should not show the filter when the button is clicked twice", () => {
      cy.get("#filter").click();
      cy.get("#filter").click();
      cy.get(":nth-child(1) > ion-toolbar").should("have.length", 1);
    });
  });
  describe("Items", () => {
    it("should have at least 14 Items", () => {
      cy.get("app-agency-list-entry").should("have.length.at.least", 14);
    });
  });
});
