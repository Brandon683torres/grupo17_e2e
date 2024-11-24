// Inserta Imagen como contenido del Page

import PagePage from './pages/PagePage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('69. Inserta Imagen como contenido del Page', function() 
{   
  it('69. Inserta Imagen como contenido del Page', function() 
  { 
    cy.log('69. Inserta Imagen como contenido del Page');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin(); 

    // Navegacion a Página de Pages
    pagePage.visitPage();
   
    // Titulo del Page = Fecha FAKER
    const tituloPage = faker.string.alpha({ length: 5, casing: 'upper', exclude: ['A'] }) 

    // Incrusta Imagen como parte del contenido
    pagePage.writePageData(tituloPage, faker.image.avatar()); 

    pagePage.clickButtons();  

    // Regreso a página de Pages

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPage)
    })

    cy.log('Termina 61. Inserta Imagen como contenido del Page');  
  })
})
