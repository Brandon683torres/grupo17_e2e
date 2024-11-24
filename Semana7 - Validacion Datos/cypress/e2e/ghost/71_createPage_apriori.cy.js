// Crea Pages con llave de 5 letras y al menos 2 líneas de texto - datapool

import PagePage from './pages/PagePage';
import LoginPage from './pages/loginPage';

describe('71. Crea Page con llave de 5 letras y al menos 2 líneas de texto - datapool', function() 
{   
  it('71. Crea Post con llave de 5 letras y al menos 2 líneas de texto - datapool', function() 
  { 
    cy.log('Inicia 71 - Crea Page con llave de 5 letras y al menos 2 líneas de texto - datapool');

    const DatosPage  = require("./datos/MOCK_DATA_PAGE1.json");
    var tuplaAleatoria = DatosPage[Math.floor(Math.random() * DatosPage.length)];
        
    let tituloPage    = tuplaAleatoria["titulo"]
    let contenidoPage = tuplaAleatoria["contenido"]

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin(); 

    // Navegacion a Página de Pages
    pagePage.visitPage();
   
    // Titulo de la Page 5 digitos - contenido entre 1 y 2 lineas
    pagePage.writePageData(tituloPage, contenidoPage); 

    pagePage.clickButtons();  

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPage)
    })

    cy.log('Inicia 18 - Crea Post con llave de 5 letras y al menos 2 líneas de texto - datapool');  
  })
})
