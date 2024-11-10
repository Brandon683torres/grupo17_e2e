const { Before, After } = require('@cucumber/cucumber');

Before(async function () {
    console.log('Iniciando escenario de prueba');
    await this.startBrowser(); // Asegúrate de que el navegador se inicie aquí
});

After(async function () {
    console.log('Finalizando escenario de prueba');
    await this.stopBrowser(); // Cierra la sesión del navegador al finalizar
});
