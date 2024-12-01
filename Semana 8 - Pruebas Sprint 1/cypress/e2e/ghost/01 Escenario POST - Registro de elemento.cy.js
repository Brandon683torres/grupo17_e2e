// Inclusión de Post - Llave + Contenido

import PostPage from './pages/PostPage';
import LoginPage from './pages/loginPage';

describe('01. Inclusión de Post - Llave + Contenido', function() 
{   
  it('01. Inclusión de Post - Llave + Contenido', function() 
  { 
    cy.log('Inicia 01. Inclusión de Post - Llave + Contenido');

    // Object Post para interacción
    const postPage = new PostPage();

    // Given: login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();

    // When: Navegacion a Página de Posts
    postPage.visitPost();

    let llave = "00001"
   
    postPage.writePostData(llave, "Tres lineas de texto en el POST\n Deberian ser suficientes\nFuncionan saltos de línea"); 

    postPage.clickButtons();  

    // Then: Regreso a página de Posts y verificación de inclusión exitosa

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(llave)
    })

    cy.log('Termina 01. Inclusión de Post - Llave + Contenido');  
  })
})
