import { clearAccount } from "../support/utilities/utils";
import { signInPage } from "../support/pages/signInPage.cy";
import { campaignPage } from "cypress/support/pages/campaignPage.cy";

describe('Campaign Flow', () => {
    beforeEach(() => {
      signInPage.signInForm()
    });
  
    it('should allow a user to add a campaign', () => {
      campaignPage.addNewCampaign('Campaign Name', 'Camaign Descritpion')
    });
  
    it('should allow a user to edit a campaign', () => {
      campaignPage.editCampaing('Campaign Name Edited', 'Campain Description Edited')
    });
  
    after(() => {
      clearAccount();
    });
  });