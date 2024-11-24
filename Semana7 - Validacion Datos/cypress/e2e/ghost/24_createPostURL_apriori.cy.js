// Post con URL en propiedades - datapool
import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('24. Post con URL en propiedades - datapool', function() 
{
  it('24. Post con URL en propiedades - datapool', function() 
  { 

    const DatosPost     = require("./datos/MOCK_DATA_POST1.json");
    var tuplaAleatoria1 = DatosPost[Math.floor(Math.random() * DatosPost.length)];
        
    let tituloNumerico  = tuplaAleatoria1["titulo"]                
    let contenidoFrases = tuplaAleatoria1["contenido"]     

    const DatosURL      = require("./datos/MOCK_DATA_URL.json");       

    var aleatorioURL  = DatosURL[Math.floor(Math.random() * DatosURL.length)];
    let contenidoURL  = aleatorioURL["url"]

    cy.log('24. Post con URL en propiedades - datapool');

    // Object Page para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin(); 
    cy.wait(2000);

    // Navegacion a Página de Posts
    postPage.visitPost();
   
    // Incrusta sample de 8 frases como parte del contenido
    postPage.writePostData(tituloNumerico , contenidoFrases ); 

    /// Adiciona ===> URL <=== en propiedades del post 
    postPage.addURLPost(contenidoURL)
    cy.wait(3000)
    postPage.clickButtons() 

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(titleNumerico)
    })

    cy.log('24. Post con URL en propiedades - datapool');  
  })
})
