const { expect } = import('chai');

const login = async function (driver, email, password) {
    let emailElement = await driver.$('#identification');
    await emailElement.setValue(email);
    let passwordElement = await driver.$('#password');
    await passwordElement.setValue(password);

    let loginButton = await driver.$('#ember5')
    await loginButton.click();
}

const checkIncorrectPassword = async function (driver) {
    let incorrectPassword = await driver.$("p[class$='main-error']")
    expect(incorrectPassword).to.exist;
}

module.exports = {
    login,
    checkIncorrectPassword
}