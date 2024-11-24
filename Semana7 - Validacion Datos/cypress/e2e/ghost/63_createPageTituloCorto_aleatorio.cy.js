// Page con titulo corto aleatorio - sample 50 en texto

import PagePage from './pages/PagePage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('63. Page con titulo corto aleatorio', function() 
{   
  it('63. Page con titulo corto aleatorio', function() 
  { 
    cy.log('63. Page con titulo corto aleatorio');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();

    // Navegacion a Página de Posts
    pagePage.visitPage();
   
    // Titulo del Page = Fecha FAKER
    let titleCorto = (faker.lorem.word());

    // Incrusta sample de 50 caracteres como parte del contenido
    pagePage.writePageData(titleCorto , faker.string.sample(50) ); 

    pagePage.clickButtons();  

    // Regreso a página de Pages

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPage)
    })

    cy.log('Termina 63. Page con titulo corto aleatorio');  
  })
})
