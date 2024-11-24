// Crea Page con datos de API Mockaroo - pseudo

import PagePage from './pages/PagePage';
import LoginPage from './pages/loginPage';

describe('81. Crea Page con datos de API Mockaroo - pseudo', function() 
{   
  it('81. Crea Page con datos de API Mockaroo - pseudo', function() 
  { 
    cy.log('81. Crea Page con datos de API Mockaroo - pseudo');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();   

    // Navegacion a Página de Posts
    pagePage.visitPage();

    // Llamado API Mockaroo

    const url = 'https://my.api.mockaroo.com/post_page.json?key=36a0a2c0';  // URL de la API MOCKAROO

    let inicial = ''
    cy.request(url).then((response) => 
    {     
      const datosRecibidos = response.body;                // Obtiene datos del API online
      Cypress.env('mockarooData', datosRecibidos);         // Asignarlos a una variable global

      var tupla = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];
        
      const tituloPage    = tupla["titulo"]
      inicial = tituloPage
      const contenidoPage = tupla["contenido"]
      pagePage.writePageData(tituloPage , contenidoPage); 
     });
   
    pagePage.clickButtons();  

    // Regreso a página de Pages

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(inicial)
    })

    cy.log('Termina 81. Crea Page con datos de API Mockaroo - pseudo');  
  })
})
