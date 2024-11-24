// Crea Post con datos del datapool luego modifica contenido con base en datapool

import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('20. Crea Post con datos del datapool luego modifica contenido con base en datapool', function() 
{   
  it('20. Crea Post con datos del datapool luego modifica contenido con base en datapool', function() 
  { 

    const DatosPost     = require("./datos/MOCK_DATA_POST1.json");
    var tuplaAleatoria1 = DatosPost[Math.floor(Math.random() * DatosPost.length)];
        
    let tituloPost      = tuplaAleatoria1["titulo"]
    let contenidoPost1  = tuplaAleatoria1["contenido"]

    var tuplaAleatoria2 = DatosPost[Math.floor(Math.random() * DatosPost.length)];
    let contenidoPost2  = tuplaAleatoria2["contenido"]

    cy.log('11. Crea Post con datos aleatorios, luego modifica contenido con datapool');

    // Object Page para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  
    cy.wait(2000);

    // Navegacion a Página de Posts
    postPage.visitPost();
   
    // Incrusta Data como parte del contenido
    postPage.writePostData(tituloPost, contenidoPost1); 

    postPage.clickButtons();  
    cy.wait(2000);

    // Regreso a página de Posts y reescritura con datapool 

    postPage.selectPostInsertado(tituloPost)
    postPage.writePostDataEdit(tituloPost, contenidoPost2);
    postPage.clickButtons();  

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPost)
    })

    cy.log('20. Crea Post con datos del datapool luego modifica contenido con base en datapool');  
  })
})
