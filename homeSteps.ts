import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import  HomePage  from "../../pages/homePage";



let homePage: HomePage;
Given("user navigates to the OrangeHRM login page", async () => {
    homePage = new HomePage(fixture.page);
    await homePage.navigateToLoginPage();
    await homePage.enterUsername("Admin");
    await homePage.enterPassword("admin123");
    await homePage.clickLoginButton();
});

When("header logo is visible", async () => {
    await homePage.validateHeaderLogo();
});
Then("verify the login text and details present", async () => {
  await homePage.validateLoginText();
  await homePage.validateLoginTextDetails();
});
Then("verify username placeholder is present", async () => {
    await homePage.validateUsernamePlaceholder();
});
Then("verify password placeholder is present", async () => {
    await homePage.validatePasswordPlaceholder();
});
Then("verify the social media links present", async () => {
    await homePage.validateSocialMediaLinks();
});
Then("verify login button is present", async () => {
    await homePage.validateLoginButton();
});
Then("verify forgot password link is present", async () => {
    await homePage.validateForgotPasswordLink();
});
Then("verify footer logo is present", async () => {
    await homePage.validateFooterLogo();
});
// Then("the {string} button should be visible and have color {string}",async function (buttonName: string, expectedColor: string) { 
//     await homePage.validateLoginButtonColor(buttonName, expectedColor);
//   }
// );
When("user enters {string} and {string}",  async (username: string, password:string) => {
    await homePage.enterUsername(username);
    await homePage.enterPassword(password);
});
When("click on login button", async () => {
  await homePage.clickLoginButton();
});
Then("user is navigated to the dashboard page", async () => {
  await homePage.validateDashboardPage();
await fixture.page.waitForTimeout(2000);
});
// Then("user gives wrong password and username", async () => {
//     await homePage.enterUsername(username);
//     await homePage.enterPassword();
//     await homePage.clickLoginButton();
//     await homePage.validateErrorMessage();
// });

// When("verify the social media icons are present", async () => {
//     await homePage.checkSocialMediaIcons();
// });
// When("user clicks on {string}", async (socialMedia: string) => {
//     await homePage.clickSocialMediaIcon(socialMedia as "Linkedin"| "Facebook" | "Twitter" | "YouTube");
// });
// Then("user is navigated to the {string}", async (url: string) => {
//     await homePage.validateSocialMediaPage(url);
// });

When("User is on the dashboard page", async () => {
    await homePage.validateDashboardPage();
});
Then("verify the dashboard heading",async()=>{
    await homePage.validateDashboardHeading();
});
Then("verify the upgrade button",async()=>{
    await homePage.validateUpgradeButton();
});
Then("verify the elements in dropdown menu",async()=>{
    await homePage.validateDropDownMenu();
});
// When("User clicks on the side panel", async () => {
//     await homePage.clickSidePanel();
// });
Then("verify the elements in the sidepanel",async()=>{
    await homePage.validateSidePanel();
});
Then("after verifying user closes the side panel",async()=>{
    await homePage.clickSidePanel();
});

When("user clicks on the leave button", async () => {
    await homePage.clickLeaveButton();

});
Then("user will validate all the elements in the leave",async()=>{
    await homePage.validateLeaveElements();
});