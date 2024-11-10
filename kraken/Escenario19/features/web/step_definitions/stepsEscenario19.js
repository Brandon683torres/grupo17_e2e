const { Given, When, Then }  = require("@cucumber/cucumber");
const { login }              = require("./pageObjects/login_page.js");
const { clickOnMembersTab }  = require("./pageObjects/members_page.js");
const { clickOnConfigTool }  = require("./pageObjects/members_page.js");
const { exportMembers     }  = require("./pageObjects/members_page.js");
const { screenCapture }      = require("./utils/screenCapture.js");

Given("I login with {kraken-string} and {kraken-string} - Escenario 19", async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, "Escenario19", "login");
});

When("I click on the Members tab - Escenario 19", async function () {
    await clickOnMembersTab(this.driver);
    await screenCapture(this.driver, "Escenario19", "clickOnMembersTab");
});

When("I click on the Config Tool", async function () {
    await clickOnConfigTool(this.driver);
    await screenCapture(this.driver, "Escenario19", "clickOnConfigTool");
});

Then("I export Members", async function() {
    await exportMembers(this.driver);
    await screenCapture(this.driver, "Escenario19", "exportMembers");
});



