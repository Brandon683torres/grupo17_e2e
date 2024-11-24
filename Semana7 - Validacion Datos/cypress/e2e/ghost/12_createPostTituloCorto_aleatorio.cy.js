// Post con titulo corto aleatorio - sample 50 en texto

import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('12. Post con titulo corto aleatorio', function() 
{   
  it('12. Post con titulo corto aleatorio', function() 
  { 
    cy.log('12. Post con titulo corto aleatorio');

    // Object Post para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin(); 

    // Navegacion a Página de Posts
    postPage.visitPost();
   
    // Titulo del Post = Fecha FAKER
    let titleCorto = (faker.lorem.word());

    // Incrusta sample de 50 caracteres como parte del contenido
    postPage.writePostData(titleCorto , faker.string.sample(50) ); 

    postPage.clickButtons();  

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPost)
    })

    cy.log('Termina 12. Post con titulo corto aleatorio');  
  })
})
