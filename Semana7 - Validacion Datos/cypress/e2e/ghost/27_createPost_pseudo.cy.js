// Crea Post con datos de API Mockaroo - pseudo

import PostPage from './pages/PostPage';
import LoginPage from './pages/loginPage';

describe('Crea Post con datos de API Mockaroo - pseudo', function() 
{   
  it('27. Crea Post con datos de API Mockaroo - pseudo', function() 
  { 
    cy.log('Inicia 27 - Crea Post con datos de API Mockaroo - pseudo');

    // Object Page para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();

    // Navegacion a Página de Posts
    postPage.visitPost();

    // Llamado API Mockaroo

    const url = 'https://my.api.mockaroo.com/post_page.json?key=36a0a2c0';  // URL de la API MOCKAROO
    cy.request(url).then((response) => 
    {     
      const datosRecibidos = response.body;                // Obtiene datos del API online
      Cypress.env('mockarooData', datosRecibidos);         // Asignarlos a una variable global

      var tupla = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];
        
      const tituloPost    = tupla["titulo"]
      const contenidoPost = tupla["contenido"]
      postPage.writePostData(tituloPost , contenidoPost); 
     });
   
    postPage.clickButtons();  

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPost)
    })

    cy.log('Termina 27. Crea Post con datos de API Mockaroo - pseudo');  
  })
})
