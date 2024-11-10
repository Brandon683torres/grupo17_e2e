const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./pageObjects/login_page.js');
const { selectMemberPage, selectMemberWithName, clickDeleteButton, notSeeMemberName } = require('./pageObjects/member_details.js');
const { screenCapture } = require('./utils/screenCapture.js');

Given('I login with {kraken-string} and {kraken-string} - Escenario 17', async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, 'Escenario17', 'login');
});

When('I select member page', async function() {
    await selectMemberPage(this.driver);
    await screenCapture(this.driver, 'Escenario17', 'selectMemberPage');
});

When('I select member with name {kraken-string}', async function(name) {
    await selectMemberWithName(this.driver,name);
    await screenCapture(this.driver, 'Escenario17', 'selectMemberWithName');
});

When('I click delete button', async function() {
    await clickDeleteButton(this.driver);
    await screenCapture(this.driver, 'Escenario17', 'clickDeleteButton');
});

Then('I should not see the member named {kraken-string}', async function(name) {
    await notSeeMemberName(this.driver, name);
    await screenCapture(this.driver, 'Escenario17', 'notSeeMemberName');
});