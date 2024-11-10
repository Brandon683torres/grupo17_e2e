const { Given, When, Then }  = require("@cucumber/cucumber");
const { login }              = require("./pageObjects/login_page.js");
const { clickOnMembersTab }    = require("./pageObjects/admin_menu.js");
const { clickOnNewMember }     = require("./pageObjects/member_details.js");
const { createMember }         = require("./pageObjects/member_details.js");
const { checkNewMember }         = require("./pageObjects/member_details.js");
const { screenCapture }        = require("./utils/screenCapture.js");

Given("I login with {kraken-string} and {kraken-string} - Escenario 16", async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, "Escenario16", "login");
});

When("I click on the Members tab - Escenario 16", async function () {
    await clickOnMembersTab(this.driver);
    await screenCapture(this.driver, "Escenario16", "clickOnMembersTab");
});

When("I click on 'New Member' Button", async function () {
    await clickOnNewMember(this.driver);
    await screenCapture(this.driver, "Escenario16", "clickOnNewMember");
});

When("I create a new member with {kraken-string} and {kraken-string}", async function(name, email) {
    await createMember(this.driver, name, email);
    await screenCapture(this.driver, "Escenario16", "createMember");
});

Then("I should see the new member called {kraken-string}", async function (name) {
    await checkNewMember(this.driver, name);
    await screenCapture(this.driver, "Escenario16", "checkNewMember");
});

