const expect = import('chai').expect;

const clickOnPagesTab = async function (driver) {
    let postsButton = await driver.$("a[href$='#/posts/']")
    await postsButton.click();
}

const selectPageToEdit = async function (driver, title) {
    let publishedPages = await driver.$$("h3[class$='gh-content-entry-title']");
    for (let page of publishedPages) {
        const nombrePage = await page.getText();
        if (nombrePage === title) {
            await page.click();
            break;
        }
     }
}

const editPage = async function (driver, content) {
    let contentPage = await driver.$('div.kg-prose');
    await contentPage.setValue('');
    await contentPage.setValue(content);
    await driver.pause(1000);

    let updateTrigger = await driver.$('button.gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view');
    await updateTrigger.click();

}

const checkNewPageEdited = async function (driver, title) {
    driver.url('http://localhost:2368/ghost/#/pages/')
    let publishedPages = await driver.$$("h3[class$='gh-content-entry-title']");
    exists = 0;
    for (let page of publishedPages) {
        const nombrePage = await page.getText();
        if (nombrePage === title) {
           exists = 1;
        }
     }
     if ( exists === 1 )
     {
        console.log('Modificada');
     }
     
}

module.exports = {
    selectPageToEdit,
    editPage,
    clickOnPagesTab,
    checkNewPageEdited 
}
