const expect = import('chai').expect;

const clickOnPagesTab = async function (driver) {
    driver.url('http://localhost:2368/ghost/#/pages/')
}

const clickOnNewPage = async function (driver) {
    driver.url('http://localhost:2368/ghost/#/editor/page/')
}

const createPage = async function (
    driver,
    title,
    content,

) {

    let titlePage = await driver.$("textarea.gh-editor-title");
    await titlePage.setValue(title);
    await driver.pause(1000);

    let contentPage = await driver.$('div.kg-prose');
    await contentPage.setValue(content);
    await driver.pause(1000);

    let publishTrigger = await driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
    await publishTrigger.click();

    let publishButton = await driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
    await publishButton.click();
}

const checkNewPageEdited = async function (driver) {
    let updatedMessage = await driver.$("span[class$='gh-notification-title']");
    expect(await updatedMessage.getText() == "Updated").to.be.true;
}

const checkNewPageCreated = async function (driver,name) {
     clickOnPagesTab(driver);
}


module.exports = {
  clickOnPagesTab,
  clickOnNewPage,
  createPage,
  checkNewPageEdited,
  checkNewPageCreated
}
