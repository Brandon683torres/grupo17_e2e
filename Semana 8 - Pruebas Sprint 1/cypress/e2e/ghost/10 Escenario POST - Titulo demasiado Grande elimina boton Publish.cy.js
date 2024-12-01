// Inclusión de Post - Titulo demasiado grande elimina boton Publish

import PostPage from './pages/PostPage';
import LoginPage from './pages/loginPage';

describe('10. titulo demasiado garnde elimia boton publish', function() 
{   
  it('10. titulo demasiado garnde elimia boton publish', function() 
  { 
    cy.log('Inicia 10. titulo demasiado garnde elimia boton publish');

    // Object Post para interacción
    const postPage = new PostPage();

    // Given: login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();

    // When: Navegacion a Página de Posts
    postPage.visitPost();

    let llaveLarga = 'X'.repeat(600);
    let contenido = ""
   
    postPage.writePostDataTituloLargo(llaveLarga, contenido); 

    // Then: Desaparece botón Publish !!!!!!!

    cy.log('Termina 10. titulo demasiado garnde elimia boton publish');  
  })
})
