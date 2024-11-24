// Ordenar Page columna Featured funcion helpers sobre opciones - datapool
import PagePage from './pages/PagePage';
import LoginPage from './pages/loginPage';

describe('77. Ordenar Page columna Featured funcion helpers sobre opciones - datapool', function() 
{
  it('77. Ordenar Page columna Featured funcion helpers sobre opciones - datapool', function() 
  { 

    const DatosSort = require("./datos/MOCK_DATA_ORDER3.json");
    var   registro = DatosSort[Math.floor(Math.random() * DatosSort.length)];
        
    let order  = registro["order"]   

    cy.log('77. Ordenar Page columna Featured funcion helpers sobre opciones - datapool');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  
    cy.wait(3000)

    // Navegacion a Página de Pages
    pagePage.visitPageList();
    cy.wait(3000)
   
    cy.log("---> Se escoge: "+order)
    
    pagePage.orderByFeatured(order);

    cy.log('77. Ordenar Page columna Featured funcion helpers sobre opciones - datapool');  
  })
})
