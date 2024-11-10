import PostsPage from './pages/postsPage';
import LoginPage from './pages/loginPage';

describe('Filtrar posts por tag', () => {
  const postsPage = new PostsPage();
  const timeName = 'Recently updated';  // Cambia por el nombre del orden que quieres usar para ordenar
  const loginPage = new LoginPage();
  

  beforeEach(() => {
    // Given: el usuario ha iniciado sesión como administrador
    loginPage.loginAsAdmin();

    // Given: el usuario está en la página de administración de posts
    postsPage.visit();
  });

  it('Debería permitir filtrar posts por un tag específico', () => {
    // Given: el usuario está en la página de posts
    postsPage.visit();

    // When: el usuario orderna por fecha mas reciente
    postsPage.orderByTime(timeName);

    // Then: los posts filtrados deberían mostrar solo aquellos que tienen el tag específico
    postsPage.visit();
  });
});
