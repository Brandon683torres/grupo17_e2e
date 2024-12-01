// Inclusion de Contenido POST calculado tamaño 300

import PostPage from './pages/PostPage';
import LoginPage from './pages/loginPage';

describe('08. Inclusion de Contenido calculado', function() 
{   
  it('08. Inclusion de Contenido calculado', function() 
  { 
    cy.log('08. Inclusion de Contenido calculado');

    // Object Post para interacción
    const postPage = new PostPage();

    // Given: login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();

    // When: Navegacion a Página de Posts
    postPage.visitPost();

    const caracteresPermitidos = 'pruebas0123456789 '; // Letras específicas y dígitos
    let resultado = '';
    for (let i = 0; i < 300; i++) 
    {
        const indice = Math.floor(Math.random() * caracteresPermitidos.length); // Genera un índice aleatorio
        resultado += caracteresPermitidos[indice]; // Añade el caracter aleatorio a la cadena
    }

    let llave = '000006'
   
    // And: Se escribe el POST
    postPage.writePostData(llave, resultado); 

    postPage.clickButtons();  

    // Then: Regreso a página de Posts y registro creado

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(llave)
    })

    cy.log('08. Inclusion de Contenido calculado');  
  })
})
