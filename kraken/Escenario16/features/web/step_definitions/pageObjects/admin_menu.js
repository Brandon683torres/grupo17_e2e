const { expect } = import('chai');

const clickOnMembersTab = async function (driver) {
    driver.url('http://localhost:2368/ghost/#/members/')
}

module.exports = {
     clickOnMembersTab
}