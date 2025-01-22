import appLocators from "../locators/appLocators";

export class SignUpPage {

    validRegistration() {

        cy.get(appLocators.navigateToSignUpPageBtn).click()
        cy.fixture('testData').then((testData) => {
            cy.get(appLocators.nameInputField)
            .clear()
            .type(testData.username);
            cy.get(appLocators.emailInputField)
            .clear()
            .type(testData.email);
            cy.get(appLocators.passwordInputField)
            .clear()
             .type(testData.password);
            cy.get(appLocators.passwordConfirmationInputField)
            .clear()
            .type(testData.password);
              })
        cy.get(appLocators.signUpButton)
        .click()
        cy.get(appLocators.successfullyRegisteredBanner)
        .should('contain.text', 'Welcome! You have signed up successfully.')
        cy.get(appLocators.welcomeText)
        .should('contain.text', 'Welcome', {multiple: true})
    }

    registrationWithAlreadyRegisteredUser() {

        cy.get(appLocators.navigateToSignUpPageBtn).click()
        cy.fixture('testData').then((testData) => {
            cy.get(appLocators.nameInputField)
            .clear()
            .type(testData.username);
            cy.get(appLocators.emailInputField)
            .clear()
            .type(testData.email);
            cy.get(appLocators.passwordInputField)
            .clear()
            .type(testData.password);
            cy.get(appLocators.passwordConfirmationInputField)
            .clear()
            .type(testData.password);
          })
        cy.get(appLocators.signUpButton)
        .click()
        cy.get(appLocators.errorMessage)
        .should('contain.text', 'Email has already been taken')
    }
}

export const signUpPage = new SignUpPage();