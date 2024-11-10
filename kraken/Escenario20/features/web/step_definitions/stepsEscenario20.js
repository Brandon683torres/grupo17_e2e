const { Given, When, Then, And }  = require("@cucumber/cucumber");
const { login }              = require("./pageObjects/login_page.js");
const { clickOnMembersTab }  = require("./pageObjects/members_page.js");
const { clickOnFilterTool }  = require("./pageObjects/members_page.js");
const { writeOnFilterTool }  = require("./pageObjects/members_page.js");
const { applyFilterTool   }  = require("./pageObjects/members_page.js");
const { screenCapture }      = require("./utils/screenCapture.js");

Given("I login with {kraken-string} and {kraken-string} - Escenario 20", async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, "Escenario20", "login");
});

When("I click on the Members tab - Escenario 20", async function () {
    await clickOnMembersTab(this.driver);
    await screenCapture(this.driver, "Escenario20", "clickOnMembersTab");
});

When("I click on the Filter Tool", async function () {
    await clickOnFilterTool(this.driver);
    await screenCapture(this.driver, "Escenario20", "clickOnFilterTool");
});

When("I write the Filter", async function () {
    await writeOnFilterTool(this.driver);
    await screenCapture(this.driver, "Escenario20", "writeOnFilterTool");
});

When("I apply the Filter", async function () {
    await applyFilterTool(this.driver);
    await screenCapture(this.driver, "Escenario20", "applyFilterTool");
});



