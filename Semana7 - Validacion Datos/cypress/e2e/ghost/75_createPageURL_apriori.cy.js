// Page con URL en propiedades - datapool
import PagePage from './pages/PagePage';
import LoginPage from './pages/loginPage';

describe('75. Page con URL en propiedades - datapool', function() 
{
  it('75. Page con URL en propiedades - datapool', function() 
  { 

    const DatosPage     = require("./datos/MOCK_DATA_PAGE1.json");
    var tuplaAleatoria1 = DatosPage[Math.floor(Math.random() * DatosPage.length)];
        
    let tituloNumerico  = tuplaAleatoria1["titulo"]                
    let contenidoFrases = tuplaAleatoria1["contenido"]     

    const DatosURL      = require("./datos/MOCK_DATA_URL.json");       

    var aleatorioURL  = DatosURL[Math.floor(Math.random() * DatosURL.length)];
    let contenidoURL  = aleatorioURL["url"]

    cy.log('75. Page con URL en propiedades - datapool');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();   
    cy.wait(2000);

    // Navegacion a Página de Pages
    pagePage.visitPage();
   
    // Incrusta sample de 8 frases como parte del contenido
    pagePage.writePageData(tituloNumerico , contenidoFrases ); 

    /// Adiciona ===> URL <=== en propiedades de la page
    pagePage.addURLPage(contenidoURL)
    cy.wait(3000)
    pagePage.clickButtons() 

    // Regreso a página de Pages

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloNumerico)
    })

    cy.log('75. Page con URL en propiedades - datapool');  
  })
})
