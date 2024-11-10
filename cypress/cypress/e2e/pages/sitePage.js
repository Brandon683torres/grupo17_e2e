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
		cy.get('#site-wide').click();
		cy.get('button[aria-label="Pick color"]').click();
		cy.get('input[aria-label="Color value"]').clear().type(`${color}{enter}`);
		cy.get('.bg-black').click();
		cy.get('.max-h-\[82px\] > .flex > .text-grey-900').click();
	}
}
export default SitePage;