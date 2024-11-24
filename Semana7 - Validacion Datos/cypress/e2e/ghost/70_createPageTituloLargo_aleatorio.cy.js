// Page con titulo largo aleatorio - sample 500 en texto

import PagePage from './pages/PagePage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('70. Page con titulo largo aleatorio', function() 
{   
  it('70. Page con titulo largo aleatorio', function() 
  { 
    cy.log('70. Page con titulo largo aleatorio');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();

    // Navegacion a Página de Posts
    pagePage.visitPage();
   
    // Titulo del Page = Fecha FAKER
    let titleLargo = (faker.lorem.word());

    // Incrusta sample de 500 caracteres como parte del contenido
    pagePage.writePageData(titleLargo , faker.string.sample(500) ); 

    pagePage.clickButtons();  

    // Regreso a página de Pages

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPage)
    })

    cy.log('Termina 63. Page con titulo corto aleatorio');  
  })
})
