import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';


describe('30 Escenario TAG - Crear Tag con invalida descripción', function () {
    const tagsPage = new TagsPage();
    const loginPage = new LoginPage();
	const descripcion = 'Computación en la nube, inteligencia artificial, aprendizaje automático, big data, ciberseguridad, blockchain, redes 5G, internet de las cosas (IoT), desarrollo de software, realidad aumentada, realidad virtual, automatización, DevOps, inteligencia empresarial, almacenamiento en la nube, análisis de datos, sistemas embebidos, inteligencia artificial generativa, edge computing, infraestructura como código (IaC), inteligencia artificial explicable, redes neuronales, aprendizaje profundo, microservicios, contenedores, Kubernetes, Docker, inteligencia de negocios, computación cuántica, ingeniería de software, desarrollo full-stack, integración continua, despliegue continuo, seguridad informática, computación distribuida.'
	const name = 'Arte';


    beforeEach(() => {
        cy.clearCookies();
        cy.visit('http://localhost:2368/ghost/#/site');

        loginPage.loginAsAdmin();

    });

    it('30 Escenario TAG - Crear Tag con invalida descripción', () => {
        //Given
        tagsPage.visit()
        //When
        tagsPage.clickNewTagButton();
        tagsPage.tagDescription(cy).type(descripcion)
        tagsPage.tagNameInput(cy).type(name)
        //Then
        tagsPage.checkSubmitInvalid(cy)
    });

});