// Crear POST adicionandole URL
import PostPage from './pages/PostPage';
import LoginPage from './pages/loginPage';

describe('05. Crear POST adicionandole URL', function() 
{
  it('05. Crear POST adicionandole URL', function() 
  { 
    cy.log('05. Crear POST adicionandole URL');

    // Object Post para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin(); 
    cy.wait(2500)

    // Navegacion a Página de Posts
    postPage.visitPost();
    cy.wait(2500)
   
    // Titulo del Post 
    let titulo = '00003'

    // Incrusta sample de 8 frases como parte del contenido
    postPage.writePostData(titulo , "El contenido del Post\ndesplegado en varias lineas\ntendrá también URL" ); 


    let URL = "http://www.mypage.com";
    postPage.addURLPost(URL)
    cy.wait(3000)
    postPage.clickButtons() 

    // Regreso a página de Posts

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(titulo)
    })

    cy.log('05. Crear POST adicionandole URL');  
  })
})
