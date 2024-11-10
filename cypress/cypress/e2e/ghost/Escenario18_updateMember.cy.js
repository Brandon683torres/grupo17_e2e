import  MembersPage  from './pages/MembersPage'; 
describe('Escenario 18 - Update Member', function() 
{ 
    it('Escenario 18 - Update Member', function() { 

	//cy.log('Inicia Escenario 15 - Create Member');
	const memberPage = new MembersPage();

	// Given: el usuario se coencta como administrador
	memberPage.navigate(); 
	memberPage.login(); 

	const memberName = 'NuevoMiembro'; 
	const memberEmail = 'miembro3@ejemplo.com'; 
	const memberName2 = 'NuevoNombre'; 

	// When: el usuario actualiza el nombre

	memberPage.goToMembersPage(); 
	memberPage.updateMember(memberEmail, memberName2); 

	// Then: se verifica la actualización del nombre

	//memberPage.verifyMemberCreation(memberName); 
	}); 

    //cy.log('Termina Escenario 16 - Create Member');  

});

