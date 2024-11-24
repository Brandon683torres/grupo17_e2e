// Crea Post con datos aleatorios, luego modifica contenido aleatoriamente

import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('11. Crea Post con datos aleatorios, luego modifica contenido aleatoriamente', function() 
{   
  it('11. Crea Post con datos aleatorios, luego modifica contenido aleatoriamente', function() 
  { 
    cy.log('11. Crea Post con datos aleatorios, luego modifica contenido aleatoriamente');

    // Object Post para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin(); 

    // Navegacion a Página de Posts
    postPage.visitPost();
   
    // Titulo del Post = Dato FAKER
    const tituloPost = faker.string.alpha(10)

    // Incrusta Data como parte del contenido
    postPage.writePostData(tituloPost, faker.string.alpha(50)); 

    postPage.clickButtons();  

    // Regreso a página de Posts y reescritura aleatoria con alpha más grande

    postPage.selectPostInsertado(tituloPost)
    postPage.writePostDataEdit(tituloPost, faker.string.alpha(100));
    postPage.clickButtons();  

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPost)
    })

    cy.log('Termina 11. Crea Post con datos aleatorios, luego modifica contenido aleatoriamente');  
  })
})
