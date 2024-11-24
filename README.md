# Grupo 17

# Integrantes
Fabian Gonzalo Díaz Ángel (f.diaza@uniandes.edu.co)

Edgar Humberto Rodríguez Roa (eh.rodriguez20@uniandes.edu.co)

Brandon Olivio Torres Sánchez (bo.torres@uniandes.edu.co)

# Configuración de pruebas con CYPRESS para Semana 7 - Validación de datos

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

• El repositorio GIT de la semana 7 debe descargarse de la carpeta "Semana7 - Validacion de datos" e instalarse en c:\cypress dejando los archivos de pruebas, datos y paginas a nivel de C:\cypress\cypress\e2e\ghost

El login y password del administrador debe modificarse en un único archivo loginPage.js ubicado en la carpera C:\cypress\cypress\e2e\ghost\datos en la rutina loginAsAdmin()

  loginAsAdmin() {
  
    this.visit();
    
    this.login('usuario@orreo.xx', 'password'); // Cambia por las credenciales del administrador
    
  }

## Instalación de FAKER

Se realiza desde una ventana de comando en el directorio del proyecto c;\cypress ejecutando el siguiente comando 

npm install @faker-js/faker --save-dev
  
## Ejecutar casos en Cypress

• Subir Cypress con el siguente comando desde c:\cypress

node .\node_modules\cypress\bin\cypress open

• Se escoge la opción E2E Testing y se escoge el browser Chome + Start E2E Testing in Chrome.

• Los casos de prueba se colocan en la carpete C:\cypress\cypress\e2e y, para nuestro caso, decidimos crear una subcarpeta llamada "ghost" : C:\cypress\cypress\e2e\ghost

• La ejecución de cada script se hace a través de la herramienta gráfica ( Dashboard ) con un simple click sobre cada uno de los escenarios ( NN_NOMBRE_TIPO.cy ) donde:

      NN toma valores entre 01 y 120

      NOMBRE indica la naturaleza de la Prueba que se implementa

      TIPO puede ser aleatorio, apriori o pseudo 

• Los 120 escenarios de prueba se ejecutan con un simple click dentro de Cypress. Cada prueba tiene su número al comienzo y su nombre indica si es de tipo aleatorio ( Faker ) , apriori ( datapools construido con Mockaroo ) o pseudo ( datos generados dinámicamente por Mockaroo ).

Ejemplo: 10_createPost_aleatorio.cy     ... se trata de la prueba número 10 que corresponde a la Creación de un Post con datos aleatorios ( Faker )

• Por otra parte, se utilizaron librerías adicionales ubicadas en la ruta C:\cypress\cypress\e2e\ghost\pages para aislar la lógica de las rutinas 

• Una vez descargados, los datapool ( apriori ) utilizados para todas las pruebas apriori fueron construidos en mockaroo y se encuentran en la carpeta C:\cypress\cypress\e2e\ghost\datos

21/11/2024  06:22 p. m.            27.516 MOCK_DATA_LARGA.json

23/11/2024  01:06 a. m.            68.703 MOCK_DATA_MEMBERS.json

21/11/2024  08:40 p. m.                84 MOCK_DATA_ORDER1.json

21/11/2024  08:52 p. m.               169 MOCK_DATA_ORDER2.json

23/11/2024  10:42 a. m.               138 MOCK_DATA_ORDER3.json

21/11/2024  07:16 p. m.            45.265 MOCK_DATA_PAGE1.json

21/11/2024  07:42 p. m.            17.000 MOCK_DATA_PAGE2.json

21/11/2024  07:48 p. m.           170.894 MOCK_DATA_PAGE3.json

21/11/2024  07:16 p. m.            45.265 MOCK_DATA_POST1.json

21/11/2024  07:42 p. m.            17.000 MOCK_DATA_POST2.json

21/11/2024  07:48 p. m.           170.894 MOCK_DATA_POST3.json

23/11/2024  03:43 p. m.           947.962 MOCK_DATA_TAGS.json

21/11/2024  08:12 p. m.           130.882 MOCK_DATA_URL.json

21/11/2024  07:40 a. m.            12.401 MOCK_DATA_USER_PASSWORD.json


• Los mencionados archivos se utilizan principalmente para operaciones sobre Login. Pages. Posts, Tags y Members y fueron cosntruidos directamente sobre Mockaroo y grabados tanto en formato datappol ( local )
  como en formato URL de Schema  ( Consulta dinámica vía URL utilizado en las pruebas pseudo ).








