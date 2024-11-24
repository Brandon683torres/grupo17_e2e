// Post con titulo numerico - contenido 20 sentencias
import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('13. Post con titulo numerico - contenido 20 sentencias', function() 
{
  it('12. Post con titulo numerico - contenido 20 sentencias', function() 
  { 
    cy.log('13. Post con titulo numerico - contenido 20 sentencias');

    // Object Post para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();

    // Navegacion a Página de Posts
    postPage.visitPost();
   
    // Titulo del Post = Numérico FAKER
    let titleNumerico = (faker.number.int({ min: 1000000 }));

    // Incrusta sample de 50 sentencias como parte del contenido
    postPage.writePostData(titleNumerico , faker.lorem.sentences(20) ); 

    postPage.clickButtons();  

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(titleNumerico)
    })

    cy.log('Termina 13. Post con titulo numerico - contenido 20 sentencias');  
  })
})
