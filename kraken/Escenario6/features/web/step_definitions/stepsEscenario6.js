const { Given, When, Then, And }  = require("@cucumber/cucumber");
const { login }              = require("./pageObjects/login_page.js");
const { clickOnPostsTab }  = require("./pageObjects/admin_menu.js");
const { clickOnOrderTool }  = require("./pageObjects/posts_page.js");
const { clickOnTheRecentlyUpdated }  = require("./pageObjects/posts_page.js");
const { screenCapture }      = require("./utils/screenCapture.js");

Given("I login with {kraken-string} and {kraken-string} - Escenario 6", async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, "Escenario6", "login");
});

When("I click on the Posts tab - Escenario 6", async function () {
    await clickOnPostsTab(this.driver);
    await screenCapture(this.driver, "Escenario6", "clickOnPostTab");
});

When("I click on the Order Tool", async function () {
    await clickOnOrderTool(this.driver);
    await screenCapture(this.driver, "Escenario6", "clickOnOrderTool");
});

When("I click on the Recently Updated", async function () {
    await clickOnTheRecentlyUpdated(this.driver);
    await screenCapture(this.driver, "Escenario6", "clickOnTheRecentlyUpdated");
});




