// Ordenar Post con funcion helpers sobre opciones - datapool
import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('25. Ordenar Post con funcion helpers sobre opciones - datapool', function() 
{
  it('25. Ordenar Post con funcion helpers sobre opciones - datapool', function() 
  { 

    const DatosSort = require("./datos/MOCK_DATA_ORDER1.json");
    var   registro = DatosSort[Math.floor(Math.random() * DatosSort.length)];
        
    let order  = registro["order"]   

    cy.log('25. Ordenar Post con funcion datappol helpers sobre opciones');

    // Object Page para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  
    cy.wait(3000)

    // Navegacion a Página de Posts
    postPage.visitPostList();
    cy.wait(3000)
   
    // Arreglo de Opciones para que datapool escoja ordenamiento

    cy.log("---> Se escoge: "+order)
    
    postPage.orderBySelection(order);

    cy.log('25. Ordenar Post con funcion helpers sobre opciones - datapool');  
  })
})
