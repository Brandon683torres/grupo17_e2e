// Ordenar Post con funcion FAKER helpers sobre opciones
import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('16. Ordenar Post con funcion FAKER helpers sobre opciones', function() 
{
  it('16. Ordenar Post con funcion FAKER sobre opciones', function() 
  { 
    cy.log('16. Ordenar Post con funcion FAKER helpers sobre opciones');

    // Object Post para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  
    cy.wait(3000)

    // Navegacion a Página de Posts
    postPage.visitPostList();
   
    // Arreglo de Opciones para que FAKER escoja ordenamiento
    const opciones = ['Newest first', 'Oldest first', 'Recently updated'];
    const seleccion = faker.helpers.arrayElement(opciones);

    cy.log("---> Se escoge: "+seleccion)
    
    postPage.orderBySelection(seleccion);

    cy.log('16. Ordenar Post con funcion FAKER helpers sobre opciones');  
  })
})
