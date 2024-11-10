import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/loginPage';

describe('Actualizar el Profile', function() {
  const profilePage  = new ProfilePage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    // Given: el usuario ha iniciado sesión como administrador
    loginPage.loginAsAdmin();

    // Given: el usuario está en la página de Profile

  });

  it('Debería cambiar Profile', function() {

    // Given: el usuario está en la página de Profile
    profilePage.visit();

    // El usuario cambia Informacion del profile
    profilePage.changeProfile();
    cy.wait(5000);

    // Then: El Profile debería cambiar
    cy.wait(3000);
    profilePage.visit();
  });
});
