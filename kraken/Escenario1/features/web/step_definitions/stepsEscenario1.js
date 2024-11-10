const { Given, When, Then }  = require("@cucumber/cucumber");
const { login }              = require("./pageObjects/login_page.js");
const { clickOnPostsTab }    = require("./pageObjects/admin_menu.js");
const { createPost }         = require("./pageObjects/post_details.js");
const { clickOnNewPost }     = require("./pageObjects/post_details.js");
const { checkNewPostEdited } = require("./pageObjects/post_details.js");
const { screenCapture }      = require("./utils/screenCapture.js");

Given("I login with {kraken-string} and {kraken-string} - Escenario 1", async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, "Escenario1", "login");
});

When("I click on the Posts tab - Escenario 1", async function () {
    await clickOnPostsTab(this.driver);
    await screenCapture(this.driver, "Escenario1", "clickOnPostsTab");
});

When("I click on 'New Post' Button", async function () {
    await clickOnNewPost(this.driver);
    await screenCapture(this.driver, "Escenario1", "clickOnNewPost");
});

When("I create a new post with {kraken-string} and {kraken-string}", async function(title, content) {
    await createPost(this.driver, title, content);
    await screenCapture(this.driver, "Escenario1", "createPost");
});

Then("I should see the new post edited called {kraken-string}", async function (post_title) {
    await checkNewPostEdited(this.driver, post_title);
    await screenCapture(this.driver, "Escenario1", "checkNewPostEdited");
});

