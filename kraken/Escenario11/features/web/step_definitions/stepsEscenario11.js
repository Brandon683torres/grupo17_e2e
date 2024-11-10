const { Given, When, Then }  = require("@cucumber/cucumber");
const { login }              = require("./pageObjects/login_page.js");
const { clickOnTagsTab }    = require("./pageObjects/admin_menu.js");
const { createTag }         = require("./pageObjects/tag_details.js");
const { clickOnNewTag }     = require("./pageObjects/tags_list.js");
const { checkNewTag } = require("./pageObjects/tag_details.js");
const { screenCapture }      = require("./utils/screenCapture.js");

Given("I login with {kraken-string} and {kraken-string} - Escenario 11", async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, "Escenario11", "login");
});

When("I click on the Tags tab - Escenario 11", async function () {
    await clickOnTagsTab(this.driver);
    await screenCapture(this.driver, "Escenario11", "clickOnPostsTab");
});

When("I click on 'New Tag' Button", async function () {
    await clickOnNewTag(this.driver);
    await screenCapture(this.driver, "Escenario11", "clickOnNewTag");
});

When("I create a new tag with {kraken-string} and {kraken-string}", async function(name, description) {
    await createTag(this.driver, name, description);
    await screenCapture(this.driver, "Escenario11", "createTag");
});



