// Post con URL en propiedades - 6 frases 
import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('15. Post con URL en propiedades - 6 frases', function() 
{
  it('15. Post con URL en propiedades - 6 frases', function() 
  { 
    cy.log('15. Post con URL en propiedades - 6 frases');

    // Object Post para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin(); 
    cy.wait(4000)

    // Navegacion a Página de Posts
    postPage.visitPost();
    cy.wait(4000)
   
    // Titulo del Post = Numérico FAKER
    let titleNumerico = (faker.string.alphanumeric({ length: { min: 10, max: 12 } }));

    // Incrusta sample de 8 frases como parte del contenido
    postPage.writePostData(titleNumerico , faker.lorem.sentences(6) ); 

    /// Adiciona ===> URL <=== en propiedades del post 
    postPage.addURLPost(faker.internet.url())
    cy.wait(3000)
    postPage.clickButtons() 

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(titleNumerico)
    })

    cy.log('Termina 15. Post con URL en propiedades - 6 frases');  
  })
})
