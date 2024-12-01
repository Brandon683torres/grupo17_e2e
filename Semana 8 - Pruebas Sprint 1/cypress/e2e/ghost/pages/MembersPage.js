class MembersPage 
{
    navigate() {
        cy.visit('http://localhost:2368/ghost/#/signin'); 
    }

    login() {

	const username = 'f.diaza@uniandes.edu.co'; 
	const password = 'Banrep3697*';  
        cy.get('input[name="identification"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('.login').click();
    }

    goToMembersPage() {
        cy.visit('http://localhost:2368/ghost/#/members/');
    }

    createMember(name, email) {

	Cypress.on('uncaught:exception', (err, runnable) => {
    	return false
	})

	cy.visit('http://localhost:2368/ghost/#/members/new/'); 

	//cy.wait(3000);
        cy.get('input[name="name"]').type(name);
        cy.get('input[name="email"]').type(email);
        cy.get('button').contains('Save').click();
    }

 

    verifyMemberCreation(name) {
	cy.visit('http://localhost:2368/ghost/#/members/'); 
        cy.get('tbody').contains('tr', name).should('exist');
    }


    deleteMember(email) {
	Cypress.on('uncaught:exception', (err, runnable) => {
    	return false
	})
	cy.visit('http://localhost:2368/ghost/#/members/'); 
        cy.contains(email).click();
	cy.get('button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view').click();
	cy.contains('Delete member').click();
	cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();

    }

	updateMember(email, newName) {
	Cypress.on('uncaught:exception', (err, runnable) => {
    	return false
	})
	cy.visit('http://localhost:2368/ghost/#/members/'); 
        cy.contains(email).click();
	
        cy.get('input[name="name"]').clear();

        cy.get('input[name="name"]').type(newName);

	cy.get('button').contains('Save').click();

	cy.visit('http://localhost:2368/ghost/#/members/'); 

    }



	exportMember() {
	Cypress.on('uncaught:exception', (err, runnable) => {
    	return false
	})
	cy.visit('http://localhost:2368/ghost/#/members/'); 
        


	cy.get('button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view').click();
	cy.contains('Export all members').click();


    }


	importMember() {
	Cypress.on('uncaught:exception', (err, runnable) => {
    	return false
	})
	cy.visit('http://localhost:2368/ghost/#/members/'); 
        


	cy.get('button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view').click();
	cy.contains('Import members').click();


    }

	filterMember(miembro) {
	Cypress.on('uncaught:exception', (err, runnable) => {
    	return false
	})
	cy.visit('http://localhost:2368/ghost/#/members/'); 
        

	Cypress.on('uncaught:exception', (err, runnable) => {
	cy.contains('Filter').click();	
    	return false
	})

	cy.wait(3000);
        cy.get('input[class="gh-input"]').type(miembro);
	cy.contains('Apply filters').click();

    }

}

export default MembersPage;