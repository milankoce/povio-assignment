import appLocators from "cypress/support/locators/appLocators";

describe('Health Check for Povio App', () => {

    beforeEach(() => {
        cy.visit('/');
    }) 
        
    it('should load the application and verify core elements', () => {
      // Ensure the page title is not empty
      cy.title().should('not.be.empty');
  
      // Verify the navigation menu exists and has links
      cy.get(appLocators.navBar)
      .should('be.visible')
      .and('exist', appLocators.homeButton)
      .and('exist', appLocators.navigateToSignInPageBtn)
      .and('exist', appLocators.navigateToSignUpPageBtn)
  
      // Check for the presence of the main content section
      cy.get('main')
      .should('exist')
      .and('be.visible');
    });
  
    it('should verify that no 404 or error pages are displayed', () => {

      // Confirm the HTTP status of the page is 200
      cy.request('/').then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it('should verify the links in the navigation bar', () => {

      // Check each link in the navigation bar
      cy.get(appLocators.navBar).each((link) => {
        const href = link.prop('href');
        if (href) {
          cy.request(href).then((response) => {
            expect(response.status).to.eq(200);
          });
        }
      });
    });
  
    it('should confirm interactive elements respond as expected', () => {
      
      // Check a primary button (if exists)
      cy.get(appLocators.homeButton)
      .first()
      .should('be.visible')
      .and('not.be.disabled');
      cy.get(appLocators.navigateToSignInPageBtn)
      .first()
      .should('be.visible')
      .and('not.be.disabled');
      cy.get(appLocators.navigateToSignUpPageBtn)
      .first()
      .should('be.visible')
      .and('not.be.disabled');

    });
  });
  