class SitePage{
	//Navega a la pagina de paginas de Ghost
	visit() {
		cy.visit('http://localhost:2368/ghost/#/settings');
	}
	
	//Paginadle principal del sitio
	homeSite(){
		cy.visit('http://localhost:2368/ghost/#/site');
	}
	
	//Cambiar diseno
	editDesing(){
		cy.visit('http://localhost:2368/ghost/#/settings/design/edit');
	}
	
	//Cambiar color fondo del sitio
	changeColorSite(color){
		cy.get('[data-testid="design-setting-tabs"] > [dir="ltr"] > [aria-orientation="horizontal"] > .no-scrollbar').click();
		cy.get('button[id="site-wide"]').click();
		cy.get('button[aria-label="Pick color"]').click();
		cy.get('input[aria-label="Color value"]').clear().type(`${color}{enter}`);
		cy.get('.bg-black').click();
		cy.wait(1000);
		cy.contains('Close').click();
	}
}
export default SitePage;