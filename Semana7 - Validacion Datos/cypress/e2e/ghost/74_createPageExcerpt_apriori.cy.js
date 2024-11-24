// Page con excerpt - sentencias tomadas de datapool
import PagePage from './pages/PagePage';
import LoginPage from './pages/loginPage';

describe('74. Page con excerpt - sentencias tomadas de datapool', function() 
{
  it('74. Page con excerpt - sentencias tomadas de datapool', function() 
  { 
    const DatosPage     = require("./datos/MOCK_DATA_PAGE3.json");
    var tuplaAleatoria1 = DatosPage[Math.floor(Math.random() * DatosPage.length)];
        
    let tituloNumerico    = tuplaAleatoria1["titulo"]                // Expresion Regular \w{5}
    let contenido20Frases = tuplaAleatoria1["contenido"]            

    var tuplaAleatoria2  = DatosPage[Math.floor(Math.random() * DatosPage.length)];
    let contenidoExcerpt = tuplaAleatoria2["contenido"].substr(0, 300);     // Acepta Maximo 300 caracteres

    cy.log('23. Page con excerpt - sentencias tomadas de datapool');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();   
    cy.wait(2000);

    // Navegacion a Página de Pages
    pagePage.visitPage();
    cy.wait(2000);
   
    // Incrusta sample de frases como parte del contenido
    pagePage.writePageData(tituloNumerico, contenido20Frases ); 

    /// Adiciona -----> EXCERPT <--------- en propiedades de la page varias sentencias
    pagePage.addExcerptPage(contenidoExcerpt)
    cy.wait(3000)
    pagePage.clickButtons() 

    // Regreso a página de Pages

    pagePage.visitPageList() 
    cy.wait(2000);

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloNumerico)
    })

    cy.log('74. Page con excerpt - sentencias tomadas de datapool');  
  })
})
