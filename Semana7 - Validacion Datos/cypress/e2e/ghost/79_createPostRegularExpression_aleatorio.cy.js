// Crea Post con Expresiones Regulares - faker

import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('79. Crea Post con Expresiones Regulares - faker', function() 
{   
  it('79. Crea Post con Expresiones Regulares - faker', function() 
  { 
    cy.log('79. Crea Post con Expresiones Regulares - faker');

    // Object Post para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();

    // Navegacion a Página de Posts
    postPage.visitPost();
   
    const tituloPost = faker.helpers.fromRegExp('[a-d0-6]{2,8}') 
    postPage.writePostData(tituloPost, faker.helpers.fromRegExp(/[A-Z]{40}/i)); 

    postPage.clickButtons();  

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPost)
    })

    cy.log('79. Crea Post con Expresiones Regulares - faker');  
  })
})
