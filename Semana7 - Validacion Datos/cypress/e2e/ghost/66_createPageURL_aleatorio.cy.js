// Page con URL en propiedades - 6 frases 
import PagePage from './pages/PagePage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('66. Page con URL en propiedades - 6 frases', function() 
{
  it('66. Page con URL en propiedades - 6 frases', function() 
  { 
    cy.log('66. Page con URL en propiedades - 6 frases');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin(); 
    cy.wait(4000)

    // Navegacion a Página de Pages
    pagePage.visitPage();
    cy.wait(4000)
   
    // Titulo de la Page = Numérico FAKER
    let titleNumerico = (faker.string.alphanumeric({ length: { min: 10, max: 12 } }));

    // Incrusta sample de 8 frases como parte del contenido
    pagePage.writePageData(titleNumerico , faker.lorem.sentences(6) ); 

    /// Adiciona ===> URL <=== en propiedades del post 
    pagePage.addURLPage(faker.internet.url())
    cy.wait(3000)
    pagePage.clickButtons() 

    // Regreso a página de Pages

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(titleNumerico)
    })

    cy.log('66. Page con URL en propiedades - 6 frases');  
  })
})
