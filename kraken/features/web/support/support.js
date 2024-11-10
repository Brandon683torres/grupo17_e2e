const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { remote } = require('webdriverio');

class CustomWorld {
    constructor() {
        this.driver = null;
    }

    async startBrowser() {
        this.driver = await remote({
            logLevel: 'error',
            path: '/', 
            hostname: '127.0.0.1',
            port: 59425, 
            capabilities: {
                browserName: 'chrome',
            },
        });
    }

    async stopBrowser() {
        if (this.driver) {
            await this.driver.deleteSession();
            this.driver = null; // Asegúrate de restablecer la instancia
        }
    }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(60000);
