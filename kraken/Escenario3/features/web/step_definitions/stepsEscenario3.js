const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./pageObjects/login_page.js');
const { clickOnPostsTab } = require('./pageObjects/admin_menu.js');
const { selectPostToDelete, deletePost, clickConfirmDelete, checkNewPostEdited } = require('./pageObjects/post_details.js');
const { screenCapture } = require('./utils/screenCapture.js');

Given('I login with {kraken-string} and {kraken-string} - Escenario 3', async function (email, password) {
    await login(this.driver, email, password);
    await screenCapture(this.driver, 'Escenario3', 'login');
});

When('I click on the Posts tab - Escenario 3', async function () {
    await clickOnPostsTab(this.driver);
    await screenCapture(this.driver, 'Escenario3', 'clickOnPostsTab');
});

When('I select delete post with title {kraken-string}', async function(title) {
    console.log('Titulo a borrar:', title);
    await selectPostToDelete(this.driver, title);
    await screenCapture(this.driver, 'Escenario3', 'selectPostToDelete');
});

When('I delete post', async function() {
    await deletePost(this.driver);
    await screenCapture(this.driver, 'Escenario3', 'deletePost');
});

When('I click confirm delete button', async function() {
    await clickConfirmDelete(this.driver);
    await screenCapture(this.driver, 'Escenario3', 'clickConfirmDelete');
});

Then('I should not see the post called {kraken-string}', async function(title) {
    await checkNewPostEdited(this.driver, title);
    await screenCapture(this.driver, 'Escenario3', 'checkNewPostEdited');
});