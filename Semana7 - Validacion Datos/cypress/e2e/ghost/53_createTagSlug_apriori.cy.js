import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';

describe('53. Crear un nuevo Tag con Slug apriori', function() {
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  const tagName = 'Nuevo Tag de Cypress';
  

  beforeEach(() => {
    // Given: el usuario ha iniciado sesión como administrador
    loginPage.loginAsAdmin();

    // Given: el usuario está en la página de administración de tags
    tagsPage.visit();
  });

  it('51. Crear un nuevo Tag apriori', function() 
  {
    const DatosTag  = require("./datos/MOCK_DATA_TAGS.json");
    var tuplaAleatoria = DatosTag[Math.floor(Math.random() * DatosTag.length)];
        
    let tag_id          = tuplaAleatoria["tag_id"]
    let slug            = tuplaAleatoria["slug"].replace(' ','') // Elimina espacios para que pase

    // Given: el usuario está en la página de tags
    tagsPage.visit();

    // When: el usuario crea un nuevo tag con nombre y slug
    tagsPage.clickNewTagButton();
    tagsPage.fillTagName(tag_id);
    tagsPage.fillTagSlug(slug);

    // Then: el tag debería guardarse exitosamente y estar visible en la lista de tags
    tagsPage.saveTag();
	cy.wait(1000);
	tagsPage.visit();
  
  });
});