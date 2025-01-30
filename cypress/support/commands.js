Cypress.Commands.add("selectSize", (size = "Büyük") => {
  cy.get('[data-cy=size-input]').check(size);
});

Cypress.Commands.add("selectThickness", (thickness = "İnce") => {
  cy.get('[data-cy=hamur-input]').select(thickness);
});

Cypress.Commands.add("enterName", (name = "Test Name") => {
  cy.get('[data-cy=ad-input]').type(name);
});

Cypress.Commands.add("selectExtras", (extraCount = 4) => {
  cy.get('[data-cy=ekler-input]').each((checkbox, index) => {
      if (index < extraCount) {
          cy.wrap(checkbox).check();
      }
  });
});