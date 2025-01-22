import appLocators from "../locators/appLocators";

export class CampaignPage {

    addNewCampaign(campaignName:string, campaignDescription: string) {

    cy.get(appLocators.navigateToCampaignsPageBtn)
    .click();
    cy.get(appLocators.addNewCampaignBtn)
    .click();
    cy.get(appLocators.campaignNameInputField)
    .clear()
    .type(campaignName);
    cy.get(appLocators.campaignDescriptionInputField)
    .clear()
    .type(campaignDescription)
    cy.get(appLocators.createCampaignBtn)
    .click()
    cy.get(appLocators.successfullyCreatedCampaignBanner)
    .should('contain.text', 'Campaign was successfully created.')
    cy.get(appLocators.nameColumn)
    .should('contain.text', campaignName);
     cy.get(appLocators.descriptionColumn)
    .should('contain.text', campaignDescription);
    
    }

    editCampaing(campaignName:string, campaignDescription: string){

    cy.get(appLocators.navigateToCampaignsPageBtn)
    .click();
    cy.get(appLocators.editCampaignButton)
    .click();
    cy.get(appLocators.campaignNameInputField)
    .clear()
    .type(campaignName);
    cy.get(appLocators.campaignDescriptionInputField)
    .clear()
    .type(campaignDescription)
    cy.get(appLocators.updatedCamaignButton)
    .click();
    cy.get(appLocators.successfullyUpdatedCampaignBanner)
    .should('be.visible')
    .and('contain.text', 'Campaign was successfully updated.')

    }
    
}

export const campaignPage = new CampaignPage();