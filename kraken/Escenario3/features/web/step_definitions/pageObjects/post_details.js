const expect = import('chai').expect;

const selectPostToDelete = async function (driver, title) {
    let publishedPosts = await driver.$$("h3[class$='gh-content-entry-title']");
    for (let post of publishedPosts) {
        const nombrePost = await post.getText();
        if (nombrePost === title) {
            await post.click();
            break;
        }
     }
}

const deletePost = async function (driver) {
    let settingsButton = await driver.$("button[title$='Settings']");
    await settingsButton.click();
    let deleteButton = await driver.$('button.gh-btn.gh-btn-outline.gh-btn-icon.gh-btn-fullwidth');
    await deleteButton.click();
}

const clickConfirmDelete = async function (driver) {
    let redButton = await driver.$('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    await redButton.click();
}

const checkNewPostEdited = async function (driver, title) {
    let publishedPosts = await driver.$$("h3[class$='gh-content-entry-title']");
    const exists = 0;
    for (let post of publishedPosts) {
        const nombrePost = await post.getText();
        if (nombrePost === title) {
           exists = 1;
        }
     }
     if ( exists === 0 )
     {
        console.log('Eliminado');
     }
     
}

module.exports = {
    selectPostToDelete,
    deletePost,
    clickConfirmDelete,
    checkNewPostEdited
}
