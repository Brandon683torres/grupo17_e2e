// Page con titulo largo pseudo desde mockraroo
import PagePage from './pages/PagePage';
import LoginPage from './pages/loginPage';

describe('90. Page con titulo largo pseudo desde mockraroo', function() 
{
  it('90. Page con titulo numerico pseudo desde mockraroo', function() 
  { 
    cy.log('90. Page con titulo numerico pseudo desde mockraroo');

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
        
      let tituloLargo    = tupla["titulo"]                
      let contenido      = tupla["contenido"]            

      pagePage.writePageData(tituloLargo, contenido ); 
      pagePage.clickButtons();  
 
    });

    cy.log('90. Page con titulo numerico pseudo desde mockraroo');  
  })
})
