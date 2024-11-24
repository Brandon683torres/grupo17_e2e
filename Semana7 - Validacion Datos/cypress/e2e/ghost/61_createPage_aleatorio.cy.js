// Crea Page con llave de 5 letras y al menos 2 líneas de texto

import PagePage from './pages/PagePage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('61. Crea Page con llave de 5 letras y al menos 2 líneas de texto', function() 
{   
  it('61. Crea Page con llave de 5 letras y al menos 2 líneas de texto', function() 
  { 
    cy.log('Inicia60 - Create Page');

    // Object Page para interacción
    const pagePage = new PagePage();
    cy.wait(2000);

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();

    // Navegacion a Página de Pages
    pagePage.visitPage();
   
    // Titulo de Page 5 caracteres - contenido entre 2 y 3 lineas
    const tituloPage = faker.string.alphanumeric(5)
    pagePage.writePageData(tituloPage, faker.lorem.paragraph({ min: 2, max: 3 })); 

    pagePage.clickButtons();  

    // Regreso a página de Pages

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPage)
    })

    cy.log('Termina 61. Crea Page con llave de 5 letras y al menos 2 líneas de texto');  
  })
})
