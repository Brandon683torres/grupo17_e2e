# Grupo 17

# Integrantes
Fabian Gonzalo Díaz Ángel (f.diaza@uniandes.edu.co)

Deyssi Rocío Hómez Prada (dr.homez@uniandes.edu.co)

Edgar Humberto Rodríguez Roa (eh.rodriguez20@uniandes.edu.co)

Brandon Olivio Torres Sánchez (bo.torres@uniandes.edu.co)

# Configuración de pruebas con CYPRESS

•	El software Cypress fue instalado de manera local en un PC Windows en una carpeta c:\cypress
•	Primero se crea el directorio: md c:\cypress
•	Se requiere tener instalado node.js versión v20.18.0 que incorpora npm (Node Package Manager), que es una herramienta fundamental dentro del ecosistema de Node.js.
•	Dentro de la carpeta c:\ se instaló Cypress con el comando:
  npm install cypress
•	Para correr la consola del Cypress se ejecuta desde c:\cypress el comando:
  node  .\node_modules\cypress\bin\cypress open         
• Y aparece en la consola web la primera vez.
• Sólo la primera vez se presiona “Not Configured” y Continue
• Posteriormente, al ejecutarlo se entra directamente a la opción Configured en pruebas E2E.

## Ejecutar casos

• Se escoge la opción E2E Testing y se escoge el browser Chome + Start E2e Testing in Chrome.
•	Los casos de prueba se colocan en la carpete C:\cypress\cypress\e2e y, para nuestro caso, decidimos crear una subcarpeta llamada "ghost" : C:\cypress\cypress\e2e\ghost
•	La ejecución de cada script se hace a través de la herramienta gráfica ( Dashboard ) con un simple click sobre cada uno de los escenarios ( EscenarioXX_NOMBRE.cy.js )
•	Los escenarios de prueba se ejecutan con un simple click. Cada prueba tiene su número ( Escenarios 1 a 20 ) e identificador.
•	Los escenarios de prueba construidos con Cypress utilizan los dos patrones vistos. Se puede comprobar revisando el código de los scripts en C:\cypress\cypress\e2e\ghost ( Given-When-Then / patrón1 ) . 
• Por otra parte, se utilizaron librerías adicionales ubicadas en la ruta C:\cypress\cypress\e2e\ghost\pages para aislar la lógica de las rutinas (  PageObjects - patrón2 )






