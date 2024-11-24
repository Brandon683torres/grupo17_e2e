// Crea Page con datos del datapool luego modifica contenido con base en datapool

import PagePage from './pages/PagePage';
import LoginPage from './pages/loginPage';

describe('72. Crea Page con datos del datapool luego modifica contenido con base en datapool', function() 
{   
  it('72. Crea Page con datos del datapool luego modifica contenido con base en datapool', function() 
  { 

    const DatosPage     = require("./datos/MOCK_DATA_PAGE1.json");
    var tuplaAleatoria1 = DatosPage[Math.floor(Math.random() * DatosPage.length)];
        
    let tituloPage      = tuplaAleatoria1["titulo"]
    let contenidoPage1  = tuplaAleatoria1["contenido"]

    var tuplaAleatoria2 = DatosPage[Math.floor(Math.random() * DatosPage.length)];
    let contenidoPage2  = tuplaAleatoria2["contenido"]

    cy.log('72. Crea Post con datos aleatorios, luego modifica contenido con datapool');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();

    // Navegacion a Página de Pages
    pagePage.visitPage();
   
    // Incrusta Data como parte del contenido
    pagePage.writePageData(tituloPage, contenidoPage1); 

    pagePage.clickButtons();  
    cy.wait(2000);

    // Regreso a página de Pages y reescritura con datapool 

    pagePage.selectPageInsertada(tituloPage)
    pagePage.writePageDataEdit(tituloPage, contenidoPage2);
    pagePage.clickButtons();  

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPage)
    })

    cy.log('72. Crea Page con datos del datapool luego modifica contenido con base en datapool');  
  })
})
