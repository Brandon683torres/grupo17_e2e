// Ordenamiento POST según Parámetro
import PostPage from './pages/PostPage';
import LoginPage from './pages/loginPage';

describe('06. Ordenamiento POST según Parámetro', function() 
{
  it('06. Ordenamiento POST según Parámetro', function() 
  { 
    cy.log('06. Ordenamiento POST según Parámetro');

    // Object Post para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  
    cy.wait(3000)

    // Navegacion a Página de Posts
    postPage.visitPostList();
   
    // Arreglo de Opciones dispomibles
    const opciones = ['Newest first', 'Oldest first', 'Recently updated'];

    // Seleccionamos el segundo caso - Oldest First
    let preferencia = opciones[1]
  
    postPage.orderBySelection(preferencia);

    cy.log('06. Ordenamiento POST según Parámetro');  
  })
})
