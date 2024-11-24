// Post con titulo corto datapool - sample 50 en texto

import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('21. Post con titulo corto datapool - sample 50 en texto', function() 
{   
  it('21. Post con titulo corto datapool - sample 50 en texto', function() 
  { 

    const DatosPost     = require("./datos/MOCK_DATA_POST2.json");
    var tuplaAleatoria1 = DatosPost[Math.floor(Math.random() * DatosPost.length)];
        
    let tituloCorto     = tuplaAleatoria1["titulo"]                // Expresion Regular \w{5}
    let contenido       = tuplaAleatoria1["contenido"]             // Expresion Regular \w{50}

    cy.log('12. Post con titulo corto aleatorio');

    // Object Page para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin(); 

    // Navegacion a Página de Posts
    postPage.visitPost();
   
    // Incrusta sample de 50 caracteres como parte del contenido
    postPage.writePostData(tituloCorto , contenido ); 

    postPage.clickButtons();  

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPost)
    })

    cy.log('21. Post con titulo corto datapool - sample 50 en texto');  
  })
})
