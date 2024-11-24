// Crea Page con datos aleatorios, luego modifica contenido aleatoriamente

import PagePage from './pages/PagePage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('62. Crea Page con datos aleatorios, luego modifica contenido aleatoriamente', function() 
{   
  it('62. Crea Page con datos aleatorios, luego modifica contenido aleatoriamente', function() 
  { 
    cy.log('62. Crea Page con datos aleatorios, luego modifica contenido aleatoriamente');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  

    // Navegacion a Página de Pages
    pagePage.visitPage();
   
    // Titulo de la Page = Dato FAKER
    const tituloPage = faker.string.alpha(10)

    // Incrusta Data como parte del contenido
    pagePage.writePageData(tituloPage, faker.string.alpha(50)); 

    pagePage.clickButtons();  

    // Regreso a página de Pages y reescritura aleatoria con alpha más grande

    pagePage.selectPageInsertada(tituloPage)
    pagePage.writePageDataEdit(tituloPage, faker.string.alpha(100));
    pagePage.clickButtons();  

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPage)
    })

    cy.log('Termina 62. Crea Page con datos aleatorios, luego modifica contenido aleatoriamente');  
  })
})
