const expect = import('chai').expect;

const checkIfTagExists = async function (driver) {
    let postTitle = await driver.$("h3[class$='gh-content-entry-title']")
    expect(postTitle).to.exist;
}

const fillTagName = async function (driver, title) {
    let titlePost = await driver.$("textarea.gh-editor-title");
    await titlePost.setValue(title);
}

const checkNewTag = async function (driver, title) {
      driver.url('http://localhost:2368/ghost/#/tags/');
}

const createTag = async function (
    driver,
    name,
    description,

) {

    let nameTag = await driver.$("input.gh-input");
    await nameTag.setValue(name);
    await driver.pause(1000);

    let descriptionTag = await driver.$('textarea.gh-input.gh-tag-details-textarea');
    await descriptionTag .setValue(description);
    await driver.pause(5000);

    let publishTrigger = await driver.$('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
    await publishTrigger.click();

}

const clickOnNewTag = async function (driver) {
}

module.exports = {
  clickOnNewTag,
  createTag
}
