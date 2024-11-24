// Post con excerpt - sentencias - pseudo mockaroo
import PostPage from './pages/PostPage';
import LoginPage from './pages/loginPage';

describe('29. Post con excerpt - 2 sentencias - pseudo mockaroo', function() 
{
  it('29. Post con excerpt - 2 sentencias - pseudo mockaroo', function() 
  { 
    cy.log('29. Post con excerpt - 2 sentencias - pseudo mockaroo');

    // Object Post para interacción
    const postPage = new PostPage();

    // login con usuario valido
    const loginPage = new LoginPage();
    loginPage.loginAsAdmin(); 

    // Navegacion a Página de Posts
    postPage.visitPost();

    const url = 'https://api.mockaroo.com/api/b8bfe6a0?key=36a0a2c0';  // URL de la API MOCKAROO - titulo + parrafo
    cy.request(url).then((response) => 
    {     
      const datosRecibidos = response.body;                // Obtiene datos del API online
      Cypress.env('mockarooData', datosRecibidos);         // Asignarlos a una variable global

      var tupla = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];
        
      // Titulo del Post = Numérico 
      const tituloCaracter = tupla["titulo"]
      const parrafo = tupla["parrafo"]

      var tupla2 = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];
      const parrafo2 = tupla2["parrafo"]

      // Incrusta sample sentences como parte del contenido
      postPage.writePostData(tituloCaracter , parrafo ); 

      /// Adiciona -----> EXCERPT <--------- en propiedades del post 
      postPage.addExcerptPost(parrafo2)
      cy.wait(3000)
      postPage.clickButtons() 

     });

     cy.log('29. Post con excerpt - 2 sentencias - pseudo mockaroo');  
  })
})
