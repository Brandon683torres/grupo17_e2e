// Post con excerpt - 2 sentencias
import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('14. Post con excerpt - 2 sentencias', function() 
{
  it('14. Post con excerpt - 2 sentencias', function() 
  { 
    cy.log('14. Post con excerpt - 2 sentencias');

    // Object Post para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  

    // Navegacion a Página de Posts
    postPage.visitPost();
   
    // Titulo del Post = Numérico FAKER
    let titleNumerico = (faker.string.alphanumeric({ length: { min: 10, max: 12 } }));

    // Incrusta sample de 8 frases como parte del contenido
    postPage.writePostData(titleNumerico , faker.lorem.sentences(8) ); 

    /// Adiciona -----> EXCERPT <--------- en propiedades del post 2 sentencias
    postPage.addExcerptPost(faker.lorem.sentences(2))
    cy.wait(3000)
    postPage.clickButtons() 

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(titleNumerico)
    })

    cy.log('Termina 14. Post con excerpt - 2 sentencias');  
  })
})
