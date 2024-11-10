const { expect } = import('chai');

const clickOnMembersTab = async function (driver) {
      driver.url('http://localhost:2368/ghost/#/members/')
}

const clickOnConfigTool = async function (driver) {
     let toolTrigger = await driver.$('button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view');
     await toolTrigger.click();
     let export2 = await driver.$('button.mr2');
     await export2.click();
}

const exportMembers = async function (driver) {

}

module.exports = {
    clickOnMembersTab,
    clickOnConfigTool,
    exportMembers
}