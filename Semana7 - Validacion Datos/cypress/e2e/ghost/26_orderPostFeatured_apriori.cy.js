// Ordenar Post columna Featured funcion helpers sobre opciones - datapool
import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('26. Ordenar Post columna Featured funcion helpers sobre opciones - datapool', function() 
{
  it('26. Ordenar Post columna Featured funcion helpers sobre opciones - datapool', function() 
  { 

    const DatosSort = require("./datos/MOCK_DATA_ORDER2.json");
    var   registro = DatosSort[Math.floor(Math.random() * DatosSort.length)];
        
    let order  = registro["order"]   

    cy.log('26. Ordenar Post columna Featured funcion helpers sobre opciones - datapool');

    // Object Page para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();
    cy.wait(3000)

    // Navegacion a Página de Posts
    postPage.visitPostList();
    cy.wait(3000)
   
    cy.log("---> Se escoge: "+order)
    
    postPage.orderByFeatured(order);

    cy.log('26. Ordenar Post columna Featured funcion helpers sobre opciones - datapool');  
  })
})
