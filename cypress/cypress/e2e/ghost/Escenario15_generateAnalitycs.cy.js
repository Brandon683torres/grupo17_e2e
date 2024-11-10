import SettingsPage from './pages/AnalyticsPage';
import LoginPage from './pages/loginPage';

describe('Actualizar el TIMEZONE', function() {
  const analyticsPage  = new SettingsPage();
  const loginPage = new LoginPage();
  

  beforeEach(() => {
    // Given: el usuario ha iniciado sesión como administrador
    loginPage.loginAsAdmin();

    // Given: el usuario está en la página de Analytics
    analyticsPage.visit();
  });

  it('Debería exportar Analytics', function() {

    // When: El usuario hace clic en exportarAnalytics
    analyticsPage.generateAnalytics();
	cy.wait(5000);

    // Then: El Archivo Analytics es exportado
    cy.wait(3000);
    analyticsPage.return();
  });
});
