const { Given, When, Then }  = require("@cucumber/cucumber");
const { login }              = require("./pageObjects/login_page.js");
const { clickOnTagsTab }    = require("./pageObjects/admin_menu.js");
const { searchTag, deleteTag } = require("./pageObjects/tag_details.js");
const { screenCapture }      = require("./utils/screenCapture.js");

Given("I login with {kraken-string} and {kraken-string} - Escenario 11", async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, "Escenario13", "login");
});

When("I click on the Tags tab - Escenario 13", async function () {
    await clickOnTagsTab(this.driver);
    await screenCapture(this.driver, "Escenario13", "clickOnPostsTab");
});

When("I search the tag {kraken-string}", async function (tag) {
    await searchTag(this.driver,tag);
    await screenCapture(this.driver, "Escenario13", "searchTag");
});

When("I delete the tag", async function () {
    await deleteTag(this.driver);
    await screenCapture(this.driver, "Escenario13", "deleteTag");
});



