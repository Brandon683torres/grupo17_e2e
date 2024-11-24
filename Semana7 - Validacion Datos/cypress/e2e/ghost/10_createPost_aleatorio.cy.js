// Crea Post con llave de 5 letras y al menos 2 líneas de texto

import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('10. Crea Post con llave de 5 letras y al menos 2 líneas de texto', function() 
{   
  it('10. Crea Post con llave de 5 letras y al menos 2 líneas de texto', function() 
  { 
    cy.log('Inicia 10 - Create Post');

    // Object Post para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();

    // Navegacion a Página de Posts
    postPage.visitPost();
   
    // Titulo del Post 5 caracteres - contenido entre 2 y 3 lineas
    const tituloPost = faker.string.alphanumeric(5)
    postPage.writePostData(tituloPost, faker.lorem.paragraph({ min: 2, max: 3 })); 

    postPage.clickButtons();  

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPost)
    })

    cy.log('Termina 10. Crea Post con llave de 5 letras y al menos 2 líneas de texto');  
  })
})
