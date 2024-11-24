// Page con titulo largo pseudo - sample 500 en texto

import PagePage from './pages/PagePage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('80. Page con titulo largo pseudo', function() 
{   
  it('80. Page con titulo largo pseudo', function() 
  { 
    cy.log('80. Page con titulo largo aleatorio');

    const DatosPage     = require("./datos/MOCK_DATA_PAGE3.json");
    var tuplaAleatoria1 = DatosPage[Math.floor(Math.random() * DatosPage.length)];

    let titulo    = tuplaAleatoria1["titulo"]                
    let contenido = tuplaAleatoria1["contenido"]   

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();

    // Navegacion a Página de Posts
    pagePage.visitPage();
   
    pagePage.writePageData(titulo , contenido ); 

    pagePage.clickButtons();  

    // Regreso a página de Pages

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPage)
    })

    cy.log('80. Page con titulo largo pseudo');  
  })
})
