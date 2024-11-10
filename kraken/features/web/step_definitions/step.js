const { Given, When, Then } = require('@cucumber/cucumber');

Given('El usuario inicia sesión como administrador', async function () {
    await this.driver.url('http://localhost:2368/ghost/#/signin');
    await this.driver.$('input[name="identification"]').setValue('daisy231@gmail.com');
    await this.driver.$('input[name="password"]').setValue('123qweiop890');
    await this.driver.$('button[type="submit"]').click();
});

When('El usuario visita la página de tags y verifica si el tag {string} existe', async function (tagName) {
    await this.driver.url('http://localhost:2368/ghost/#/tags');
    const tags = await this.driver.$$('.gh-tag-list-name');
    this.tagExists = await Promise.all(tags.map(async tag => (await tag.getText()) === tagName)).then(results => results.includes(true));
});

When('El usuario crea el tag {string} con la descripción {string} si no existe', async function (tagName, tagDescription) {
    if (!this.tagExists) {
        await this.driver.$('a[title="New tag"]').click();
        await this.driver.$('input#tag-name').setValue(tagName);
        await this.driver.$('textarea#tag-description').setValue(tagDescription);
        await this.driver.$('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
    }
});

When('El usuario visita la página de páginas', async function () {
    await this.driver.url('http://localhost:2368/ghost/#/pages');
});

When('El usuario crea una nueva página con título {string} y agrega un video de YouTube', async function (pageTitle) {
    await this.driver.$('a[title="New page"]').click();
    await this.driver.$('textarea[placeholder="Page title"]').setValue(pageTitle);
    await this.driver.pause(1000);

    await this.driver.$('[data-kg="editor"] > .kg-prose > p').click();
    await this.driver.$('div[data-kg-plus-button="true"]').moveTo();
    await this.driver.$('button[aria-label="Add a card"]').click();
    await this.driver.$('button[data-kg-card-menu-item="YouTube"]').click();
    await this.driver.$('input[data-testid="embed-url"]').setValue('https://youtu.be/lx6t1zS-bC8?si=V--NCOHghZjNOWDV{enter}');
    await this.driver.pause(4000);
});

When('El usuario asigna la etiqueta {string} a la página', async function (tagName) {
    await this.driver.$('button[title="Settings"]').click();
    await this.driver.$('.ember-power-select-trigger-multiple-input').setValue(tagName + '{enter}');
    await this.driver.$('button[title="Settings"]').click();
    await this.driver.pause(1000);
});

Then('La página se publica correctamente', async function () {
    await this.driver.$('button[data-test-button="publish-flow"]').click();
    await this.driver.$('button[data-test-button="continue"]').click();
    await this.driver.$('button[data-test-button="confirm-publish"]').click();
    await this.driver.pause(4000);
    await this.driver.$('button[data-test-button="close-publish-flow"]').click();
});

When('El usuario verifica si la página {string} existe', async function (pageTitle) {
    const pages = await this.driver.$$('h3.gh-content-entry-title');
    this.pageId = null;

    for (let page of pages) {
        if ((await page.getText()) === pageTitle) {
            this.pageId = await page.getAttribute('data-test-post-id');
            break;
        }
    }
    if (!this.pageId) {
        console.log(`La página con título "${pageTitle}" no se encontró.`);
    }
});

When('El usuario edita la página {string} y agrega un marcador {string}', async function (pageTitle, bookmarkText) {
    if (this.pageId) {
        await this.driver.url(`http://localhost:2368/ghost/#/editor/page/${this.pageId}/`);
        await this.driver.$('[data-kg="editor"] > .kg-prose > p').click();
        await this.driver.$('div[data-kg-plus-button="true"]').moveTo();
        await this.driver.$('button[aria-label="Add a card"]').click();
        await this.driver.$('button[data-kg-card-menu-item="Bookmark"]').click();
        await this.driver.$('[data-testid="bookmark-url"]').setValue(bookmarkText + '{enter}');
        await this.driver.pause(4000);
        await this.driver.$('.gh-editor-header > .gh-editor-publish-buttons > .green > span').click();
    }
});

When('El usuario despublica y elimina la página {string}', async function (pageTitle) {
    if (this.pageId) {
        await this.driver.url(`http://localhost:2368/ghost/#/editor/page/${this.pageId}/`);
        await this.driver.$('.gh-editor-header > .gh-editor-publish-buttons > .darkgrey > span').click();
        await this.driver.$('.gh-revert-to-draft > span').click();
        await this.driver.$('button[title="Settings"]').click();
        await this.driver.$('button[data-test-button="delete-post"]').click();
        await this.driver.$('button[data-test-button="delete-post-confirm"]').click();
        await this.driver.pause(1000);
    }
});

When('El usuario crea una nueva página con título {string} y un divisor', async function (pageTitle) {
    await this.driver.$('a[title="New page"]').click();
    await this.driver.$('textarea[placeholder="Page title"]').setValue(pageTitle);
    await this.driver.pause(1000);

    await this.driver.$('[data-kg="editor"] > .kg-prose > p').click();
    await this.driver.$('div[data-kg-plus-button="true"]').moveTo();
    await this.driver.$('button[aria-label="Add a card"]').click();
    await this.driver.$('button[data-kg-card-menu-item="Divider"]').click();
});

Then('La página se programa para publicarse el {string} a las {string}', async function (date, time) {
    await this.driver.$('button[data-test-button="publish-flow"]').click();
    await this.driver.$('.gh-publish-setting.last > .gh-publish-setting-title').click();
    await this.driver.$(':nth-child(2) > label').click();
    await this.driver.$('input[placeholder="YYYY-MM-DD"]').setValue(date);
    await this.driver.$('input[data-test-date-time-picker-time-input]').setValue(time);
    await this.driver.$('button[data-test-button="continue"]').click();
    await this.driver.$('span[data-test-task-button-state="idle"]').click();
    await this.driver.pause(4000);
    await this.driver.$('button[data-test-button="close-publish-flow"]').click();
});

When('El usuario visita la página de configuración de diseño', async function () {
    await this.driver.url('http://localhost:2368/ghost/#/settings/design/edit');
});

When('El usuario cambia el color de fondo del sitio a {string}', async function (color) {
    await this.driver.$('[data-testid="design-setting-tabs"] > [dir="ltr"] > [aria-orientation="horizontal"] > .no-scrollbar').click();
    await this.driver.$('button[id="site-wide"]').click();
    await this.driver.$('button[aria-label="Pick color"]').click();
    await this.driver.$('input[aria-label="Color value"]').setValue(color + '{enter}');
    await this.driver.$('.bg-black').click();
    await this.driver.pause(1000);
    await this.driver.$('button[aria-label="Close"]').click();
});

Then('El cambio de color se verifica en la página principal', async function () {
    await this.driver.url('http://localhost:2368/ghost/#/site');
    await this.driver.pause(1000);
});
