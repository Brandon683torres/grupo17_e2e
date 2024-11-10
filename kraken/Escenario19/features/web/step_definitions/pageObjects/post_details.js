const expect = import('chai').expect;

const assignTagToPost = async function (driver, tagname) {
    let tagsField = await driver.$('#tag-input').$("input[class$='ember-power-select-trigger-multiple-input']")
    await tagsField.setValue(tagname);
    await driver.keys("Enter");
}

const typeAndEnter = async function (driver, element, text) {
    await element.setValue(text);
    await driver.keys("Enter");
}

const assignMultipleTagsToPost = async function (driver) {
    const tagsField = await driver.$('#tag-input').$("input[class$='ember-power-select-trigger-multiple-input']");
    const tags = ['tag1', 'tag2', 'tag3'];
    for (const tag of tags) {
        await typeAndEnter(driver, tagsField, tag);
    }
}

const checkIfPostsExists = async function (driver) {
    let postTitle = await driver.$("h3[class$='gh-content-entry-title']")
    expect(postTitle).to.exist;
}

const fillEditPost = async function (driver, title) {
    let titlePost = await driver.$("textarea.gh-editor-title");
    await titlePost.setValue(title);
    // let publishTrigger = await driver.$("div.gh-publishmenu-trigger");
    let publishTrigger = await driver.$("button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger");
    await publishTrigger.click();
    // let publishButton = await driver.$("button.gh-btn-blue.gh-publishmenu-button");
    // let publishButton = await driver.$("button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger");

    // await publishButton.click();
}

const fillPostName = async function (driver, title) {
    let titlePost = await driver.$("textarea.gh-editor-title");
    await titlePost.setValue(title);
}

const checkNewPostEdited = async function (driver, title) {
    let editedPost = await driver.$("li[class$='gh-list-row gh-posts-list-item']");
    expect(await editedPost.getText() == title).to.be.true;
}

/**
 * Creates a new post with given information
 * @param {*} driver The driver needed to operate
 * @param {*} title Title of the post
 * @param {*} content Content of the post
 * @param {*} additionalProps Additional properties for creating the post
 */
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
    // let publishTrigger = await driver.$('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger');
    let publishTrigger = await driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
    await publishTrigger.click();

    let publishButton = await driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
    await publishButton.click();

}

const addImage = async function (driver, image_path) {
    let settingsButton = await driver.$("button[title$='Settings']");
    await settingsButton.click();
    let imageSelector = await driver.$("input[class$='x-file--input']");
    await imageSelector.setValue(image_path);
}

const checkPostUpdated = async function (driver) {
    let updatedMessage = await driver.$("span[class$='gh-notification-title']");
    expect(await updatedMessage.getText() == "Updated").to.be.true;
}

const selectPostToDelete = async function (driver, title) {
    let publishedPosts = await driver.$$("h3[class$='gh-content-entry-title']");
    for (let post of publishedPosts) {
        if (await post.getText() === title) {
            await post.click();
            break;
        }
    }
}

const deletePost = async function (driver) {
    let settingsButton = await driver.$("button[title$='Settings']");
    await settingsButton.click();
    let deleteButton = await driver.$('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button');
    await deleteButton.click();
}

const clickConfirmDelete = async function (driver) {
    let redButton = await driver.$('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    await redButton.click();
}

module.exports = {
    assignTagToPost,
    assignMultipleTagsToPost,
    checkIfPostsExists,
    fillEditPost,
    fillPostName,
    checkNewPostEdited,
    createPost,
    addImage,
    checkPostUpdated,
    selectPostToDelete,
    deletePost,
    clickConfirmDelete,
}
