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

# Pruebas incidencias en JIRA - Semana 8

https://uniandes-team-coco.atlassian.net/jira/software/c/projects/GHOSTANDES/issues?jql=project%20%3D%20%22GHOSTANDES%22%20ORDER%20BY%20created%20DESC

# Nuevos casos de Prueba Desarrollados y Automatizados Cypress ( Sprint 1 - Semana 1 ) - Semana 8

Distribuimos la carga de los tres integrantes del grupo y se desarrollaron 30 casos de pruebas según lo planteado en el documento de estrategia ( 10 / persona )

01 Escenario POST - Registro de elemento.cy.js

02 Escenario POST - Actualización de registro creado en prueba 01.cy.js

03 Escenario POST - Eliminación definitiva de POST anterior creado en prueba 01.cy.js

04 Escenario POST - Inclusion Edicion Combinada.cy.js

05 Escenario POST - Crear Post Adicionandole URL.cy.js

06 Escenario POST - Ordenamiento según Parámetro.cy.js

07 Escenario POST - Inclusión de POST + Excerpt en Propiedades.cy.js

08 Escenario POST - Inclusión de Contenido Calculado.cy.js

09 Escenario POST - Schedule de POST - después de correr Escenario 01.cy.js

09 Escenario POST - Schedule de POST.cy.js

10 Escenario POST - Titulo demasiado Grande elimina boton Publish.cy.js

11 Escenario MEMBERS  Generacion Nuevo Miembro.cy.js

12 Escenario MEMBERS BorrarMiembro.cy.js

13 Escenario MEMBERS Actualizar Datos Miembro.cy.js

14 Escenario MEMBERS  Exportar Archivo Miembros.cy.js

15 Escenario MEMBERS Buscar Miembro Existente.cy.js

16 Escenario MEMBERS Generacion Nuevo Miembro Negativo.cy.js

17 Escenario MEMBERS Borrar Cualquier Miembro.cy.js

18 Escenario MEMBERS  Actualizar Miembro Borde.cy.js

19 Escenario MEMBERS Ggeneracion Correo Negativo.cy.js

20 Escenario MEMBERS - Filtrar Nombre Miembro.cy.js

21 Escenario TAG - Crear Tag primero descripción y nombre.cy.js

22 Escenario TAG - Crea un tag con color válido y nombre no válido.cy.js

23 Escenario TAG - Crea un tag con nombre válido y slug invalido.cy

24 Escenario TAG - Modificar Tag.cy.js

25 Escenario TAG - Validación de datos con datos inválidos.cy.js

26 Escenario TAG - Buscar Tag.cy.js

27 Escenario TAG - Crear Tag sin campos del color.cy.js

28 Escenario TAG -Texto Largo en el nombre del Tag.cy.js

29 Escenario TAG -Crear un tag con solo el nombre.cy.js

30 Escenario TAG - Crear Tag con invalida descripción.cy.js







