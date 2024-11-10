const { expect } = import('chai');

const clickOnOrderTool = async function (driver) {
     let toolTrigger = await driver.$('div.gh-contentfilter-menu.gh-contentfilter-sort');
     await toolTrigger.click();
     await driver.pause(3000);
}

const clickOnTheRecentlyUpdated = async function (driver) {
     driver.url('http://localhost:2368/ghost/#/posts?order=updated_at%20desc');
}

module.exports = {
    clickOnOrderTool,
    clickOnTheRecentlyUpdated
}