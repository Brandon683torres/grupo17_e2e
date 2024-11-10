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

const changeMemberNameWith = async function (driver,name) {
     let nameBox = await driver.$("input.ember-text-field.gh-input.ember-view");
     await nameBox.setValue(name)
     let saveButton = await driver.$("button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view");
     await saveButton.click()
}

const notSeeMemberName = async function (driver) {
    driver.url('http://localhost:2368/ghost/#/members/')
}

module.exports = {
   selectMemberPage,
   selectMemberWithName,
   changeMemberNameWith,
   notSeeMemberName
}
