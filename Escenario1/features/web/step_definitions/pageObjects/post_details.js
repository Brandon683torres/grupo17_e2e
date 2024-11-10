const expect = import('chai').expect;

const typeAndEnter = async function (driver, element, text) {
    await element.setValue(text);
    await driver.keys("Enter");
}

const checkNewPostEdited = async function (driver, title) {
    driver.url('http://localhost:2368/ghost/#/posts/')
}

const createPost = async function (
    driver,
    title,
    content,

) {

    let titlePost = await driver.$("textarea.gh-editor-title");
    await titlePost.setValue(title);
    await driver.pause(1000);

    let contentPost = await driver.$('div.kg-prose');
    await contentPost.setValue(content);
    await driver.pause(1000);

    await driver.pause(1000);

    let publishTrigger = await driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
    await publishTrigger.click();

    let publishButton = await driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
    await publishButton.click();

}

const clickConfirmDelete = async function (driver) {
    let redButton = await driver.$('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    await redButton.click();
}

const clickOnNewPost = async function (driver) {
    let newPostButton = await driver.$("a[href$='#/editor/post/']");
    await newPostButton.click();
}

module.exports = {
   clickOnNewPost,
   createPost,
   checkNewPostEdited
   
}
