import { signUpPage } from "cypress/support/pages/signUpPage.cy";


describe('User Registration', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should allow a new user to register successfully', () => {
      signUpPage.validRegistration();
    });
  
    it('should not allow registration with an already existing email', () => {
      signUpPage.registrationWithAlreadyRegisteredUser();
    });
  });