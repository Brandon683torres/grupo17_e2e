// Page con titulo numerico - contenido 20 sentencias
import PagePage from './pages/PagePage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('64. Page con titulo numerico - contenido 20 sentencias', function() 
{
  it('64. Page con titulo numerico - contenido 20 sentencias', function() 
  { 
    cy.log('64. Post con titulo numerico - contenido 20 sentencias');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin(); 

    // Navegacion a Página de Posts
    pagePage.visitPage();
   
    // Titulo de la Page = Numérico FAKER
    let titleNumerico = (faker.number.int({ min: 1000000 }));

    // Incrusta sample de 50 sentencias como parte del contenido
    pagePage.writePageData(titleNumerico , faker.lorem.sentences(20) ); 

    pagePage.clickButtons();  

    // Regreso a página de Pages

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(titleNumerico)
    })

    cy.log('Termina 64. Post con titulo numerico - contenido 20 sentencias');  
  })
})
