const { Given, When, Then } = require('@cucumber/cucumber');
const { login }             = require('./pageObjects/login_page.js');
const { clickOnPostsTab }   = require('./pageObjects/admin_menu.js');
const { fillEditPost, checkNewPostEdited, selectPostToEdit, editPost } = require('./pageObjects/post_details.js');
const { screenCapture }     = require('./utils/screenCapture.js');

Given('I login with {kraken-string} and {kraken-string} - Escenario 2', async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, 'Escenario2', 'login');
});

When('I click on the Posts tab - Escenario 2', async function () {
    await clickOnPostsTab(this.driver)
    await screenCapture(this.driver, 'Escenario2', 'clickOnPostsTab');
});

When('I select a post with title {kraken-string}', async function (title) {
    await selectPostToEdit(this.driver, title);
    await screenCapture(this.driver, 'Escenario2', 'selectPostToEdit');
});

When('I edit the selected post with value {kraken-string}', async function (value) {
    await editPost(this.driver, value);
    await screenCapture(this.driver, 'Escenario2', 'editPost');
});

Then('I should see the new post edited called {kraken-string}', async function (page_title) {
    await checkNewPostEdited(this.driver, page_title);
    screenCapture(this.driver, 'Escenario2', 'checkNewPostEdited');
});

