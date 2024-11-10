const { Given, When, Then } = require('@cucumber/cucumber');
const { login }             = require('./pageObjects/login_page.js');
const { clickOnPagesTab }   = require('./pageObjects/admin_menu.js');
const { selectPageToEdit, editPage, checkNewPageEdited } = require('./pageObjects/page_details.js');
const { screenCapture }     = require('./utils/screenCapture.js');

Given('I login with {kraken-string} and {kraken-string} - Escenario 9', async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, 'Escenario9', 'login');
});

When('I click on the Pages tab - Escenario 9', async function () {
    await clickOnPagesTab(this.driver)
    await screenCapture(this.driver, 'Escenario9', 'clickOnPagesTab');
});

When('I select a page with title {kraken-string}', async function (title) {
    await selectPageToEdit(this.driver, title);
    await screenCapture(this.driver, 'Escenario9', 'selectPageToEdit');
});

When('I edit the selected page with value {kraken-string}', async function (value) {
    await editPage(this.driver, value);
    await screenCapture(this.driver, 'Escenario9', 'editPage');
});

Then('I should see the new page edited called {kraken-string}', async function (page_title) {
    await checkNewPageEdited(this.driver, page_title);
    screenCapture(this.driver, 'Escenario9', 'checkNewPageEdited');
});

