const { Given, When, Then } = require('@cucumber/cucumber');
const { login }             = require('./pageObjects/login_page.js');
const { clickOnPostsTab }   = require('./pageObjects/admin_menu.js');
const { checkNewPostScheduled, selectPostToSchedule, schedulePost } = require('./pageObjects/post_details.js');
const { screenCapture }     = require('./utils/screenCapture.js');

Given('I login with {kraken-string} and {kraken-string} - Escenario 4', async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, 'Escenario4', 'login');
});

When('I click on the Posts tab - Escenario 4', async function () {
    await clickOnPostsTab(this.driver)
    await screenCapture(this.driver, 'Escenario4', 'clickOnPostsTab');
});

When('I select a post with title {kraken-string}', async function (title) {
    await selectPostToSchedule(this.driver, title);
    await screenCapture(this.driver, 'Escenario4', 'selectPostToSchedule');
});

When('I schedule the selected post', async function () {
    await schedulePost(this.driver);
    await screenCapture(this.driver, 'Escenario4', 'schedulePost');
});

Then('I should see the new post scheduled called {kraken-string}', async function (page_title) {
    await checkNewPostScheduled(this.driver, page_title);
    screenCapture(this.driver, 'Escenario4', 'checkNewPostEdited');
});

