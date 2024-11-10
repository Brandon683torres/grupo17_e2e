class PagesPage{
	constructor() {
        this.filterDropdown = '[data-test-type-select="true"] .gh-contentfilter-menu-trigger';
        this.dropdownOptionsContainer = '.ember-power-select-options';
        this.dropdownOptions = '.ember-power-select-options li';
        this.pageTitleSelector = 'h3.gh-content-entry-title';
    }
	//Navega a la pagina de paginas de Ghost
	visit() {
		cy.visit('http://localhost:2368/ghost/#/pages');
	}
	
	//Navega a la pagina de edicion
	edit(pageId) {
        cy.visit(`http://localhost:2368/ghost/#/editor/page/${pageId}/`);
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
		
		cy.get('[data-secondary-instance="false"] > .koenig-lexical > [data-kg="editor"] > .kg-prose > p').should('be.visible').click();
		
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
				cy.get('[data-testid="bookmark-url"]').clear().type(`${text}{enter}`);
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
	
	//Actualizar publicacion
	updatePage(){
		cy.get('.gh-editor-header > .gh-editor-publish-buttons > .green > span').click();
	}
	
	//Despublicar pagina
	unpublishPage(){
		cy.get('.gh-editor-header > .gh-editor-publish-buttons > .darkgrey > span').click();
		cy.get('.gh-revert-to-draft > span').click();
		}
	
	//Eliminar pagina
	deletePage() {
		cy.get('button[title="Settings"]').click();
		cy.get('button[data-test-button="delete-post"]').click();
		cy.get('button[data-test-button="delete-post-confirm"]').click();
		cy.wait(1000);
		
	}
	
	//Filtrar las paginas publicadas
	filterPublishedPages() {
        cy.get(this.filterDropdown).click();
        cy.get(this.dropdownOptionsContainer, { timeout: 10000 }).should('be.visible');
        cy.get(this.dropdownOptions).contains('Published pages').click();
    }
	
	// Verifica si una pagina existe
	verifyPageExists(title) {
        return cy.get('.gh-list-row').then(pages => {
            const pagExiste = Array.from(pages).some(page => page.innerText.trim().includes(title));
            return pagExiste;
        });
    }
	  
	//Obtiene el id de una pagina existente
	getPageIdByTitle(title) {
        //this.filterPublishedPages();
        return cy.get(this.pageTitleSelector).then($list => {
            let foundId = null;

            $list.each((index, el) => {
                if (el.innerText.trim() === title) {
                    foundId = Cypress.$(el).parents('li').attr('data-test-post-id');
                    return false; // Breaks the loop
                }
            });

            return foundId;
        });
    }
	
}

export default PagesPage;