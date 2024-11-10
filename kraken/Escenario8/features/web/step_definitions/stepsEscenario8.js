const { Given, When, Then }   = require("@cucumber/cucumber");
const { login }               = require("./pageObjects/login_page.js");
const { clickOnPagesTab }     = require("./pageObjects/pages_details.js");
const { createPage }          = require("./pageObjects/pages_details.js");
const { clickOnNewPage }      = require("./pageObjects/pages_details.js");
const { checkNewPageCreated } = require("./pageObjects/pages_details.js");
const { screenCapture }       = require("./utils/screenCapture.js");

Given("I login with {kraken-string} and {kraken-string} - Escenario 8", async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, "Escenario8", "login");
});

When("I click on the Pages tab - Escenario 8", async function () {
    await clickOnPagesTab(this.driver);
    await screenCapture(this.driver, "Escenario8", "clickOnPagesTab");
});

When("I click on 'New Page' Button", async function () {
    await clickOnNewPage(this.driver);
    await screenCapture(this.driver, "Escenario8", "clickOnNewPage");
});

When("I create a new page with {kraken-string} and {kraken-string}", async function(title, content) {
    await createPage(this.driver, title, content);
    await screenCapture(this.driver, "Escenario8", "createcreatePage");
});

Then("I should see the new page created called {kraken-string}", async function (page_title) {
    await checkNewPageCreated(this.driver, page_title);
    await screenCapture(this.driver, "Escenario8", "checkNewPageCreated");
});

