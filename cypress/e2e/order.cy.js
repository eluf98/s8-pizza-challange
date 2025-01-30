describe("order form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/OrderPizza");
    });
  
    it("initializes with disabled button", () => {
      cy.get('[data-testid="submit-button"]').should("be.disabled");
    });
  
    it("prevents selecting more than 10 extras", () => {
      cy.selectExtras(10);
  
      cy.get('[data-testid="extra-input"]').each((checkbox, index) => {
        if (index >= 10) {
          cy.wrap(checkbox).should("be.disabled");
        }
      });
    });
  
    describe("with valid values", () => {
      beforeEach(() => {
        cy.selectSize("small");
        cy.selectThickness("thin");
        cy.enterName("example");
        cy.selectExtras(7);
      });
  
      it("allows submitting", () => {
        cy.get('[data-testid="submit-button"]').should("not.be.disabled");
      });
  
      it("redirects user on successful submit", () => {
        cy.get('[data-testid="submit-button"]').click();
        cy.url().should("include", "/Success");
      });
    });
  
    describe("prevents submitting", () => {
      it("without size selection", () => {
        cy.selectThickness();
        cy.enterName();
        cy.selectExtras();
        cy.get('[data-testid="submit-button"]').should("be.disabled");
      });
  
      it("without thickness selection", () => {
        cy.selectSize();
        cy.enterName();
        cy.selectExtras();
        cy.get('[data-testid="submit-button"]').should("be.disabled");
      });
  
      it("with invalid name", () => {
        cy.selectSize();
        cy.selectThickness();
        cy.enterName("ab");
        cy.selectExtras();
        cy.get('[data-testid="submit-button"]').should("be.disabled");
      });
  
      it("without extra selection", () => {
        cy.selectSize();
        cy.selectThickness();
        cy.enterName();
        cy.get('[data-testid="submit-button"]').should("be.disabled");
      });
  
      it("with 3 extra selection", () => {
        cy.selectSize();
        cy.selectThickness();
        cy.enterName();
        cy.selectExtras(3);
        cy.get('[data-testid="submit-button"]').should("be.disabled");
      });
    });
  });