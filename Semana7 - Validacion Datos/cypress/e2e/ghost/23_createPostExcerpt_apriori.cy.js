// Post con excerpt - sentencias tomadas de datapool
import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('23. Post con excerpt - sentencias tomadas de datapool', function() 
{
  it('23. Post con excerpt - sentencias', function() 
  { 
    const DatosPost     = require("./datos/MOCK_DATA_POST3.json");
    var tuplaAleatoria1 = DatosPost[Math.floor(Math.random() * DatosPost.length)];
        
    let tituloNumerico    = tuplaAleatoria1["titulo"]                // Expresion Regular \w{5}
    let contenido20Frases = tuplaAleatoria1["contenido"]            

    var tuplaAleatoria2  = DatosPost[Math.floor(Math.random() * DatosPost.length)];
    let contenidoExcerpt = tuplaAleatoria2["contenido"].substr(0, 300);     // Acepta Maximo 300 caracteres

    cy.log('23. Post con excerpt - sentencias tomadas de datapool');

    // Object Page para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();
    cy.wait(2000);

    // Navegacion a Página de Posts
    postPage.visitPost();
    cy.wait(2000);
   
    // Incrusta sample de 8 frases como parte del contenido
    postPage.writePostData(tituloNumerico, contenido20Frases ); 

    /// Adiciona -----> EXCERPT <--------- en propiedades del post varias sentencias
    postPage.addExcerptPost(contenidoExcerpt)
    cy.wait(3000)
    postPage.clickButtons() 

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloNumerico)
    })

    cy.log('23. Post con excerpt - sentencias tomadas de datapool');  
  })
})
