const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./pageObjects/login_page.js');
const { clickOnPagesTab } = require('./pageObjects/admin_menu.js');
const { selectPageToDelete, deletePage, clickConfirmDelete, checkNewPageEdited } = require('./pageObjects/page_details.js');
const { screenCapture } = require('./utils/screenCapture.js');

Given('I login with {kraken-string} and {kraken-string} - Escenario 10', async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, 'Escenario10', 'login');
});

When('I click on the Pages tab - Escenario 3', async function () {
    await clickOnPagesTab(this.driver);
    await screenCapture(this.driver, 'Escenario10', 'clickOnPagesTab');
});

When('I select delete page with title {kraken-string}', async function(title) {
    console.log('Pagina a borrar:', title);
    await selectPageToDelete(this.driver, title);
    await screenCapture(this.driver, 'Escenario3', 'selectPageToDelete');
});

When('I delete page', async function() {
    await deletePage(this.driver);
    await screenCapture(this.driver, 'Escenario10', 'deletePage');
});

When('I click confirm delete button', async function() {
    await clickConfirmDelete(this.driver);
    await screenCapture(this.driver, 'Escenario10', 'clickConfirmDelete');
});

Then('I should not see the post called {kraken-string}', async function(title) {
    await checkNewPageEdited(this.driver, title);
    await screenCapture(this.driver, 'Escenario10', 'checkNewPageEdited');
});