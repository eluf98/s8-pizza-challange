Cypress.Commands.add("selectSize", (size = "small") => {
    cy.get('[data-testid="size-input"]').filter(`[value=${size}]`).check();
  });
  
  Cypress.Commands.add("selectThickness", (thickness = "thin") => {
    cy.get('[data-testid="thickness-input"]').select(thickness);
  });
  
  Cypress.Commands.add("enterName", (name = "Test Name") => {
    cy.get('[data-testid="user-name-input"]').type(name);
  });
  
  Cypress.Commands.add("selectExtras", (extraCount = 4) => {
    cy.get('[data-testid="extra-input"]').each((checkbox, index) => {
      if (index < extraCount) {
        cy.wrap(checkbox).check();
      }
    });
  });