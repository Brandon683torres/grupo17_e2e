// Page con excerpt - pseudo desde mockaroo
import PagePage from './pages/PagePage';
import LoginPage from './pages/loginPage';

describe('84. Page con excerpt - pseudo desde mockaroo', function() 
{
  it('84. Page con excerpt - pseudo desde mockaroo', function() 
  { 

   cy.log('84. Page con excerpt - pseudo desde mockaroo');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  
    cy.wait(2000);

    // Navegacion a Página de Posts
    pagePage.visitPage();
    cy.wait(2000);

    const url = 'https://api.mockaroo.com/api/26e08f00?key=36a0a2c0';  // URL de la API MOCKAROO

    let inicial = ''
    cy.request(url).then((response) => 
    {     
      const datosRecibidos = response.body;                // Obtiene datos del API online
      Cypress.env('mockarooData', datosRecibidos);         // Asignarlos a una variable global

      var tupla = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];
        
      let tituloNumerico    = tupla["titulo"]                 // Expresion Regular \w{5}
      let contenido20Frases = tupla["contenido"]              // 20 Frases

      var tupla2 = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];
        
      let contenidoExcerpt = tupla["contenido"].substr(4, 300);                   

      // Incrusta sample de frases como parte del contenido
      pagePage.writePageData(tituloNumerico, contenido20Frases ); 

      /// Adiciona -----> EXCERPT <--------- en propiedades de la pagina varias sentencias
      pagePage.addExcerptPage(contenidoExcerpt)
      cy.wait(3000)
      pagePage.clickButtons() 

      // Regreso a página de Pages

      pagePage.visitPageList() 
      cy.wait(2000);

    });

    cy.log('84. Page con excerpt - pseudo desde mockaroo');  
  })
})
