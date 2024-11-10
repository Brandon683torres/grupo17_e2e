import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/loginPage';

describe('Actualizar el TIMEZONE', function() {
  const settingsPage  = new SettingsPage();
  const loginPage = new LoginPage();
  

  beforeEach(() => {
    // Given: el usuario ha iniciado sesión como administrador
    loginPage.loginAsAdmin();

    // Given: el usuario está en la página de Settings
    settingsPage.visit();
  });

  it('Debería cambiar Timezone', function() {

    // When: El usuario hace clic en el botón de editar Timezone
    settingsPage.clickTimeZone();

    // El usuario hace clic en el botón de acceder a Timezone
    settingsPage.clickDeleteButton();
	cy.wait(5000);

    // El usuario actualiza el Timezone
    settingsPage.updateTimezone();

    // Then: El TIMEZONE debería aparecer en la lista de settings
    cy.wait(3000);
    settingsPage.visit();
  });
});
