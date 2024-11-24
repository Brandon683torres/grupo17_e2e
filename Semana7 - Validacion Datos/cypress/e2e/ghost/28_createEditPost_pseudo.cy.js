// Edita Post con datos de API Mockaroo - pseudo

import PostPage from './pages/PostPage';
import LoginPage from './pages/loginPage';

describe('28. Edita Post con datos de API Mockaroo - pseudo', function() 
{   
  it('28. Edita Post con datos de API Mockaroo - pseudo', function() 
  { 
    // Object Page para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  
    cy.wait(2000);

    // Navegacion a Página de Posts
    postPage.visitPost();
   
    const url = 'https://my.api.mockaroo.com/post_page.json?key=36a0a2c0';  // URL de la API MOCKAROO
    cy.request(url).then((response) => 
    {     
      const datosRecibidos = response.body;                // Obtiene datos del API online
      Cypress.env('mockarooData', datosRecibidos);         // Asignarlos a una variable global

      var tupla = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];
        
      const tituloPost    = tupla["titulo"]
      const contenidoPost = tupla["contenido"]
      postPage.writePostData(tituloPost , contenidoPost); 
      postPage.clickButtons();  
      cy.wait(2000);

      var tupla2 = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];
      const contenidoPost2 = tupla["contenido"]

      // Regreso a página de Posts y reescritura con datapool 

      postPage.selectPostInsertado(tituloPost)
      postPage.writePostDataEdit(tituloPost, contenidoPost2);
      postPage.clickButtons(); 
     });

    cy.log('28. Edita Post con datos de API Mockaroo - pseudo');  
    })
})
