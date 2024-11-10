import  MembersPage  from './pages/MembersPage'; 
describe('Escenario 17 - Delete Member', function() 
{ 
    it('Escenario 17 - Delete Member', function() { 

	//cy.log('Inicia Escenario 15 - Create Member');
	const memberPage = new MembersPage();

	// Given: el usuario ha iniciado sesión como administrador
	memberPage.navigate(); 
	memberPage.login(); 

	const memberName = 'NuevoMiembro'; 
	const memberEmail = 'miembro4@ejemplo.com'; 

	// When: se elimina Member con base en su email

	memberPage.goToMembersPage(); 
	memberPage.deleteMember(memberEmail); 

	// Then: se verifica eliminación de Member

	//memberPage.verifyMemberCreation(memberName); 
	}); 

    //cy.log('Termina Escenario 16 - Create Member');  

});

