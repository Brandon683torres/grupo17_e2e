import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';

describe('28 Escenario TAG -Texto Largo en el nombre del Tag', function () {
    const tagsPage = new TagsPage();
    const loginPage = new LoginPage();
	const name = 'Computación en la nube, inteligencia artificial, aprendizaje automático, big data, ciberseguridad, blockchain, redes 5G, internet de las cosas (IoT), desarrollo de software, realidad aumentada, realidad virtual, automatización, DevOps, inteligencia empresarial, almacenamiento en la nube, análisis de datos, sistemas embebidos, inteligencia artificial generativa, edge computing, infraestructura como código (IaC), inteligencia artificial explicable, redes neuronales, aprendizaje profundo, microservicios, contenedores, Kubernetes, Docker, inteligencia de negocios, computación cuántica, ingeniería de software, desarrollo full-stack, integración continua, despliegue continuo, seguridad informática, computación distribuida.'

    beforeEach(() => {
        cy.clearCookies();
        cy.visit('http://localhost:2368/ghost/#/site');

        loginPage.loginAsAdmin();

    });

    it('28 Escenario TAG -Texto Largo en el nombre del Tag', () => {
        //Given
        tagsPage.visit()
        //When
        tagsPage.clickNewTagButton();
        tagsPage.tagNameInput(cy).type(name)
        tagsPage.submit(cy)
        //Then
        tagsPage.checkIfFormError(cy)
        tagsPage.checkSubmitInvalid(cy)
    });

});
