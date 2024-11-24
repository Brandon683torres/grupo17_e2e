// Crea y Edita Page pseudo - mockaroo

import PagePage from './pages/PagePage';
import LoginPage from './pages/loginPage';

describe('82. Crea y Edita Page pseudo - mockaroo', function() 
{   
  it('82. Crea y Edita Page pseudo - mockaroo', function() 
  { 

    cy.log('82. Crea y Edita Page pseuso - mockaroo');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  
    cy.wait(2000);

    // Navegacion a Página de Pages
    pagePage.visitPage();

    const url = 'https://my.api.mockaroo.com/post_page.json?key=36a0a2c0';  // URL de la API MOCKAROO

    let inicial = ''
    cy.request(url).then((response) => 
    {     
      const datosRecibidos = response.body;                // Obtiene datos del API online
      Cypress.env('mockarooData', datosRecibidos);         // Asignarlos a una variable global

      var tupla = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];
        
      const tituloPage    = tupla["titulo"]
      inicial = tituloPage
      const contenidoPage1 = tupla["contenido"]

      var tupla2 = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];
      const contenidoPage2 = tupla["contenido"]

      pagePage.writePageData(tituloPage , contenidoPage1); 
      cy.wait(2000);
      pagePage.clickButtons();  

     // Regreso a página de Pages y reescritura con dato Mockaroo

     pagePage.selectPageInsertada(tituloPage)
     pagePage.writePageDataEdit(tituloPage, contenidoPage2);

     pagePage.clickButtons();    
    });
   
    cy.log('82. Crea y Edita Page pseudo - mockaroo');  
  })
})
