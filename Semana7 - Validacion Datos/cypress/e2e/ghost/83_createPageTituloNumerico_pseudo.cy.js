// Page con titulo numerico pseudo - contenido 20 sentencias desde mockraroo
import PagePage from './pages/PagePage';
import LoginPage from './pages/loginPage';

describe('83. Page con titulo numerico pseudo - contenido 20 sentencias desde mockraroo', function() 
{
  it('83. Page con titulo numerico pseudo - contenido 20 sentencias desde mockraroo', function() 
  { 
    cy.log('83. Page con titulo numerico pseudo - contenido 20 sentencias desde mockraroo');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();   
    cy.wait(2000);

    // Navegacion a Página de Posts
    pagePage.visitPage();
    cy.wait(2000);

    const url = 'https://api.mockaroo.com/api/26e08f00?key=36a0a2c0';  // URL de la API MOCKAROO

    let inicial = ''
    cy.request(url).then((response) => 
    {     
      const datosRecibidos = response.body;                // Obtiene datos del API online
      Cypress.env('mockarooData', datosRecibidos);         // Asignarlos a una variable global

      var tupla = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];
        
      let tituloNumerico    = tupla["titulo"]                // Expresion Regular \w{5}
      let contenido20Frases = tupla["contenido"]             // 20 Frases

      // Incrusta sample de 20 sentencias como parte del contenido
      pagePage.writePageData(tituloNumerico, contenido20Frases ); 

      pagePage.clickButtons();  
 
    });

    cy.log('83. Page con titulo numerico pseudo - contenido 20 sentencias desde mockraroo');  
  })
})
