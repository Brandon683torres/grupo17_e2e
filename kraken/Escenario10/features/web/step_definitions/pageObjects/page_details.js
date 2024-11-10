const expect = import('chai').expect;

const selectPageToDelete = async function (driver, title) {
    let publishedPages = await driver.$$("h3[class$='gh-content-entry-title']");
    for (let page of publishedPages) {
        const nombrePage = await page.getText();
        if (nombrePage === title) {
            await page.click();
            break;
        }
     }
}

const deletePage = async function (driver) {
    let settingsButton = await driver.$("button[title$='Settings']");
    await settingsButton.click();
    let deleteButton = await driver.$('button.gh-btn.gh-btn-outline.gh-btn-icon.gh-btn-fullwidth');
    await deleteButton.click();
}

const clickConfirmDelete = async function (driver) {
    let redButton = await driver.$('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    await redButton.click();
}

const checkNewPageEdited = async function (driver, title) {
    let publishedPages = await driver.$$("h3[class$='gh-content-entry-title']");
    const exists = 0;
    for (let page of publishedPages) {
        const nombrePage = await page.getText();
        if (nombrePage === title) {
           exists = 1;
        }
     }
     if ( exists === 0 )
     {
        console.log('Eliminada');
     }
     
}

module.exports = {
    selectPageToDelete,
    deletePage,
    clickConfirmDelete,
    checkNewPageEdited
}
