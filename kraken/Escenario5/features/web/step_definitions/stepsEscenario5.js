const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./pageObjects/login_page.js');
const { addExcerptPost } = require('./pageObjects/post_details.js');
const { clickOnPostsTab } = require('./pageObjects/admin_menu.js');
const { screenCapture } = require('./utils/screenCapture.js');

Given('I login with {kraken-string} and {kraken-string} - Escenario 5', async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, 'Escenario5', 'login');
});

When('I click on the Posts tab - Escenario 5', async function () {
    await clickOnPostsTab(this.driver);
    await screenCapture(this.driver, 'Escenario5', 'clickOnPostsTab');
});

Then('I add a excerpt to post {kraken-string}', async function(title) {
    await addExcerptPost(this.driver, title);
    await screenCapture(this.driver, 'Escenario5', 'addExcerptPost');
});




