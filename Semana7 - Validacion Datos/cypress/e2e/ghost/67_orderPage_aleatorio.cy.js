// Ordenar Page con funcion FAKER helpers sobre opciones
import PagePage from './pages/PagePage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('67. Ordenar Page con funcion FAKER helpers sobre opciones', function() 
{
  it('67. Ordenar Page con funcion FAKER helpers sobre opciones', function() 
  { 
    cy.log('67. Ordenar Page con funcion FAKER helpers sobre opciones');

    // Object Post para interacción
    const pagePage = new PagePage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  
    cy.wait(3000)

    // Navegacion a Página de Pages
    pagePage.visitPageList();
   
    // Arreglo de Opciones para que FAKER escoja ordenamiento
    const opciones = ['Newest first', 'Oldest first', 'Recently updated'];
    const seleccion = faker.helpers.arrayElement(opciones);

    cy.log("---> Se escoge: "+seleccion)
    
    pagePage.orderBySelection(seleccion);

    cy.log('67. Ordenar Page con funcion FAKER helpers sobre opciones');  
  })
})
