const { Given, When, Then }  = require("@cucumber/cucumber");
const { login }              = require("./pageObjects/login_page.js");
const { clickOnTagsTab }    = require("./pageObjects/admin_menu.js");
const { searchTag, updateTag } = require("./pageObjects/tag_details.js");
const { screenCapture }      = require("./utils/screenCapture.js");

Given("I login with {kraken-string} and {kraken-string} - Escenario 12", async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, "Escenario12", "login");
});

When("I click on the Tags tab - Escenario 12", async function () {
    await clickOnTagsTab(this.driver);
    await screenCapture(this.driver, "Escenario12", "clickOnPostsTab");
});

When("I search the tag {kraken-string}", async function (name) {
    await searchTag(this.driver,name);
    await screenCapture(this.driver, "Escenario12", "searchTag");
});

When("I update the tag with new name {kraken-string}", async function (name) {
    await updateTag(this.driver,name);
    await screenCapture(this.driver, "Escenario12", "updateTag");
});



