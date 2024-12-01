import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';


describe('22. Crea un tag con color válido y nombre no válido', function () {
    const tagsPage = new TagsPage();
    const loginPage = new LoginPage();
	const color = 'FF5733';
	const name = 'Computación en la nube, inteligencia artificial, aprendizaje automático, big data, ciberseguridad, blockchain, redes 5G, internet de las cosas (IoT), desarrollo de software, realidad aumentada, realidad virtual, automatización, DevOps, inteligencia empresarial, almacenamiento en la nube, análisis de datos, sistemas embebidos, inteligencia artificial generativa, edge computing, infraestructura como código (IaC), inteligencia artificial explicable, redes neuronales, aprendizaje profundo, microservicios, contenedores, Kubernetes, Docker, inteligencia de negocios, computación cuántica, ingeniería de software, desarrollo full-stack, integración continua, despliegue continuo, seguridad informática, computación distribuida.'

    beforeEach(() => {
        cy.clearCookies();
        cy.visit('http://localhost:2368/ghost/#/site');

        loginPage.loginAsAdmin();

    });

    it('22. Crea un tag con color válido y nombre no válido', () => {
        //Given
        tagsPage.visit()
        //When
        tagsPage.clickNewTagButton();
        tagsPage.tagColor(cy).type(color)
        tagsPage.tagNameInput(cy).type(name)
        //Then
        tagsPage.checkSubmitInvalid(cy)
    });

});