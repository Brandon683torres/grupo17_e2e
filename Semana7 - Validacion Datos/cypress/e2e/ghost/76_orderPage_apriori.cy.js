// Ordenar Page con funcion helpers sobre opciones - datapool
import PagePage from './pages/PagePage';
import LoginPage from './pages/loginPage';

describe('76. Ordenar Page con funcion helpers sobre opciones - datapool', function() 
{
  it('76. Ordenar Page con funcion helpers sobre opciones - datapool', function() 
  { 

    const DatosSort = require("./datos/MOCK_DATA_ORDER1.json");
    var   registro = DatosSort[Math.floor(Math.random() * DatosSort.length)];
        
    let order  = registro["order"]   

    cy.log('76. Ordenar Page con funcion helpers sobre opciones - datapool');

    // Object Page para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin(); 
    cy.wait(3000)

    // Navegacion a Página de Pages
    pagePage.visitPageList();
    cy.wait(3000)
   
    // Arreglo de Opciones para que FAKER escoja ordenamiento

    cy.log("---> Se escoge: "+order)
    
    pagePage.orderBySelection(order);

    cy.log('76. Ordenar Page con funcion helpers sobre opciones - datapool');  
  })
})
