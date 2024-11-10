
const clickListPostButton = async function (driver) {
    let listPostButton = await driver.$("a[href$='#/posts/']");
    await listPostButton.click();
}

const clickOnNewTag = async function (driver) {
    driver.url('http://localhost:2368/ghost/#/tags/new/')
}

module.exports = {
    clickListPostButton,
    clickOnNewTag,
}