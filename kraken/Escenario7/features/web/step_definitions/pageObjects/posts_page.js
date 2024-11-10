const { expect } = import('chai');

const clickOnFilterOption = async function (driver) {
      let toolTrigger = await driver.$('div.gh-contentfilter-menu.gh-contentfilter-tag');
      await toolTrigger.click();
      await driver.pause(3000);
}

const clickOnTheFilteredTag = async function (driver) {
     driver.url('http://localhost:2368/ghost/#/posts?tag=news');
}

module.exports = {
    clickOnFilterOption,
    clickOnTheFilteredTag
}