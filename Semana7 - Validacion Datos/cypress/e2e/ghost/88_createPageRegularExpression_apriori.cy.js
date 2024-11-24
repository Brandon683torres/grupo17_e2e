// Crea Pages con Expressiones Regulares - faker

import PagePage from './pages/PagePage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('88. Crea Pages con Expressiones Regulares - faker', function() 
{   
  it('88. Crea Pages con Expressiones Regulares - faker', function() 
  { 
    cy.log('88. Crea Pages con Expressiones Regulares - faker');
       
    let tituloPage    = faker.helpers.fromRegExp('[a-d0-6]{2,15}') 
    let contenidoPage = faker.helpers.fromRegExp(/[A-Z]{40}/i)

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin(); 

    // Navegacion a Página de Pages
    pagePage.visitPage();
   
    pagePage.writePageData(tituloPage, contenidoPage); 

    pagePage.clickButtons();  

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPage)
    })

    cy.log('88. Crea Pages con Expressiones Regulares - faker');  
  })
})
