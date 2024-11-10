const expect = import('chai').expect;

const clickOnNewMember = async function (driver) {
    driver.url('http://localhost:2368/ghost/#/members/new/')
}

const createMember = async function (driver, name, email) {
    let textField  = await driver.$("input.ember-text-field.gh-input.ember-view#member-name");
    await textField.setValue(name);
    let emailField = await driver.$("input.ember-text-field.gh-input.ember-view#member-email");
    await emailField.setValue(email);
    let saveButton = await driver.$("button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view");
    await saveButton.click();
    await driver.pause(2000);
}

const checkNewMember = async function (driver, name) {
    driver.url('http://localhost:2368/ghost/#/members/');
    await driver.pause(2000);
}

module.exports = {
    clickOnNewMember,
    createMember,
    checkNewMember
}
