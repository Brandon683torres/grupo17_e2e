const expect = import('chai').expect;

const clickOnTagsTab = async function (driver) {
     driver.url('http://localhost:2368/ghost/#/tags/')
}

const searchTag = async function (driver, name) {
    let publishedTags = await driver.$$("h3[class$='gh-tag-list-name']");
    for (let tagM of publishedTags) {
        const tagName = await tagM.getText();
        if ( tagName === name) {
            await tagM.click();
            break;
        }
     }
}

const deleteTag = async function (driver) {
   let deleteButton = await driver.$("button.gh-btn.gh-btn-red.gh-btn-icon");
   await deleteButton.click()
   let confirmButton = await driver.$("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view");
   await confirmButton.click()
}

module.exports = {
  clickOnTagsTab,
  searchTag,
  deleteTag
}
