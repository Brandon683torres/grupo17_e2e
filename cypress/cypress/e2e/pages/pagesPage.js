class PagesPage{
	//Navega a la pagina de p[aginas de Ghost
	visit() {
		cy.visit('http://localhost:2368/ghost/#/pages');
	}
	
	//Hace clic en el boton para crear una nueva pagina
	clickNewPagButton() {
		cy.contains('New page').click();
	}
	
	//Llena el campo titulo con la variable especificada
	fillPagTitle(title) {
		cy.get('textarea[placeholder="Page title"]').clear().type(`${title}{enter}`);
	}
	
	//Llena la descripcion de la pagina
	fillPagText(text) {
		cy.get('[contenteditable="true"]').clear().type(text);
	}
	
	//Adiciona otros componentes a la pagina
	fillPagAdd(option,text,url) {
		
		cy.get('div[data-kg-plus-button="true"]').trigger('mouseover');
		
		cy.get('button[aria-label="Add a card"]').should('be.visible').click();
		
		switch(option) {
			case 'div':
				cy.get('button[data-kg-card-menu-item="Divider"]').click();
				break;
			case 'button':
				cy.get('button[data-kg-card-menu-item="Button"]').click();
				cy.get('button[data-testid="button-input-text"]').clear().type(text);
				cy.get('input[data-testid="button-input-url"]').clear().type(url);
				break;
			case 'Youtube':
				cy.get('button[data-kg-card-menu-item="YouTube"]').click();
				cy.get('input[data-testid="embed-url"]').clear().type(`${url}{enter}`);
				cy.wait(4000);
				break;
			case 'Bookmark':
				cy.get('button[data-kg-card-menu-item="Bookmark"]').click();
				cy.get('input[data-testid="bookmark-url"]').click();
				cy.get('ul[data-testid="bookmark-url-dropdown"]')
				.find('li')
				.eq(text)
				.click();
				break;
		}
	}
	
	//Asignar tag
	addTag(nameTag) {
		cy.get('button[title="Settings"]').click();
		//cy.get('div[id="tag-input"]').type(nameTag);
		
		cy.get('.ember-power-select-trigger-multiple-input').first().type(nameTag+'{enter}');
		cy.get('button[title="Settings"]').click();
		cy.wait(1000);
		
	}
	
	//Publicar pagina
	publishPage() {
		cy.get('button[data-test-button="publish-flow"]').eq(0).click();
		
		cy.get('button[data-test-button="continue"]').click();
		cy.get('button[data-test-button="confirm-publish"]').click();
		cy.wait(4000);
		cy.get('button[data-test-button="close-publish-flow"]').click();
	}
	
	//Programar publicacion
	scheduledPage(date,time) {
		cy.get('button[data-test-button="publish-flow"]').click();
		cy.get('button[class="gh-publish-setting-title"]').click();
		cy.get('div[data-test-radio="schedule"]').click();
		cy.get('input[placeholder="YYYY-MM-DD"]').clear().type(date);
		cy.get('input[data-test-date-time-picker-time-input]').clear().type(time);
		cy.get('button[data-test-button="continue"]').click();
		cy.get('span[data-test-task-button-state="idle"]').click();
		cy.wait(4000);
		cy.get('button[data-test-button="close-publish-flow"]').click();
	}
	
	
}

export default PagesPage;