const expect = import('chai').expect;

const clickOnPostsTab = async function (driver) {
    let postsButton = await driver.$("a[href$='#/posts/']")
    await postsButton.click();
}

const selectPostToEdit = async function (driver, title) {
    let publishedPosts = await driver.$$("h3[class$='gh-content-entry-title']");
    for (let post of publishedPosts) {
        const nombrePost = await post.getText();
        if (nombrePost === title) {
            await post.click();
            break;
        }
     }
}

const editPost = async function (driver, content) {
    let contentPost = await driver.$('div.kg-prose');
    await contentPost.setValue('');
    await contentPost.setValue(content);
    await driver.pause(1000);

    let updateTrigger = await driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
    await updateTrigger.click();

    await driver.pause(1000);
    let publishTrigger = await driver.$('button.gh-btn.gh-btn-black.gh-btn-large');
    await publishTrigger.click();

    await driver.pause(3000);
    let publishButton = await driver.$('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
    await publishButton.click();

    await driver.pause(1000);

    //const modalCloseButton = await driver.$('div.modal-close');  
    //await modalCloseButton.waitForDisplayed();
    //await modalCloseButton.click();
}

const checkNewPostEdited = async function (driver, title) {
    driver.url('http://localhost:2368/ghost/#/posts/');
    let publishedPosts = await driver.$$("h3[class$='gh-content-entry-title']");
    exists = 0;
    for (let post of publishedPosts) {
        const nombrePost = await post.getText();
        if (nombrePost === title) {
           exists = 1;
        }
     }
     if ( exists === 1 )
     {
        console.log('Modificado');
     }
     
}

module.exports = {
    selectPostToEdit,
    editPost,
    clickOnPostsTab,
    checkNewPostEdited 
}
