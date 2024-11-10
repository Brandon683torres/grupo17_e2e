import  MembersPage  from './pages/MembersPage'; 
describe('Escenario 16 - Create Member', function() 
{ 
    it('Escenario 16 - Create Member', function() { 

	//cy.log('Inicia Escenario 15 - Create Member');
	const memberPage = new MembersPage();

	// Given: el usuario ingresa al aplicativo
	memberPage.navigate(); 
	memberPage.login(); 
	
	const memberName = 'NuevoMiembro'; 
	const memberEmail = 'miembro3@ejemplo.com'; 

	// When: el usuario se conecta a la sección Members

	memberPage.goToMembersPage(); 

	// When: el usuario crea un nuevo Member

	memberPage.createMember(memberName, memberEmail); 

	// Then: se verifica creación de usuario

	memberPage.verifyMemberCreation(memberName); 
	}); 

    //cy.log('Termina Escenario 16 - Create Member');  

});

