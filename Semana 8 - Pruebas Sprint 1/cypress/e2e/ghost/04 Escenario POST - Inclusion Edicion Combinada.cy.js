import PostPage from './pages/PostPage';
import LoginPage from './pages/loginPage';

describe('04. Crea Post y ejecuta Edición combinada', function() 
{   
  it('04. Crea Post y ejecuta Edición combinada', function() 
  { 
    cy.log('04. Crea Post y ejecuta Edición combinada');

    // Object Post para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin(); 

    // Navegacion a Página de Posts
    postPage.visitPost();
   
    // Titulo del Post = Dato FAKER
    const tituloPost = "00002"
    const TextoInicial = "Texto inicial corto"
    const TextoComplementario = "\nOtro Texto en la siguiente línea\n"

    // Incrusta Data como parte del contenido
    postPage.writePostData(tituloPost, TextoInicial); 

    postPage.clickButtons();  

    // Regreso a página de Posts y reescritura aleatoria con alpha más grande

    postPage.selectPostInsertado(tituloPost)
    postPage.writePostDataEdit(tituloPost, TextoComplementario);
    postPage.clickButtons();  

    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(tituloPost)
    })

    cy.log('04. Crea Post y ejecuta Edición combinada');  
  })
})
