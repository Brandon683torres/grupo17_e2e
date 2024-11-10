const fs = require('fs');
const config = require('./../../../../properties.json');

const screenCapture = async (driver, scenario, step) => {
    let date = new Date();
    let datetime = date.getFullYear() + '-' + (date.getMonth()) + '-' + date.getDate();
    if (!fs.existsSync(`./pantallas/${datetime}`)) {
        fs.mkdirSync(`./pantallas/${datetime}`, { recursive: true });
    }
    await driver.saveScreenshot(`./pantallas/${datetime}/${scenario}_${step}.png`);
}

module.exports = {
    screenCapture
}
