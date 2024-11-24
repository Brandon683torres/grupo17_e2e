// Ordenar Post columna Featured funcion FAKER helpers sobre opciones
import PostPage from './pages/PostPage';
import {faker} from '@faker-js/faker'
import LoginPage from './pages/loginPage';

describe('17. Ordenar Post columna Featured funcion FAKER helpers sobre opciones', function() 
{
  it('17. Ordenar Post columna Featured funcion FAKER helpers sobre opciones', function() 
  { 
    cy.log('17. Ordenar Post columna Featured funcion FAKER helpers sobre opciones');

    // Object Post para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  
    cy.wait(3000)

    // Navegacion a Página de Posts
    postPage.visitPostList();
   
    // Arreglo de Opciones para que FAKER escoja ordenamiento Featured
    const opciones = ['All posts','Draft posts','Published posts','Email only posts','Scheduled posts','Featured posts'];
    const seleccion = faker.helpers.arrayElement(opciones);

    cy.log("---> Se escoge: "+seleccion)
    
    postPage.orderByFeatured(seleccion);

    cy.log('17. Ordenar Post columna Featured funcion FAKER helpers sobre opciones');  
  })
})
