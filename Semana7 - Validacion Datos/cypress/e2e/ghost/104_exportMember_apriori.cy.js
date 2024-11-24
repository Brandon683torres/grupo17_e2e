import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';

describe('104. Export Members - apriori', function() 
{ 
    it('Escenario 104 - Export Members - apriori', function() 
    { 
	const memberPage = new MembersPage();
  	const loginPage = new LoginPage();

	// cy.wait(3000);
	   
    	// Given: el usuario ha iniciado sesión como administrador
    	loginPage.loginAsAdmin();

	const DatosPost  = require("./datos/MOCK_DATA_MEMBERS.json");

	var tuplaAleatoria = DatosPost[Math.floor(Math.random() * DatosPost.length)];
        
    	let memberName    = tuplaAleatoria["name"]
    	let memberEmail   = tuplaAleatoria["email"]


	// When 
	memberPage.goToMembersPage(); 
	memberPage.exportMember(); 
	// Then 
	//memberPage.verifyMemberCreation(memberName); 
	}); 
});

