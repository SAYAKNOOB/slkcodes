import { expect, Locator, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";

export default class HomePage {
  private base: PlaywrightWrapper;
  constructor(page: Page) {
    this.base = new PlaywrightWrapper(page);
  }
  public Elements = {
    loginButton: `//button[normalize-space()='TEXT']`,
     linkedin:
      `//a[@href="https://www.linkedin.com/company/orangehrm/mycompany/"]`,
    facebook:
      `//a[@href="https://www.facebook.com/OrangeHRM/"]`,
    twitter:
      `//a[@href="https://twitter.com/orangehrm?lang=en"]`,
    
     youtube:
      `//a[@href="https://www.youtube.com/c/OrangeHRMInc"]`,
  };

 async navigateToLoginPage() {
    await this.base.goto("https://opensource-demo.orangehrmlive.com/");
  }

  async validateHeaderLogo() {
    const logo = fixture.page.locator(`//img[@alt="company-branding"]`);
  }
  async validateLoginText() {
    const loginText = fixture.page.locator(`//h5[text()="Login"]`);
  }
  async validateLoginTextDetails() {
    const loginTextDetails = fixture.page.locator(
      `//div[@class="oxd-sheet oxd-sheet--rounded oxd-sheet--gutters oxd-sheet--gray-lighten-2 orangehrm-demo-credentials"]`
    );
  }
  async validateUsernamePlaceholder() {
    const username = fixture.page.locator(`//input[@placeholder="Username"]`);
  }
  async validatePasswordPlaceholder() {
    const password = fixture.page.locator(`//input[@placeholder="Password"]`);
  }
  async validateSocialMediaLinks() {
    const socialMediaLinks = fixture.page.locator(
      `//div[@class="orangehrm-login-footer-sm"]`
    );
  }
  async validateLoginButton() {
    const loginButton = fixture.page.locator(`//button[@type="submit"]`);
  }
  async validateForgotPasswordLink() {
    const forgotPassword = fixture.page.locator(
      `//p[text()="Forgot your password? "]`
    );
  }
  async validateFooterLogo() {
    const footerLogo = fixture.page.locator(
      `//div[@class="orangehrm-login-logo"]//img[@alt="orangehrm-logo"]`
    );
  }
  //   async validateLoginButtonColor(buttonName: string, expectedColor: string) {
  //     const loginButton = fixture.page.locator(
  //       this.Elements.loginButton.replace("TEXT", buttonName)
  //     );
  //     await expect(loginButton).toBeVisible();
  //     //await loginButton.click();
  //     const color = await fixture.page.evaluate((button) => {
  //       return button.ownerDocument.defaultView.getComputedStyle(button)
  //         .backgroundColor;
  //     }, await loginButton.elementHandle());
  //     await expect(color).toBe(expectedColor);
  //   }
  async enterUsername(username: string) {
    const usernameField = fixture.page.locator(
      `//input[@placeholder="Username"]`
    );
    await usernameField.fill(username);
  }
  async enterPassword(password: string) {
    const passwordField = fixture.page.locator(`//input[@name="password"]`);
    await passwordField.fill(password);
  }
  async clickLoginButton() {
    const loginButton = fixture.page.locator(`//button[@type="submit"]`);
    await loginButton.click();
  }
  async validateDashboardPage() {
    const dashboardPage = fixture.page.locator(`//h6[text()="Dashboard"]`);
  }
//   async checkSocialMediaIcons() {
//     const linkedin = fixture.page.locator(
//       `//a[@href="https://www.linkedin.com/company/orangehrm/mycompany/"]`
//     );
//     const facebook = fixture.page.locator(
//       `//a[@href="https://www.facebook.com/OrangeHRM/"]`
//     );
//     const twitter = fixture.page.locator(
//       `//a[@href="https://twitter.com/orangehrm"]`
//     );
//     const youtube = fixture.page.locator(
//       `//a[@href="https://www.youtube.com/c/OrangeHRMInc"]`
//     );
//     await expect(linkedin).toBeVisible();
//     await expect(facebook).toBeVisible();
//     await expect(twitter).toBeVisible();
//     await expect(youtube).toBeVisible();
//   }

//   async clickSocialMediaIcon(
//     icon: "Linkedin" | "Facebook" | "Twitter" | "YouTube"
//   ) {
//     let iconLocator: Locator;
//     switch (icon) {
//       case "Linkedin":
//         iconLocator = fixture.page.locator(
//           `//a[@href="https://www.linkedin.com/company/orangehrm"]`
//         );
//         break;
//       case "Facebook":
//         iconLocator = fixture.page.locator(
//           `//a[@href="https://www.facebook.com/OrangeHRM/"]`
//         );
//         break;
//       case "Twitter":
//         iconLocator = fixture.page.locator(
//           `//a[@href="https://www.linkedin.com/company/orangehrm"]`
//         );
//         break;
//       case "YouTube":
//         iconLocator = fixture.page.locator(
//           `//a[@href="https://www.youtube.com/c/OrangeHRMInc"]`
//         );
//         break;
//     }
//     await iconLocator.click();
//   }
//   async validateSocialMediaPage(expectedUrl: string) {
//     const [newPage] = await Promise.all([
//       fixture.page.waitForEvent("popup"),
//       fixture.page.click(this.Elements.linkedin),
//     ]);
//     await newPage.waitForLoadState();
//     const url = newPage.url();
//     console.log(`Actual URL: ${url}`);
//     expect(url).toContain(expectedUrl);
//     await newPage.close();
//   }

//   async closeNewPage() {
//     const pages = fixture.page.context().pages();
//     if (pages.length > 1) {
//       await pages[1].close();
//     }
//   }

  async validateDashboardHeading() {
    const dashboardHeading = fixture.page.locator(`//h6[text()="Dashboard"]`);
  }
  async validateUpgradeButton() {
    const upgradeButton = fixture.page.locator(`//button[text()=" Upgrade"]`);
  }
  async validateDropDownMenu() {
    const dropDownMenu = fixture.page.locator(
      `//p[@class="oxd-userdropdown-name"]`
    );
  }

  async clickSidePanel(){
    const sidePanel = fixture.page.locator(`//button[@class="oxd-icon-button oxd-main-menu-button"]`);
    await sidePanel.click();
  }

  async validateSidePanel(){  
    const sidePanelElements = fixture.page.locator(`//input[@placeholder="Search"]`);
    const searchElement = fixture.page.locator(`//input[@placeholder="Search"]`);
    const adminElement = fixture.page.locator(`//span[text()="Admin"]`);
    const pimElement = fixture.page.locator(`//span[text()="PIM"]`);
    const leaveElement = fixture.page.locator(`//span[text()="Leave"]`);
    const timeElement = fixture.page.locator(`//span[text()="Time"]`);
    const recruitmentElement = fixture.page.locator(`//span[text()="Recruitment"]`);
    const myInfoElement = fixture.page.locator(`//span[text()="My Info"]`);
    const performanceElement = fixture.page.locator(`//span[text()="Performance"]`);
    const dashboardElement = fixture.page.locator(`//span[text()="Dashboard"]`);
    const directoryElement = fixture.page.locator(`//span[text()="Directory"]`);
    const maintenanceElement = fixture.page.locator(`//span[text()="Maintenance"]`);
    const claimElement = fixture.page.locator(`//span[text()="Claim"]`);
    const buzzElement = fixture.page.locator(`//span[text()="Buzz"]`);

    await expect(sidePanelElements).toBeVisible();
    await expect(searchElement).toBeVisible();
    await expect(adminElement).toBeVisible();
    await expect(pimElement).toBeVisible();
    await expect(leaveElement).toBeVisible();
    await expect(timeElement).toBeVisible();
    await expect(recruitmentElement).toBeVisible();
    await expect(myInfoElement).toBeVisible();
    await expect(performanceElement).toBeVisible();
    await expect(dashboardElement).toBeVisible();
    await expect(directoryElement).toBeVisible();
    await expect(maintenanceElement).toBeVisible();
    await expect(claimElement).toBeVisible();
    await expect(buzzElement).toBeVisible();
  }

  async clickLeaveButton(){
    const leaveButton = fixture.page.locator(`//span[text()="Leave"]`);
    await leaveButton.click();
  }

  async validateLeaveElements(){
    const apply = fixture.page.locator(`//a[text()="Apply"]`);
    const myLeave = fixture.page.locator(`//a[text()="My Leave"]`);
    const entitlements = fixture.page.locator(`//span[text()="Entitlements "]`);
    const reports = fixture.page.locator(`//span[text()="Reports "]`);
    const configure = fixture.page.locator(`//span[text()="Configure "]`);
    const leaveList = fixture.page.locator(`//a[text()="Leave List"]`);
    const assignLeave = fixture.page.locator(`//a[text()="Assign Leave"]`);

    await expect(apply).toBeVisible();
    await expect(myLeave).toBeVisible();
    await expect(entitlements).toBeVisible();
    await expect(reports).toBeVisible();
    await expect(configure).toBeVisible();
    await expect(leaveList).toBeVisible();
    await expect(assignLeave).toBeVisible();
  }

  
}