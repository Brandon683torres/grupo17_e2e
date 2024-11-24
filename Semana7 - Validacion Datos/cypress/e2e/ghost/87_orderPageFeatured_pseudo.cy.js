// Ordenar Page columna Featured funcion helpers sobre opciones - pseudo mockaroo
import PagePage from './pages/PagePage';
import LoginPage from './pages/loginPage';

describe('87. Ordenar Page columna Featured funcion helpers sobre opciones - pseudo mockaroo', function() 
{
  it('87. Ordenar Page columna Featured funcion helpers sobre opciones - peuso mockaroo', function() 
  { 
    cy.log('87. Ordenar Page columna Featured funcion helpers sobre opciones - pseudo mockaroo');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();   
    cy.wait(3000)

    // Navegacion a Página de Pages
    pagePage.visitPageList();
    cy.wait(3000)

    const url = 'https://api.mockaroo.com/api/9e6c2660?key=36a0a2c0';  //  MOCKAROO - define tipo de orden para paginas
    cy.request(url).then((response) => 
    {     
      const datosRecibidos = response.body;                // Obtiene datos del API online
      Cypress.env('mockarooData', datosRecibidos);         // Asignarlos a una variable global

      var tupla = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];
        
      const order = tupla["order"]

      // Arreglo de Opciones para que datapool escoja ordenamiento

      cy.log("---> Se escoge: "+order)
    
      pagePage.orderByFeatured(order);
    });
  })
})
