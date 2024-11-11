import { SignInPage } from "./pages/signinPage.cy";
import PagePage from './pages/PagePage';

describe("Escenario 14 - Cambiar Banner", () => {

    it("Escenario 14 - Cambiar Banner", () => {
        // Given: el usuario ha iniciado sesión como administrador

        const pagePage = new PagePage();
        pagePage.login();

        // When: el usuario actualiza 

        let generalPage = homePage.goToGeneralSettings();

        // And: el usuario borra el banner

        generalPage.deleteBanner();
        homePage.goToMainPageSite();
        let withoutBanner = generalPage.verifyBanner();
        withoutBanner.should('have.class', 'no-image');
        homePage.goToGeneralSettings();

        // And: el usuario sube el banner

        generalPage.uploadBanner("c:\cypress\cypress\e2e\ghost\pages\banner.jpg");

        // And: el usuario va a la pagina principal

        homePage.goToMainPageSite();
        let withBanner = generalPage.verifyBanner();

        // Then: se ve el cambio en la pagina

        withBanner.should('have.class', 'responsive-header-img');
    })
})
