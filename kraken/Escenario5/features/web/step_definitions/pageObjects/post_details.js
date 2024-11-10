const expect = import('chai').expect;

const selectPost = async function (driver, title) {
    let publishedPosts = await driver.$$("h3[class$='gh-content-entry-title']");
    for (let post of publishedPosts) {
        const nombrePost = await post.getText();
        if (nombrePost === title) {
            await post.click();
            await driver.pause(5000);
            break;
        }
     }
}

const addExcerptPost = async function (driver, title) {
      await selectPost(driver,title);
      let publishTrigger = await driver.$("button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon");
      await publishTrigger.click();
      const caja = await driver.$('textarea.post-setting-custom-excerpt');
      await caja.setValue('New Excerpt');   
      await driver.pause(2000)

      let updateTrigger2 = await driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
      await updateTrigger2.click();

      await driver.pause(1000);
      let publishTrigger3 = await driver.$('button.gh-btn.gh-btn-black.gh-btn-large');
      await publishTrigger3.click();

      await driver.pause(3000);
      let publishButton = await driver.$('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
      await publishButton.click();

      await driver.pause(1000);
      driver.url('http://localhost:2368/ghost/#/posts/')
}

module.exports = {
    selectPost,
    addExcerptPost 
}
