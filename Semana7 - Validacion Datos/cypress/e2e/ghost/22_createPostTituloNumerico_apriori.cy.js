// Post con titulo numerico - contenido 20 sentencias desde datapool
import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('22. Post con titulo numerico - contenido 20 sentencias desde datapool', function() 
{
  it('22. Post con titulo numerico - contenido 20 sentencias desde datapool', function() 
  { 

    const DatosPost     = require("./datos/MOCK_DATA_POST3.json");
    var tuplaAleatoria1 = DatosPost[Math.floor(Math.random() * DatosPost.length)];
        
    let tituloNumerico    = tuplaAleatoria1["titulo"]                // Expresion Regular \w{5}
    let contenido20Frases = tuplaAleatoria1["contenido"]             // 20 Frases

    cy.log('13. Post con titulo numerico - contenido 20 sentencias');

    // Object Page para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();

    // Navegacion a Página de Posts
    postPage.visitPost();
    cy.wait(2000);
   
    // Incrusta sample de 20 sentencias como parte del contenido
    postPage.writePostData(tituloNumerico, contenido20Frases ); 

    postPage.clickButtons();  

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloNumerico)
    })

    cy.log('22. Post con titulo numerico - contenido 20 sentencias desde datapool');  
  })
})
