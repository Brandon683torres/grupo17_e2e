import TagsPage from '../../pages/tagsPage';
import LoginPage from '../../pages/loginPage';
import PagesPage from '../../pages/pagesPage';

describe('Crear un nueva Pagina y Tag', function() {
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  const pagesPage = new PagesPage();
  const tagName = 'Musica';
  const tagDescription = 'Contenido de musica';
  const pageTitle = 'Pagina video';
  const videoUrl = 'https://youtu.be/lx6t1zS-bC8?si=V--NCOHghZjNOWDV';

  beforeEach(() => {
    // Given: el usuario ha iniciado sesión como administrador
    loginPage.loginAsAdmin();
  });


  it('Crear un nuevo Tag', function() {
    // Given: el usuario está en la página de tags
    tagsPage.visit();
	
	//When: el usuario verifica si el tag existe
	tagsPage.verifyTagExists(tagName).then(tagExiste => {
      if (!tagExiste) {
		// Then: el usuario crea un nuevo tag con nombre y descripción
		tagsPage.clickNewTagButton();
		tagsPage.fillTagName(tagName);
		tagsPage.fillTagDescription(tagDescription);
		tagsPage.saveTag();
	  }
	});
	cy.wait(1000);
	tagsPage.visit();
  
  });
  
  it('Crear pagina', function() {
	  // Given: el usuario esta en la pagina de paginas
	  pagesPage.visit();
	  
	  // When: el usuario crea una pagina con un video musical de Youtube
	  pagesPage.clickNewPagButton();
	  pagesPage.fillPagTitle(pageTitle);
	  cy.wait(1000);
	  pagesPage.fillPagAdd('Youtube','',videoUrl);
	  
	  // When: el usuario asigna la etiqueta previamente creada
	  pagesPage.addTag(tagName);
	  
	  // Then: la pagina se publica correctamente
	  pagesPage.publishPage();
	  cy.wait(1000);
	  
	  
  });
});