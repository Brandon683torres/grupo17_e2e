// Page con excerpt - 2 sentencias
import PagePage from './pages/PagePage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('65. Page con excerpt - 2 sentencias', function() 
{
  it('65. Page con excerpt - 2 sentencias', function() 
  { 
    cy.log('65. Page con excerpt - 2 sentencias');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin(); 

    // Navegacion a Página de Posts
    pagePage.visitPage();
   
    // Titulo de la Page = Numérico FAKER
    let titleNumerico = (faker.string.alphanumeric({ length: { min: 10, max: 12 } }));

    // Incrusta sample de 8 frases como parte del contenido
    pagePage.writePageData(titleNumerico , faker.lorem.sentences(8) ); 

    /// Adiciona -----> EXCERPT <--------- en propiedades del post 2 sentencias
    pagePage.addExcerptPage(faker.lorem.sentences(2))
    cy.wait(3000)
    pagePage.clickButtons() 

    // Regreso a página de Pages

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(titleNumerico)
    })

    cy.log('Termina 65. Page con excerpt - 2 sentencias');  
  })
})
