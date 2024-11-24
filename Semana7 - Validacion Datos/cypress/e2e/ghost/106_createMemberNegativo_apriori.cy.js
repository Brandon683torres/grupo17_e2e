import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';

describe('106. Create Member - apriori', function() 
{ 
  const memberPage = new MembersPage();
  const loginPage = new LoginPage();


  it('Escenario 106 - Create Member - apriori', function() 
  { 
	// cy.wait(3000);
	   
    	// Given: el usuario ha iniciado sesión como administrador
    	loginPage.loginAsAdmin();

	const DatosPost  = require("./datos/MOCK_DATA_MEMBERS.json");

	var tuplaAleatoria = DatosPost[Math.floor(Math.random() * DatosPost.length)];
        
    	let memberName    = tuplaAleatoria["email"]
    	let memberEmail = tuplaAleatoria["name"]

	// When 
	memberPage.goToMembersPage(); 
	memberPage.createMember(memberName, memberEmail); 
	// Then 
	memberPage.verifyMemberCreation(memberName); 
	}); 
});

