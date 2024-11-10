const { Given, When, Then, And }  = require("@cucumber/cucumber");
const { login }              = require("./pageObjects/login_page.js");
const { clickOnPostsTab }  = require("./pageObjects/admin_menu.js");
const { clickOnFilterOption }  = require("./pageObjects/posts_page.js");
const { clickOnTheFilteredTag }  = require("./pageObjects/posts_page.js");
const { screenCapture }      = require("./utils/screenCapture.js");

Given("I login with {kraken-string} and {kraken-string} - Escenario 7", async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, "Escenario7", "login");
});

When("I click on the Posts tab - Escenario 7", async function () {
    await clickOnPostsTab(this.driver);
    await screenCapture(this.driver, "Escenario7", "clickOnPostsTab");
});

When("I click on the Filter Option", async function () {
    await clickOnFilterOption(this.driver);
    await screenCapture(this.driver, "Escenario7", "clickOnFilterOption");
});

When("I click on the Filtered Tag", async function () {
    await clickOnTheFilteredTag(this.driver);
    await screenCapture(this.driver, "Escenario7", "clickOnTheFilteredTag");
});




