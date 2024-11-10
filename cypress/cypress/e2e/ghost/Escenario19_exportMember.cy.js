import  MembersPage  from './pages/MembersPage'; 
describe('Escenario 19 - Export Members', function() 
{ 
    it('Escenario 19 - Export Members', function() { 

	//cy.log('Inicia Escenario 15 - Create Member');
	const memberPage = new MembersPage();

	// Given: el usuario seconecta como administrador
 
	memberPage.navigate(); 
	memberPage.login(); 

	const memberName = 'NuevoMiembro'; 
	const memberEmail = 'miembro3@ejemplo.com'; 
	const memberName2 = 'NuevoNombre'; 

	// When el usuario exporta la lista de Members

	memberPage.goToMembersPage(); 
	memberPage.exportMember(); 

	// Then se verifica funxión de exportación

	}); 

    //cy.log('Termina Escenario 16 - Create Member');  

});

