// Page con URL en propiedades - pseudo desde mockaroo
import PagePage from './pages/PagePage';
import LoginPage from './pages/loginPage';

describe('85. Page con URL en propiedades - pseudo desde mockaroo', function() 
{
  it('85. Page con URL en propiedades - pseudo desde mockaroo', function() 
  { 
    cy.log('85. Page con URL en propiedades - pseudo desde mockaroo');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  
    cy.wait(2000);

    // Navegacion a Página de Pages
    pagePage.visitPage();

   const url = 'https://api.mockaroo.com/api/d64e27e0?&key=36a0a2c0';  // URL de la API MOCKAROO titulo + contenido + url

    let inicial = ''
    cy.request(url).then((response) => 
    {     
      const datosRecibidos = response.body;                // Obtiene datos del API online
      Cypress.env('mockarooData', datosRecibidos);         // Asignarlos a una variable global

      var tupla = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];
        
      let titulo            = tupla["titulo"]         
      let contenido         = tupla["contenido"]              
      let url               = tupla["url"]                            

      pagePage.writePageData(titulo, contenido); 

      /// Adiciona ===> URL <=== en propiedades de la page
      pagePage.addURLPage(url)
      cy.wait(3000)
      pagePage.clickButtons() 

      // Regreso a página de Pages

      pagePage.visitPageList() 
      cy.wait(2000);

    });

    cy.log('85. Page con URL en propiedades - pseudo desde mockaroo');  
  })
})
