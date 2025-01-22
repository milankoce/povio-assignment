import appLocators from "../locators/appLocators";

export class SignInPage {

signInForm(){
    cy.visit('/users/sign_in');
    cy.fixture("testData").then((testData) =>{
        cy.get(appLocators.signInEmailInputField)
        .clear()
        .type(testData.email)
        cy.get(appLocators.signInPasswordInputField)
        .clear()
        .type(testData.password)
        })
    cy.get(appLocators.signInButton).click()
}

}

export const signInPage = new SignInPage();

