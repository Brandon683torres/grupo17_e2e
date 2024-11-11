const expect = import('chai').expect;

const clickOnPostsTab = async function (driver) {
    let postsButton = await driver.$("a[href$='#/posts/']")
    await postsButton.click();
}

const selectPostToSchedule = async function (driver, title) {
    let publishedPosts = await driver.$$("h3[class$='gh-content-entry-title']");
    for (let post of publishedPosts) {
        const nombrePost = await post.getText();
        if (nombrePost === title) {
            await post.click();
            break;
        }
     }
}

const schedulePost = async function (driver) {

    let updateTrigger = await driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger'); // Publish
    await updateTrigger.click();

    await driver.pause(5000);
    let publishTrigger3 = await driver.$('div > div > div.gh-publish-settings > div.gh-publish-setting.last > button'); // For later
    await publishTrigger3.click();
    
    await driver.pause(5000)

    let publishTrigger4 = await driver.$('div > fieldset > div > div:nth-child(2)'); // For later
    await publishTrigger4.click();

    await driver.pause(5000);

    let publishButton = await driver.$('div > div > div.gh-publish-cta > button'); // Continue
    await publishButton.click();

    await driver.pause(1000);

    let publishButton2 = await driver.$('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view'); // Final
    await publishButton2.click();

    await driver.pause(1000);

    //const modalCloseButton = await driver.$('div.modal-close');  
    //await modalCloseButton.waitForDisplayed();
    //await modalCloseButton.click();
}

const checkNewPostScheduled = async function (driver, title) {
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
        console.log('Scheduled OK');
     }
}

module.exports = {
    selectPostToSchedule,
    schedulePost,
    clickOnPostsTab,
    checkNewPostScheduled
}
