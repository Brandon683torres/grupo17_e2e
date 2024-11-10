import  MembersPage  from './pages/MembersPage'; 
describe('Escenario 20 - Export Members', function() 
{ 
    it('Escenario 20 - Export Members', function() { 

	//cy.log('Inicia Escenario 15 - Create Member');
	const memberPage = new MembersPage();

	// Given: el usuario se conecta como administrador 
	memberPage.navigate(); 
	memberPage.login(); 
	
	const memberName = 'NuevoMiembro'; 
	const memberEmail = 'miembro3@ejemplo.com'; 
	const memberName2 = 'NuevoNombre'; 


	// When: se utiliza la funcón de filtrado de Members
 
	memberPage.goToMembersPage(); 
	memberPage.filterMember(memberName); 

	// Then: se verifica que el filtro aplica

	}); 

    //cy.log('Termina Escenario 16 - Create Member');  

});

