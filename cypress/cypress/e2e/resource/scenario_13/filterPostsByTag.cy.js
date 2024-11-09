import PostsPage from './pages/postsPage';
import LoginPage from './pages/loginPage';

describe('Filtrar posts por tag', () => {
  const postsPage = new PostsPage();
  const loginPage = new LoginPage();
  const tagName = 'tag1';  // Cambia por el nombre del tag que quieres usar para filtrar
  

  beforeEach(() => {
    // Given: el usuario ha iniciado sesión como administrador
    loginPage.loginAsAdmin();

    // Given: el usuario está en la página de administración de posts
    postsPage.visit();
  });

  it('Debería permitir filtrar posts por un tag específico', () => {
    // Given: el usuario está en la página de posts
    postsPage.visit();

    // When: el usuario selecciona un tag específico para filtrar los posts
        postsPage.filterByTag(tagName);

    // Then: los posts filtrados deberían mostrar solo aquellos que tienen el tag específico
    	postsPage.visit();
  });
});
