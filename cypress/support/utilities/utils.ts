import appLocators from "../locators/appLocators";

export function clearAccount() {
    cy.get(appLocators.navigateToEditAccountPage)
    .click();
    cy.get(appLocators.cancelMyAccountButton)
    .scrollIntoView()
    .click();
    cy.window().then((win) => {
      cy.stub(win, 'confirm').returns(true);  
    });
    cy.get(appLocators.successfullyCanceledAccountBanner)
    .should('be.visible')
    .and('contain.text', 'Bye! Your account has been successfully cancelled. We hope to see you again soon.');
  }