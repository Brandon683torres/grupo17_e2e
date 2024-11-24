// Crea Post con llave de 5 letras y al menos 2 líneas de texto - datapool

import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('Crea Post con llave de 5 letras y al menos 2 líneas de texto - datapool', function() 
{   
  it('Crea Post con llave de 5 letras y al menos 2 líneas de texto - datapool', function() 
  { 
    cy.log('Inicia 18 - Crea Post con llave de 5 letras y al menos 2 líneas de texto - datapool');

    const DatosPost  = require("./datos/MOCK_DATA_POST1.json");
    var tuplaAleatoria = DatosPost[Math.floor(Math.random() * DatosPost.length)];
        
    let tituloPost    = tuplaAleatoria["titulo"]
    let contenidoPost = tuplaAleatoria["contenido"]

    // Object Post para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();

    // Navegacion a Página de Posts
    postPage.visitPost();
   
    // Titulo del Post 5 digitos - contenido entre 1 y 2 lineas
    postPage.writePostData(tituloPost, contenidoPost); 

    postPage.clickButtons();  

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPost)
    })

    cy.log('Inicia 18 - Crea Post con llave de 5 letras y al menos 2 líneas de texto - datapool');  
  })
})
