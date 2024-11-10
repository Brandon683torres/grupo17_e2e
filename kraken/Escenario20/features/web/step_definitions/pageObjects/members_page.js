const { expect } = import('chai');

const clickOnMembersTab = async function (driver) {
      driver.url('http://localhost:2368/ghost/#/members/')
}

const clickOnFilterTool = async function (driver) {
     let toolTrigger = await driver.$('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-icon.gh-btn-action-icon');
     await toolTrigger.click();
     await driver.pause(2000);
}

const writeOnFilterTool = async function (driver) {
     let textTrigger = await driver.$('input.gh-input');
     await textTrigger.setValue('yy');
     await driver.pause(2000);
}

const applyFilterTool = async function (driver) {
     let buttonTrigger = await driver.$('button.gh-btn.gh-btn-primary');
     await buttonTrigger.click();
     await driver.pause(2000);
}

module.exports = {
    clickOnMembersTab,
    clickOnFilterTool,
    writeOnFilterTool,
    applyFilterTool
}