// Ordenar Page columna Featured funcion FAKER helpers sobre opciones
import PagePage from './pages/PagePage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('68. Ordenar Page columna Featured funcion FAKER helpers sobre opciones', function() 
{
  it('68. Ordenar Page columna Featured funcion FAKER helpers sobre opciones', function() 
  { 
    cy.log('68. Ordenar Page columna Featured funcion FAKER helpers sobre opciones');

    // Object Post para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  
    cy.wait(3000)

    // Navegacion a Página de Pages
    pagePage.visitPageList();
   
    // Arreglo de Opciones para que FAKER escoja ordenamiento Featured
    const opciones = ['All pages','Draft pages','Published pages','Email only pages','Scheduled pages','Featured pages'];
    const seleccion = faker.helpers.arrayElement(opciones);

    cy.log("---> Se escoge: "+seleccion)
    
    pagePage.orderByFeatured(seleccion);

    cy.log('68. Ordenar Page columna Featured funcion FAKER helpers sobre opciones');  
  })
})
