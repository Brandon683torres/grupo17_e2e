// Page con titulo numerico - contenido 20 sentencias desde datapool
import PagePage from './pages/PagePage';
import LoginPage from './pages/loginPage';

describe('73. Page con titulo numerico - contenido 20 sentencias desde datapool', function() 
{
  it('73. Page con titulo numerico - contenido 20 sentencias desde datapool', function() 
  { 

    const DatosPage     = require("./datos/MOCK_DATA_PAGE3.json");
    var tuplaAleatoria1 = DatosPage[Math.floor(Math.random() * DatosPage.length)];
        
    let tituloNumerico    = tuplaAleatoria1["titulo"]                // Expresion Regular \w{5}
    let contenido20Frases = tuplaAleatoria1["contenido"]             // 20 Frases

    cy.log('73. Page con titulo numerico - contenido 20 sentencias desde datapool');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  
    cy.wait(2000);

    // Navegacion a Página de Paginas
    pagePage.visitPage();
    cy.wait(2000);
   
    // Incrusta sample de 20 sentencias como parte del contenido
    pagePage.writePageData(tituloNumerico, contenido20Frases ); 

    pagePage.clickButtons();  

    // Regreso a página de Pages

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloNumerico)
    })

    cy.log('73. Page con titulo numerico - contenido 20 sentencias desde datapool');  
  })
})
