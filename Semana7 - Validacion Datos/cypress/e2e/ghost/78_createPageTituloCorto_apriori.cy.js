// Page con titulo corto datapool - sample 50 en texto

import PagePage from './pages/PagePage';
import LoginPage from './pages/loginPage';

describe('78. Page con titulo corto datapool - sample 50 en texto', function() 
{   
  it('78. Page con titulo corto datapool - sample 50 en texto', function() 
  { 

    const DatosPage     = require("./datos/MOCK_DATA_PAGE2.json");
    var tuplaAleatoria1 = DatosPage[Math.floor(Math.random() *DatosPage.length)];
        
    let tituloCorto     = tuplaAleatoria1["titulo"]                // Expresion Regular \w{5}
    let contenido       = tuplaAleatoria1["contenido"]             // Expresion Regular \w{50}

    cy.log('78. Post con titulo corto aleatorio');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  

    // Navegacion a Página de Posts
    pagePage.visitPage();
   
    // Incrusta sample de 50 caracteres como parte del contenido
    pagePage.writePageData(tituloCorto , contenido ); 

    pagePage.clickButtons();  

    // Regreso a página de Pages

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloCorto)
    })

    cy.log('78. Page con titulo corto datapool - sample 50 en texto');  
  })
})
