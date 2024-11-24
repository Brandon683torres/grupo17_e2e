import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';

describe('55. Crear un nuevo Tag con Canonical URL apriori', function() 
{
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  const tagName = 'Nuevo Tag de Cypress';
  
  beforeEach(() => {
    // Given: el usuario ha iniciado sesión como administrador
    loginPage.loginAsAdmin();

    // Given: el usuario está en la página de administración de tags
    tagsPage.visit();
  });

  it('54. Crear un nuevo Tag con Metadata apriori', function() 
  {
    const DatosTag  = require("./datos/MOCK_DATA_TAGS.json");
    var tuplaAleatoria = DatosTag[Math.floor(Math.random() * DatosTag.length)];
        
    let tag_id             = tuplaAleatoria["tag_id"]
    //let tag_descripcion  = tuplaAleatoria["tag_descripcion"]
    let canonical_url      = tuplaAleatoria["url"]

    // Given: el usuario está en la página de tags
    tagsPage.visit();

    // When: el usuario crea un nuevo tag con nombre, descripción y metadata
    tagsPage.clickNewTagButton();
    tagsPage.fillTagName(tag_id);
    //tagsPage.fillTagDescription(tag_descripcion);
    tagsPage.clickExpandMetadata();
    tagsPage.fillTagCanonicalURL(canonical_url)

    // Then: el tag debería guardarse exitosamente y estar visible en la lista de tags
    tagsPage.saveTag();
	cy.wait(1000);
	tagsPage.visit();
  
  });
});