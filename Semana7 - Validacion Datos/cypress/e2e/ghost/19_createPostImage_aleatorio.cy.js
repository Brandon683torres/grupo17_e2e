// Inserta Imagen como contenido del Post

import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('19. Inserta Imagen como contenido del Post', function() 
{   
  it('19. Inserta Imagen como contenido del Post', function() 
  { 
    cy.log('19. Inserta Imagen como contenido del Post');

    // Object Post para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();

    // Navegacion a Página de Posts
    postPage.visitPost();
   
    // Titulo del Post = Fecha FAKER
    const tituloPost = faker.string.alpha({ length: 5, casing: 'upper', exclude: ['A'] }) 

    // Incrusta Imagen como parte del contenido
    postPage.writePostData(tituloPost, faker.image.avatar()); 

    postPage.clickButtons();  

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPost)
    })

    cy.log('Termina 19. Inserta Imagen como contenido del Post');  
  })
})
