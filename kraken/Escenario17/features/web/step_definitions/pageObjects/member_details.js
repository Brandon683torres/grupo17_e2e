const expect = import('chai').expect;

const selectMemberPage = async function (driver) {
    driver.url('http://localhost:2368/ghost/#/members/')
}

const selectMemberWithName = async function (driver, name) {
    let publishedMembers = await driver.$$("h3[class$='ma0 pa0 gh-members-list-name ']");
    for (let member of publishedMembers) {
        const memberName = await member.getText();
        if ( memberName === name) {
            await member.click();
            break;
        }
     }
}

const clickDeleteButton = async function (driver) {
     let deleteButton = await driver.$("button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view");
     await deleteButton.click();
     let lista = await driver.$$("button[class$='mr2']");
     for (let member of lista) {
        const memberText = await member.getText();
        if ( memberText === 'Delete member') {
            await member.click();
            break;
        }
     }
     let confirmButton = await driver.$("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view");
     await confirmButton.click();
}

const notSeeMemberName = async function (driver) {
    driver.url('http://localhost:2368/ghost/#/members/')
}

module.exports = {
   selectMemberPage,
   selectMemberWithName,
   clickDeleteButton,
   notSeeMemberName
}
