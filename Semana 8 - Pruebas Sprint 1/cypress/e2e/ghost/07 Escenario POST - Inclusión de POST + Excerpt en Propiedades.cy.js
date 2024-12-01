// Inclusión de POST + Excerpt en propiedades
import PostPage from './pages/PostPage';
import LoginPage from './pages/loginPage';

describe('07. Inclusión de POST + Excerpt en propiedades', function() 
{
  it('Inclusión de POST + Excerpt en propiedades', function() 
  { 
    cy.log('07. Inclusión de POST + Excerpt en propiedades');

    // Object Post para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin();  

    // Given: Navegacion a Página de Posts
    postPage.visitPost();
   
    // Titulo del Post
    let titulo    = '00004'
    // Su contenido
    let contenido = 'X'.repeat(100);

    postPage.writePostData(titulo , contenido); 

    /// Adiciona EXCERPT en propiedades del POST
    let contenido2 = 'Y'.repeat(100);

    postPage.addExcerptPost(contenido2)
    cy.wait(3000)
    postPage.clickButtons() 

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(titulo)
    })

    cy.log('07. Inclusión de POST + Excerpt en propiedades');  
  })
})
