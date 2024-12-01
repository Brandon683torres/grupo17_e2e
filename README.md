# Grupo 17 - Semana 8

# Integrantes

Fabian Gonzalo Díaz Ángel (f.diaza@uniandes.edu.co)

Edgar Humberto Rodríguez Roa (eh.rodriguez20@uniandes.edu.co)

Brandon Olivio Torres Sánchez (bo.torres@uniandes.edu.co)

# Documento Entrega Final - Semana 8

El documento soporte de la Estrategia planteada para semana 8 se encuentra disponible en la raiz del repositorio GIT bajo el nombre "Estrategia-pruebas-semana-8.pdf"

https://github.com/Brandon683torres/grupo17_e2e/blob/main/Estrategia-pruebas-semana-8.pdf

# Video Entrega Final - Semana 8

El enlace al video de presentación de la estrategia para Semana 8 se encuentra disponible en YOUTUBE:

https://www.youtube.com/watch?v=43Cx0a1t8a8

# Configuración de Ghost - Semana 8

El software Ghost 5.96.0 es el mismo utilizado en entregas anteriores. Debe estar inicializado para permitir la ejecución de las pruebas.

# Configuración de pruebas con CYPRESS - Semana 8

•	El software Cypress fue instalado de manera local en un PC Windows en una carpeta c:\cypress

•	Primero se crea el directorio: md c:\cypress

•	Se requiere tener instalado node.js versión v20.18.0 que incorpora npm (Node Package Manager), que es una herramienta fundamental dentro del ecosistema de Node.js.

•	Dentro de la carpeta c:\ se instaló Cypress con el comando:

o	npm install cypress

•	Para correr la consola del Cypress se ejecuta desde c:\cypress el comando:

node  .\node_modules\cypress\bin\cypress open    

y aparece en la consola web la primera vez

Sólo la primera vez se presiona “Not Configured” y Continue

Posteriormente, al ejecutarlo se entra directamente a la opción Configured en pruebas E2E:

Aquí se escoge la opción E2E Testing y se escoge el browser Chome + Start E2e Testing in Chrome:

•	Los casos de prueba se colocan en la carpeta C:\cypress\cypress\e2e y, para nuestro caso, decidimos crear una carpeta abajo llamada Ghost : C:\cypress\cypress\e2e\ghost

•	La ejecución de cada script se hace a través de la herramienta con un simple click sobre cada uno de los escenarios

•	Los escenarios de prueba se ejecutan con un simple click. Cada prueba tiene su número ( Escenarios 1 a 30 ) e identificación.

NOTA IMPORTANTE: Los casos han sido probados y NO tienen código comentariado.

El UNICO archivo que debe modificarse es el ubicado en C:\cypress\cypress\e2e\ghost\loginPage.js

Allí debe ajustarse la rutina de LoginAsAdmin.js

  loginAsAdmin() {
    this.visit();
    this.login('usuario', 'password'); // Cambia por las credenciales del administrador
  }

Debe reemplazarse 'usuario' y 'password' con un valor valido de administrador en su instalación.

Otra recomendación al ejecutar los scripts es que hemos incorporado puntos cy.wait() dentro del código para permitir que cada script fluya sin inconvenientes y para visualizar los pasos en la ejecución.

Es necesario tener paciencia y esperar a que cada script termine normalmente sin intervenirlo. En caso contrario puede fallar. La terminación se puede observar en el log de Cypress.

# Pruebas manuales solicitadas - Semana 8
 
El inventario de pruebas manuales requeridas para esta entrega está ubicado en la raiz de este repositorio y contiene la información de 10 casos de pruebas y su respectivo video en youtube

https://github.com/Brandon683torres/grupo17_e2e/blob/main/inventario-pruebas-exploratorias-semana8.xlsx





