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

const updateTag = async function (driver,name) {
   let nameBox = await driver.$("input.gh-input");
   await nameBox.setValue(name)
   let saveButton = await driver.$("button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view");
   await saveButton.click()
   await driver.pause(2000);
}

module.exports = {
  clickOnTagsTab,
  searchTag,
  updateTag
}
