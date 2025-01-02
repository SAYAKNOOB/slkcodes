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
}
