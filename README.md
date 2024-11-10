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

## Ejecutar casos en Cypress

• Se escoge la opción E2E Testing y se escoge el browser Chome + Start E2e Testing in Chrome.

• Los casos de prueba se colocan en la carpete C:\cypress\cypress\e2e y, para nuestro caso, decidimos crear una subcarpeta llamada "ghost" : C:\cypress\cypress\e2e\ghost

• La ejecución de cada script se hace a través de la herramienta gráfica ( Dashboard ) con un simple click sobre cada uno de los escenarios ( EscenarioXX_NOMBRE.cy.js )

• Los escenarios de prueba se ejecutan con un simple click. Cada prueba tiene su número ( Escenarios 1 a 20 ) e identificador.

• Los escenarios de prueba construidos con Cypress utilizan los dos patrones vistos. Se puede comprobar revisando el código de los scripts en C:\cypress\cypress\e2e\ghost ( Given-When-Then / patrón1 ). 

• Por otra parte, se utilizaron librerías adicionales ubicadas en la ruta C:\cypress\cypress\e2e\ghost\pages para aislar la lógica de las rutinas (  PageObjects - patrón2 )

# Configuración de pruebas con Kraken

•	El software kraken fue instalado de manera local en un PC Windows en un carpeta c:\kraken

•	Primero se crea el directorio: md c:\kraken

•	Se requiere tener instalado node.js versión v20.18.0 que incorpora npm (Node Package Manager), que es una herramienta fundamental dentro del ecosistema de Node.js.

•	Dentro de la carpeta c:\ se instaló krakencon el comando:

 	npm install kraken-node 
  
•	También se instaló otro software appium requerido:

	npm install -g appium
 
•	Por último, se descargó el software de Apache: sdk-repo-windows-platform-tools.zip que trae el comando adb.exe, requerido por kraken, y se dejó disponible en una ruta configurada en el PATH del PC.

•	Dentro del directorio c:\kraken se crearon a mano 20 directorios llamados Escenario1 .. hasta Escenario20 : md c:\kraken\EscenarioX

•	En cada uno de estos directorios se ejecutó el comando “gen” para inicializar cada proyecto:

	cd c:\EscenarioX
 
	node C:\kraken\node_modules\kraken-node\bin\kraken-node gen
 
•	Los archivos de cada proyecto quedan a nivel de C:\kraken\EscenarioX empezando por su archivo de propiedades properties.json que se creó para cada proyecto

•	El primer script  “EscenarioX.feature” se ubica en la carpeta

	C:\kraken\EscenarioX\features
 
•	Los archivos de steps del kraken se ubican en:

	C:\kraken\EscenarioX\features\web\step_definitions\stepsEscenarioX.js
 
•	Se creó para cada escenario un directorio para ubicar las librerías construidas en cada escenario: 

	C:\kraken\EscenarioX\features\web\step_definitions\pageObjects

 ## Ejecutar casos en Kraken
 
•	Finalmente, para ejecutar un script particular, se ubica en el directorio respectivo y se ejecuta el comando “run”:

	cd c:\kraken\EscenarioX
 
	node C:\kraken\node_modules\kraken-node\bin\kraken-node run

•	El anterior comando ejecuta todo el proceso de la prueba y al final termina nuevamente con el prompt en c:\kraken\EscenarioX

•	Los resultados y pantallas quedan a nivel de c:\kraken\EscenatioX\pantallas y c:\kraken\EscenatioX\reportes

•	Los escenarios de prueba construidos con kraken utilizan los dos patrones vistos. 

•	Loa anterior se puede comprobar revisando el código de los scripts en c:\kraken\EscenarioX\features\EscenarioX.feature ( Given-When-Then / patrón1 ). 

•	Por otra parte, se utilizaron librerías adicionales ubicadas en la ruta C:\kraken\EscenarioX\features\web\step_definitions\pageObjects  (  PageObjects - patrón2 )








