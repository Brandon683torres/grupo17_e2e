import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';

describe('51. Crear un nuevo Tag pseudo', function() {
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  const tagName = 'Nuevo Tag de Cypress';
  

  beforeEach(() => {
    // Given: el usuario ha iniciado sesión como administrador
    loginPage.loginAsAdmin();

    // Given: el usuario está en la página de administración de Tags
    tagsPage.visit();
  });

  it('51. Crear un nuevo Tag apriori', function() 
  {
        const url = 'https://api.mockaroo.com/api/83e6bd00?count=1000&key=36a0a2c0';  // URL de la API MOCKAROO
        cy.request(url).then((response) => 
        {     
          const datosRecibidos = response.body;             // Obtiene datos del API online - email + password
          Cypress.env('mockarooData', datosRecibidos);      // Asignarlos a una variable global

          var tuplaAleatoria = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];
        
          let tag_id          = tuplaAleatoria["tag_id"]
          let tag_descripcion = tuplaAleatoria["tag_descripcion"]

          // Given: el usuario está en la página de tags
          tagsPage.visit();

          // When: el usuario crea un nuevo tag con nombre y descripción
          tagsPage.clickNewTagButton();
          tagsPage.fillTagName(tag_id);
          tagsPage.fillTagDescription(tag_descripcion);

          // Then: el tag debería guardarse exitosamente y estar visible en la lista de tags
          tagsPage.saveTag();
  	  cy.wait(1000);
	  tagsPage.visit();
        });
  });
});